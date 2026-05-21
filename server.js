const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const positiveWords = ["大漲", "上漲", "走高", "強攻", "買盤", "利多", "增長", "創高", "急單", "旺", "回補", "升級", "轉強", "獲利", "營收成長", "飆", "爆發", "建倉", "敲進", "領航", "出運", "點名", "大讚", "突破", "攻高"];
const negativeWords = ["下跌", "重挫", "走弱", "賣壓", "利空", "衰退", "保守", "回檔", "修正", "減少", "虧損", "降評", "轉弱", "承壓", "示警", "降溫", "違約交割", "崩潰", "賠", "恐已到", "終止", "調節"];

function sendJson(res, data, status = 200) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  res.end(JSON.stringify(data));
}

function sendFile(res, pathname) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(root, safePath));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": mime[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

function toNumber(value) {
  if (!value || value === "-" || value === "--") return null;
  const number = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(number) ? number : null;
}

function normalizePrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(number * 100) / 100 : null;
}

function firstBookPrice(value) {
  const first = String(value || "").split("_").find((part) => part && part !== "-");
  return toNumber(first);
}

function quotePrice(item) {
  const traded = toNumber(item.z) ?? toNumber(item.pz);
  if (traded) return { price: traded, priceSource: "last" };

  const ask = firstBookPrice(item.a);
  const bid = firstBookPrice(item.b);
  if (ask && bid) return { price: Math.round(((ask + bid) / 2) * 100) / 100, priceSource: "bidAskMid" };

  const open = toNumber(item.o);
  if (open) return { price: open, priceSource: "open" };

  return { price: toNumber(item.y), priceSource: "previousClose" };
}

function yyyymmdd(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function addMonths(date, offset) {
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}

function parseTwseDate(value) {
  const parts = String(value).split("/");
  if (parts.length !== 3) return value;
  const year = Number(parts[0]) + 1911;
  return `${year}-${parts[1].padStart(2, "0")}-${parts[2].padStart(2, "0")}`;
}

function taipeiDateFromTimestamp(timestamp) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date(timestamp * 1000));
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function chunk(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  return chunks;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 TaiwanStockSim/1.0",
      referer: "https://mis.twse.com.tw/stock/index.jsp"
    }
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function fetchMarket(symbols) {
  const uniqueSymbols = [...new Set(symbols)].filter(Boolean);
  const channels = uniqueSymbols.flatMap((symbol) => [`tse_${symbol}.tw`, `otc_${symbol}.tw`]);
  const quotes = new Map();

  for (const group of chunk(channels, 60)) {
    const url = `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${encodeURIComponent(group.join("|"))}&json=1&delay=0&_=${Date.now()}`;
    const data = await fetchJson(url);
    for (const item of data.msgArray || []) {
      const symbol = item.c;
      const { price, priceSource } = quotePrice(item);
      if (!symbol || !price) continue;
      quotes.set(symbol, {
        symbol,
        name: item.n || symbol,
        exchange: item.ex,
        price,
        priceSource,
        bid: firstBookPrice(item.b),
        ask: firstBookPrice(item.a),
        open: toNumber(item.o),
        high: toNumber(item.h),
        low: toNumber(item.l),
        previousClose: toNumber(item.y),
        volume: toNumber(item.v),
        temporalVolume: toNumber(item.tv),
        date: item.d,
        time: item.t
      });
    }
  }

  let index = null;
  try {
    const data = await fetchJson(`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_t00.tw&json=1&delay=0&_=${Date.now()}`);
    const item = data.msgArray?.[0];
    if (item) {
      index = {
        price: toNumber(item.z) ?? toNumber(item.y),
        previousClose: toNumber(item.y),
        date: item.d,
        time: item.t
      };
    }
  } catch {
    index = null;
  }

  return { quotes: [...quotes.values()], index, fetchedAt: new Date().toISOString(), source: "TWSE MIS" };
}

async function fetchHistory(symbol) {
  const yahooTw = await fetchYahooHistory(symbol, "TW");
  if (yahooTw.candles.length > 0) return yahooTw;
  const yahooTwo = await fetchYahooHistory(symbol, "TWO");
  if (yahooTwo.candles.length > 0) return yahooTwo;
  const twse = await fetchTwseHistory(symbol);
  if (twse.candles.length > 0) return twse;
  return fetchTpexHistory(symbol);
}

async function fetchIntraday(symbol) {
  const yahooTw = await fetchYahooIntraday(symbol, "TW");
  if (yahooTw.candles.length > 0) return yahooTw;
  return fetchYahooIntraday(symbol, "TWO");
}

async function fetchYahooHistory(symbol, suffix) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(`${symbol}.${suffix}`)}?range=6mo&interval=1d&events=history`;
  try {
    const data = await fetchJson(url);
    const result = data.chart?.result?.[0];
    const timestamps = result?.timestamp || [];
    const quote = result?.indicators?.quote?.[0] || {};
    const rows = timestamps
      .map((timestamp, index) => {
        const open = normalizePrice(quote.open?.[index]);
        const high = normalizePrice(quote.high?.[index]);
        const low = normalizePrice(quote.low?.[index]);
        const close = normalizePrice(quote.close?.[index]);
        if (![open, high, low, close].every(Number.isFinite)) return null;
        return {
          time: taipeiDateFromTimestamp(timestamp),
          open,
          high,
          low,
          close,
          volume: Math.max(1, Math.round((Number(quote.volume?.[index]) || 0) / 1000))
        };
      })
      .filter(Boolean);
    return { symbol, candles: rows.slice(-88), source: `Yahoo Finance ${symbol}.${suffix}` };
  } catch {
    return { symbol, candles: [], source: `Yahoo Finance ${symbol}.${suffix}` };
  }
}

async function fetchYahooIntraday(symbol, suffix) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(`${symbol}.${suffix}`)}?range=1d&interval=1m&includePrePost=false`;
  try {
    const data = await fetchJson(url);
    const result = data.chart?.result?.[0];
    const timestamps = result?.timestamp || [];
    const quote = result?.indicators?.quote?.[0] || {};
    const rows = timestamps
      .map((timestamp, index) => {
        const close = normalizePrice(quote.close?.[index]);
        if (!close) return null;
        const open = normalizePrice(quote.open?.[index]) ?? close;
        const high = normalizePrice(quote.high?.[index]) ?? close;
        const low = normalizePrice(quote.low?.[index]) ?? close;
        return {
          time: `${taipeiDateFromTimestamp(timestamp)} ${new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Taipei",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          }).format(new Date(timestamp * 1000))}`,
          open,
          high,
          low,
          close,
          volume: Math.max(1, Math.round((Number(quote.volume?.[index]) || 0) / 1000))
        };
      })
      .filter(Boolean);
    return { symbol, candles: rows.slice(-270), source: `Yahoo Finance intraday ${symbol}.${suffix}` };
  } catch {
    return { symbol, candles: [], source: `Yahoo Finance intraday ${symbol}.${suffix}` };
  }
}

async function fetchTwseHistory(symbol) {
  const rows = [];
  const now = new Date();
  for (let offset = -5; offset <= 0; offset += 1) {
    const month = addMonths(now, offset);
    const url = `https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY?response=json&date=${yyyymmdd(month)}&stockNo=${encodeURIComponent(symbol)}`;
    try {
      const data = await fetchJson(url);
      for (const row of data.data || []) {
        const open = toNumber(row[3]);
        const high = toNumber(row[4]);
        const low = toNumber(row[5]);
        const close = toNumber(row[6]);
        if (!open || !high || !low || !close) continue;
        rows.push({
          time: parseTwseDate(row[0]),
          open,
          high,
          low,
          close,
          volume: Math.max(1, Math.round((toNumber(row[1]) || 0) / 1000))
        });
      }
    } catch {
      // Some symbols are OTC or unavailable in TWSE monthly data.
    }
  }
  const unique = new Map(rows.map((row) => [row.time, row]));
  return { symbol, candles: [...unique.values()].sort((a, b) => a.time.localeCompare(b.time)).slice(-88), source: "TWSE STOCK_DAY" };
}

async function fetchTpexHistory(symbol) {
  const rows = [];
  const now = new Date();
  for (let offset = -5; offset <= 0; offset += 1) {
    const month = addMonths(now, offset);
    const rocYear = month.getFullYear() - 1911;
    const rocMonth = String(month.getMonth() + 1).padStart(2, "0");
    const url = `https://www.tpex.org.tw/web/stock/aftertrading/daily_trading_info/st43_result.php?d=${rocYear}/${rocMonth}&stkno=${encodeURIComponent(symbol)}`;
    try {
      const data = await fetchJson(url);
      for (const row of data.aaData || []) {
        const open = toNumber(row[3]);
        const high = toNumber(row[4]);
        const low = toNumber(row[5]);
        const close = toNumber(row[6]);
        if (!open || !high || !low || !close) continue;
        rows.push({
          time: parseTwseDate(row[0]),
          open,
          high,
          low,
          close,
          volume: Math.max(1, Math.round((toNumber(row[1]) || 0) / 1000))
        });
      }
    } catch {
      // Symbol may be listed on TWSE, ETF-only, or unavailable for this month.
    }
  }
  const unique = new Map(rows.map((row) => [row.time, row]));
  return { symbol, candles: [...unique.values()].sort((a, b) => a.time.localeCompare(b.time)).slice(-88), source: "TPEx st43_result" };
}

function decodeXml(text) {
  return String(text || "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function pickTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeXml(match?.[1] || "");
}

function scoreTitle(title) {
  let score = 0;
  positiveWords.forEach((word) => {
    if (title.includes(word)) score += 1;
  });
  negativeWords.forEach((word) => {
    if (title.includes(word)) score -= 1.15;
  });
  return score;
}

function matchSymbols(title, stocks) {
  const matched = stocks
    .filter((stock) => title.includes(stock.symbol) || title.includes(stock.name) || title.includes(stock.sector) || title.includes(stock.group))
    .map((stock) => stock.symbol);
  return [...new Set(matched)].slice(0, 8);
}

async function fetchNews(stocks) {
  const queries = [
    "台股 股票",
    "台積電 AI 伺服器 台股",
    "航運股 長榮 陽明 萬海",
    "金融股 富邦金 國泰金 中信金",
    "台股 ETF 高股息 半導體"
  ];
  const items = [];

  for (const query of queries) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(`${query} when:2d`)}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant`;
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 TaiwanStockSim/1.0" } });
    if (!response.ok) continue;
    const xml = await response.text();
    const blocks = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];
    for (const block of blocks) {
      const title = pickTag(block, "title");
      const link = pickTag(block, "link");
      const source = pickTag(block, "source");
      const publishedAt = pickTag(block, "pubDate");
      if (!title || items.some((item) => item.title === title)) continue;
      const score = scoreTitle(title);
      const symbols = matchSymbols(title, stocks);
      const fallbackSymbols = symbols.length ? symbols : ["2330", "0050", "2317", "2881"];
      items.push({
        id: Buffer.from(title).toString("base64url").slice(0, 18),
        title,
        body: source ? `來源：${source}` : "Google News RSS",
        source: source || "Google News",
        link,
        time: publishedAt || new Date().toUTCString(),
        symbols: fallbackSymbols,
        impact: Math.max(-0.0055, Math.min(0.0045, score * 0.0018)),
        volumeBoost: Math.max(1.25, Math.min(2.7, 1.45 + Math.abs(score) * 0.35)),
        tone: score > 0 ? "利多" : score < 0 ? "利空" : "中性"
      });
      if (items.length >= 12) return items;
    }
  }
  return items;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (url.pathname === "/api/market") {
      const symbols = (url.searchParams.get("symbols") || "").split(",");
      sendJson(res, await fetchMarket(symbols));
      return;
    }
    if (url.pathname === "/api/history") {
      const symbol = url.searchParams.get("symbol");
      if (!symbol) throw new Error("Missing symbol");
      sendJson(res, await fetchHistory(symbol));
      return;
    }
    if (url.pathname === "/api/intraday") {
      const symbol = url.searchParams.get("symbol");
      if (!symbol) throw new Error("Missing symbol");
      sendJson(res, await fetchIntraday(symbol));
      return;
    }
    if (url.pathname === "/api/news") {
      const body = req.method === "POST" ? JSON.parse((await readBody(req)) || "{}") : {};
      const stocks = body.stocks || JSON.parse(url.searchParams.get("stocks") || "[]");
      sendJson(res, { news: await fetchNews(stocks), fetchedAt: new Date().toISOString(), source: "Google News RSS" });
      return;
    }
    sendFile(res, url.pathname);
  } catch (error) {
    sendJson(res, { error: error.message }, 502);
  }
});

server.listen(port, () => {
  console.log(`台股模擬交易台已啟動：http://localhost:${port}`);
});
