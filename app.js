const stocks = [
  { symbol: "2330", name: "台積電", sector: "先進封裝", group: "AI", price: 2185, volatility: 0.008, drift: 0.0008, baseVolume: 92000 },
  { symbol: "3711", name: "日月光投控", sector: "先進封裝", group: "AI", price: 218, volatility: 0.011, drift: 0.0005, baseVolume: 52000 },
  { symbol: "6451", name: "訊芯-KY", sector: "先進封裝", group: "AI", price: 236, volatility: 0.018, drift: 0.0004, baseVolume: 12500 },
  { symbol: "6257", name: "矽格", sector: "先進封裝", group: "AI", price: 78.6, volatility: 0.012, drift: 0.0003, baseVolume: 18000 },
  { symbol: "3265", name: "台星科", sector: "先進封裝", group: "AI", price: 132, volatility: 0.014, drift: 0.0003, baseVolume: 11800 },
  { symbol: "6515", name: "穎崴", sector: "先進封裝", group: "AI", price: 1680, volatility: 0.016, drift: 0.0005, baseVolume: 6200 },
  { symbol: "2317", name: "鴻海", sector: "AI 代工", group: "AI", price: 207.5, volatility: 0.012, drift: 0.0003, baseVolume: 145000 },
  { symbol: "2382", name: "廣達", sector: "AI 代工", group: "AI", price: 285, volatility: 0.014, drift: 0.0004, baseVolume: 86000 },
  { symbol: "3231", name: "緯創", sector: "AI 代工", group: "AI", price: 121, volatility: 0.018, drift: 0.0004, baseVolume: 112000 },
  { symbol: "6669", name: "緯穎", sector: "AI 代工", group: "AI", price: 2860, volatility: 0.017, drift: 0.0005, baseVolume: 5200 },
  { symbol: "2356", name: "英業達", sector: "AI 代工", group: "AI", price: 49.8, volatility: 0.014, drift: 0.0002, baseVolume: 58000 },
  { symbol: "2357", name: "華碩", sector: "AI 代工", group: "AI", price: 615, volatility: 0.011, drift: 0.0003, baseVolume: 16000 },
  { symbol: "2376", name: "技嘉", sector: "AI 代工", group: "AI", price: 322, volatility: 0.017, drift: 0.0003, baseVolume: 26000 },
  { symbol: "3017", name: "奇鋐", sector: "散熱", group: "AI", price: 1045, volatility: 0.018, drift: 0.0005, baseVolume: 31000 },
  { symbol: "3324", name: "雙鴻", sector: "散熱", group: "AI", price: 835, volatility: 0.019, drift: 0.0004, baseVolume: 19500 },
  { symbol: "3653", name: "健策", sector: "散熱", group: "AI", price: 2160, volatility: 0.016, drift: 0.0004, baseVolume: 7600 },
  { symbol: "2421", name: "建準", sector: "散熱", group: "AI", price: 116, volatility: 0.015, drift: 0.0003, baseVolume: 21000 },
  { symbol: "6230", name: "尼得科超眾", sector: "散熱", group: "AI", price: 318, volatility: 0.018, drift: 0.0003, baseVolume: 9800 },
  { symbol: "2327", name: "國巨", sector: "被動元件", group: "AI", price: 690, volatility: 0.011, drift: 0.0003, baseVolume: 16000 },
  { symbol: "2492", name: "華新科", sector: "被動元件", group: "AI", price: 118, volatility: 0.012, drift: 0.0002, baseVolume: 15500 },
  { symbol: "3026", name: "禾伸堂", sector: "被動元件", group: "AI", price: 102, volatility: 0.012, drift: 0.0002, baseVolume: 7200 },
  { symbol: "2428", name: "興勤", sector: "被動元件", group: "AI", price: 178, volatility: 0.012, drift: 0.0002, baseVolume: 5400 },
  { symbol: "2308", name: "台達電", sector: "電源管理", group: "AI", price: 1750, volatility: 0.009, drift: 0.0004, baseVolume: 38000 },
  { symbol: "2301", name: "光寶科", sector: "電源管理", group: "AI", price: 132, volatility: 0.012, drift: 0.0003, baseVolume: 34000 },
  { symbol: "6412", name: "群電", sector: "電源管理", group: "AI", price: 148, volatility: 0.012, drift: 0.0002, baseVolume: 7300 },
  { symbol: "3015", name: "全漢", sector: "電源管理", group: "AI", price: 86.5, volatility: 0.014, drift: 0.0002, baseVolume: 13800 },
  { symbol: "5309", name: "系統電", sector: "電源管理", group: "AI", price: 42.6, volatility: 0.018, drift: 0.0002, baseVolume: 22000 },
  { symbol: "3037", name: "欣興", sector: "PCB", group: "AI", price: 196, volatility: 0.014, drift: 0.0003, baseVolume: 42000 },
  { symbol: "2368", name: "金像電", sector: "PCB", group: "AI", price: 256, volatility: 0.016, drift: 0.0004, baseVolume: 28500 },
  { symbol: "2313", name: "華通", sector: "PCB", group: "AI", price: 78.5, volatility: 0.012, drift: 0.0002, baseVolume: 36000 },
  { symbol: "3189", name: "景碩", sector: "PCB", group: "AI", price: 112, volatility: 0.014, drift: 0.0002, baseVolume: 18000 },
  { symbol: "2383", name: "台光電", sector: "CCL", group: "AI", price: 742, volatility: 0.016, drift: 0.0005, baseVolume: 22500 },
  { symbol: "6274", name: "台燿", sector: "CCL", group: "AI", price: 198, volatility: 0.016, drift: 0.0004, baseVolume: 18600 },
  { symbol: "6213", name: "聯茂", sector: "CCL", group: "AI", price: 118, volatility: 0.014, drift: 0.0003, baseVolume: 16200 },
  { symbol: "8358", name: "金居", sector: "CCL", group: "AI", price: 76.8, volatility: 0.015, drift: 0.0002, baseVolume: 17000 },
  { symbol: "3081", name: "聯亞", sector: "光通訊", group: "AI", price: 365, volatility: 0.02, drift: 0.0004, baseVolume: 9200 },
  { symbol: "4979", name: "華星光", sector: "光通訊", group: "AI", price: 186, volatility: 0.022, drift: 0.0004, baseVolume: 21000 },
  { symbol: "6442", name: "光聖", sector: "光通訊", group: "AI", price: 765, volatility: 0.021, drift: 0.0004, baseVolume: 8800 },
  { symbol: "3450", name: "聯鈞", sector: "光通訊", group: "AI", price: 284, volatility: 0.021, drift: 0.0004, baseVolume: 17500 },
  { symbol: "4908", name: "前鼎", sector: "光通訊", group: "AI", price: 103, volatility: 0.02, drift: 0.0003, baseVolume: 11200 },
  { symbol: "3163", name: "波若威", sector: "光通訊", group: "AI", price: 152, volatility: 0.02, drift: 0.0003, baseVolume: 14600 },
  { symbol: "3665", name: "貿聯-KY", sector: "連接器", group: "AI", price: 865, volatility: 0.014, drift: 0.0004, baseVolume: 10500 },
  { symbol: "3533", name: "嘉澤", sector: "連接器", group: "AI", price: 1580, volatility: 0.014, drift: 0.0004, baseVolume: 5200 },
  { symbol: "6290", name: "良維", sector: "連接器", group: "AI", price: 94.6, volatility: 0.015, drift: 0.0002, baseVolume: 9800 },
  { symbol: "6715", name: "嘉基", sector: "連接器", group: "AI", price: 176, volatility: 0.015, drift: 0.0002, baseVolume: 6100 },
  { symbol: "3217", name: "優群", sector: "連接器", group: "AI", price: 182, volatility: 0.014, drift: 0.0002, baseVolume: 7600 },
  { symbol: "2408", name: "南亞科", sector: "記憶體", group: "AI", price: 78.4, volatility: 0.018, drift: 0.0003, baseVolume: 68000 },
  { symbol: "2344", name: "華邦電", sector: "記憶體", group: "AI", price: 31.9, volatility: 0.017, drift: 0.0002, baseVolume: 72000 },
  { symbol: "3260", name: "威剛", sector: "記憶體", group: "AI", price: 112, volatility: 0.016, drift: 0.0003, baseVolume: 21000 },
  { symbol: "4967", name: "十銓", sector: "記憶體", group: "AI", price: 124, volatility: 0.018, drift: 0.0003, baseVolume: 16500 },
  { symbol: "8271", name: "宇瞻", sector: "記憶體", group: "AI", price: 71.2, volatility: 0.015, drift: 0.0002, baseVolume: 9000 },
  { symbol: "8374", name: "羅昇", sector: "自動化", group: "AI", price: 112, volatility: 0.022, drift: 0.0003, baseVolume: 13500 },
  { symbol: "8234", name: "新漢", sector: "自動化", group: "AI", price: 72.5, volatility: 0.018, drift: 0.0002, baseVolume: 8800 },
  { symbol: "2365", name: "昆盈", sector: "自動化", group: "AI", price: 39.4, volatility: 0.02, drift: 0.0002, baseVolume: 12800 },
  { symbol: "2454", name: "聯發科", sector: "AI ASIC", group: "AI", price: 1720, volatility: 0.011, drift: 0.0006, baseVolume: 31000 },
  { symbol: "2603", name: "長榮", sector: "貨櫃航運", group: "航運", price: 186, volatility: 0.016, drift: 0.0001, baseVolume: 168000 },
  { symbol: "2609", name: "陽明", sector: "貨櫃航運", group: "航運", price: 78.5, volatility: 0.017, drift: 0.0001, baseVolume: 132000 },
  { symbol: "2615", name: "萬海", sector: "貨櫃航運", group: "航運", price: 92.1, volatility: 0.017, drift: 0.0001, baseVolume: 88000 },
  { symbol: "2606", name: "裕民", sector: "散裝航運", group: "航運", price: 58.4, volatility: 0.013, drift: 0.0001, baseVolume: 23000 },
  { symbol: "2637", name: "慧洋-KY", sector: "散裝航運", group: "航運", price: 72.8, volatility: 0.013, drift: 0.0001, baseVolume: 21000 },
  { symbol: "5608", name: "四維航", sector: "散裝航運", group: "航運", price: 19.2, volatility: 0.015, drift: 0.0001, baseVolume: 18000 },
  { symbol: "2610", name: "中華航空", sector: "空運物流", group: "航運", price: 24.6, volatility: 0.013, drift: 0.0001, baseVolume: 98000 },
  { symbol: "2618", name: "長榮航", sector: "空運物流", group: "航運", price: 34.9, volatility: 0.013, drift: 0.0001, baseVolume: 151000 },
  { symbol: "2607", name: "榮運", sector: "空運物流", group: "航運", price: 29.8, volatility: 0.012, drift: 0.0001, baseVolume: 16000 },
  { symbol: "2881", name: "富邦金", sector: "金融", group: "金融", price: 88.3, volatility: 0.006, drift: 0.0002, baseVolume: 79000 },
  { symbol: "2882", name: "國泰金", sector: "金融", group: "金融", price: 73.5, volatility: 0.006, drift: 0.0002, baseVolume: 86000 },
  { symbol: "2891", name: "中信金", sector: "金融", group: "金融", price: 39.75, volatility: 0.006, drift: 0.0002, baseVolume: 132000 },
  { symbol: "2886", name: "兆豐金", sector: "金融", group: "金融", price: 43.8, volatility: 0.005, drift: 0.0002, baseVolume: 62000 },
  { symbol: "2884", name: "玉山金", sector: "金融", group: "金融", price: 30.4, volatility: 0.005, drift: 0.0002, baseVolume: 58000 },
  { symbol: "2885", name: "元大金", sector: "金融", group: "金融", price: 34.2, volatility: 0.006, drift: 0.0002, baseVolume: 72000 },
  { symbol: "2887", name: "台新金", sector: "金融", group: "金融", price: 19.8, volatility: 0.006, drift: 0.0002, baseVolume: 64000 },
  { symbol: "2892", name: "第一金", sector: "金融", group: "金融", price: 31.6, volatility: 0.005, drift: 0.0002, baseVolume: 51000 },
  { symbol: "2880", name: "華南金", sector: "金融", group: "金融", price: 28.4, volatility: 0.005, drift: 0.0002, baseVolume: 46000 },
  { symbol: "0050", name: "元大台灣50", sector: "市值型 ETF", group: "ETF", price: 225, volatility: 0.007, drift: 0.0003, baseVolume: 53000 },
  { symbol: "006208", name: "富邦台50", sector: "市值型 ETF", group: "ETF", price: 132, volatility: 0.007, drift: 0.0003, baseVolume: 24000 },
  { symbol: "0052", name: "富邦科技", sector: "科技 ETF", group: "ETF", price: 248, volatility: 0.009, drift: 0.0004, baseVolume: 6500 },
  { symbol: "00881", name: "國泰台灣科技龍頭", sector: "科技 ETF", group: "ETF", price: 32.8, volatility: 0.009, drift: 0.0004, baseVolume: 32000 },
  { symbol: "00830", name: "國泰費城半導體", sector: "科技 ETF", group: "ETF", price: 52.4, volatility: 0.012, drift: 0.0004, baseVolume: 11000 },
  { symbol: "00935", name: "野村臺灣新科技50", sector: "科技 ETF", group: "ETF", price: 29.6, volatility: 0.01, drift: 0.0004, baseVolume: 18000 },
  { symbol: "0056", name: "元大高股息", sector: "高股息 ETF", group: "ETF", price: 44.1, volatility: 0.006, drift: 0.0002, baseVolume: 71000 },
  { symbol: "00878", name: "國泰永續高股息", sector: "高股息 ETF", group: "ETF", price: 24.8, volatility: 0.006, drift: 0.0002, baseVolume: 115000 },
  { symbol: "00919", name: "群益台灣精選高息", sector: "高股息 ETF", group: "ETF", price: 25.6, volatility: 0.006, drift: 0.0002, baseVolume: 126000 }
];

const stockCategories = [
  { value: "all", label: "全部" },
  { value: "航運", label: "航運" },
  { value: "金融", label: "金融" },
  { value: "AI", label: "AI 全部" },
  { value: "ETF", label: "ETF" },
  { value: "先進封裝", label: "先進封裝" },
  { value: "AI 代工", label: "AI 代工" },
  { value: "散熱", label: "散熱" },
  { value: "被動元件", label: "被動元件" },
  { value: "PCB", label: "PCB" },
  { value: "CCL", label: "CCL" },
  { value: "光通訊", label: "光通訊" },
  { value: "電源管理", label: "電源" },
  { value: "連接器", label: "連接器" },
  { value: "記憶體", label: "記憶體" },
  { value: "自動化", label: "自動化" }
];

const newsTemplates = [
  {
    title: "AI 伺服器急單延續，半導體供應鏈開高量",
    body: "外資回補大型電子權值股，盤中買盤集中在晶圓代工與 IC 設計。",
    symbols: ["2330", "2454", "3711", "6515", "2308"],
    impact: 0.0038,
    volumeBoost: 2.6,
    tone: "利多"
  },
  {
    title: "美股科技股回檔，台股電子族群承壓",
    body: "市場先反映海外期貨走弱，短線追價意願降溫，權值股波動放大。",
    symbols: ["2330", "2454", "2317", "2382", "3231", "6669"],
    impact: -0.0034,
    volumeBoost: 2.2,
    tone: "利空"
  },
  {
    title: "新台幣轉強，金融股買盤回流",
    body: "資金轉向高殖利率與金融股，電子股漲多後出現輪動。",
    symbols: ["2881", "2882", "2891", "2886", "2884", "2885"],
    impact: 0.0028,
    volumeBoost: 1.9,
    tone: "利多"
  },
  {
    title: "航運報價回升，貨櫃與航空成交量擴大",
    body: "市場預期旺季運價改善，短線資金快速流入航運族群。",
    symbols: ["2603", "2609", "2615", "2606", "2637", "2610", "2618"],
    impact: 0.0046,
    volumeBoost: 2.8,
    tone: "利多"
  },
  {
    title: "法說展望保守，部分高本益比個股震盪",
    body: "投資人重新評估今年成長率，盤面轉為看財報與接單能見度。",
    symbols: ["2454", "3017", "3324", "2383", "6442"],
    impact: -0.0042,
    volumeBoost: 2.4,
    tone: "利空"
  },
  {
    title: "政策資金偏多，指數站穩高檔整理區",
    body: "大型 ETF 與投信買盤持續，市場成交值維持高水位。",
    symbols: ["0050", "006208", "0056", "00878", "00919", "2330", "2881"],
    impact: 0.0024,
    volumeBoost: 1.8,
    tone: "偏多"
  },
  {
    title: "高速傳輸升級，PCB、CCL 與連接器人氣升溫",
    body: "AI 伺服器規格拉高，市場追價高階板材、銅箔基板與高速線纜供應鏈。",
    symbols: ["3037", "2368", "2383", "6274", "3665", "3533", "6715"],
    impact: 0.0036,
    volumeBoost: 2.5,
    tone: "利多"
  },
  {
    title: "資料中心傳輸需求升級，光通訊族群放量輪動",
    body: "800G 與 1.6T 題材延燒，短線買盤集中在光收發模組與矽光子概念股。",
    symbols: ["3081", "4979", "6442", "3450", "4908", "3163"],
    impact: 0.0042,
    volumeBoost: 2.9,
    tone: "利多"
  },
  {
    title: "記憶體報價轉強，模組與 DRAM 股同步走高",
    body: "HBM 與高容量記憶體需求支撐報價，資金回補記憶體族群。",
    symbols: ["2408", "2344", "3260", "4967", "8271"],
    impact: 0.0035,
    volumeBoost: 2.3,
    tone: "利多"
  }
];

const state = {
  activeSymbol: "2330",
  side: "buy",
  cash: 1000000,
  positions: {},
  shock: 1,
  indexBase: 36296.12,
  marketImpulse: 0,
  marketVolumeBoost: 1,
  maVisible: { 5: true, 10: true, 20: false, 60: false },
  category: "all",
  mode: "real",
  realChartMode: "daily",
  simPaused: false,
  news: [],
  realSync: false,
  marketOpen: false,
  marketSyncInFlight: false,
  lastMarketSync: 0,
  lastQuoteTime: "",
  lastNewsSync: 0
};

const $ = (id) => document.getElementById(id);
const chart = $("priceChart");
const tooltip = $("chartTooltip");
const ctx = chart.getContext("2d");
let chartHoverData = null;
const money = new Intl.NumberFormat("zh-TW", { maximumFractionDigits: 0 });
const priceFmt = new Intl.NumberFormat("zh-TW", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function randomNormal() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function roundTick(value) {
  if (value < 10) return Math.round(value * 100) / 100;
  if (value < 50) return Math.round(value * 20) / 20;
  if (value < 100) return Math.round(value * 10) / 10;
  if (value < 500) return Math.round(value * 2) / 2;
  if (value < 1000) return Math.round(value);
  return Math.round(value / 5) * 5;
}

function clampToLimit(stock, value) {
  const open = openFor(stock, "sim");
  const lower = open * 0.9;
  const upper = open * 1.1;
  return Math.min(upper, Math.max(lower, value));
}

function taipeiParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    weekday: "short"
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function isTaiwanTradingNow() {
  const now = taipeiParts();
  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(now.weekday);
  const minutes = Number(now.hour) * 60 + Number(now.minute);
  return weekday && minutes >= 9 * 60 && minutes <= 13 * 60 + 30;
}

function quoteIsToday(index) {
  if (!index?.date) return false;
  const now = taipeiParts();
  const today = `${now.year}${now.month}${now.day}`;
  return index.date === today;
}

function quoteStillTrading(index) {
  if (!index?.time) return false;
  const [hour, minute] = index.time.split(":").map(Number);
  const minutes = hour * 60 + minute;
  return minutes < 13 * 60 + 30;
}

function modeKey(mode = state.mode) {
  return mode === "real" ? "real" : "sim";
}

function candlesFor(stock, mode = state.mode) {
  if (modeKey(mode) === "real") {
    return state.realChartMode === "intraday" ? stock.realLiveCandles : stock.realCandles;
  }
  return stock.simCandles;
}

function activeCandles(stock) {
  return candlesFor(stock);
}

function priceFor(stock, mode = state.mode) {
  const candles = candlesFor(stock, mode);
  if (modeKey(mode) === "real") return candles?.at(-1)?.close ?? stock.realPrice ?? stock.price;
  return candles?.at(-1)?.close ?? stock.price;
}

function openFor(stock, mode = state.mode) {
  if (modeKey(mode) === "real") return stock.realOpen ?? stock.open ?? stock.price;
  return stock.simOpen ?? stock.open ?? stock.price;
}

function volumeFor(stock, mode = state.mode) {
  const candles = candlesFor(stock, mode);
  return candles?.at(-1)?.volume ?? stock.baseVolume;
}

function buildCandles(stock) {
  const candles = [];
  let price = stock.price * (0.985 + Math.random() * 0.03);
  for (let i = 0; i < 88; i += 1) {
    const pulse = Math.sin(i / 7) * stock.volatility * 0.9;
    const move = stock.drift + pulse + randomNormal() * stock.volatility;
    const open = price;
    const close = Math.max(1, roundTick(open * (1 + move)));
    const high = roundTick(Math.max(open, close) * (1 + Math.random() * stock.volatility * 1.6));
    const low = roundTick(Math.min(open, close) * (1 - Math.random() * stock.volatility * 1.6));
    const volumeBoost = 1.25 + Math.abs(move) * 92 + (i > 65 ? 0.35 : 0);
    const volume = Math.round(stock.baseVolume * volumeBoost * (0.75 + Math.random() * 0.7));
    candles.push({ open, high, low, close, volume, time: `模擬 T-${87 - i}` });
    price = close;
  }
  stock.simPrice = candles.at(-1).close;
  stock.simOpen = candles[0].open;
  stock.simCandles = candles;
  stock.realPrice = stock.price;
  stock.realOpen = stock.price;
  stock.realCandles = [];
  stock.realLiveCandles = [];
}

stocks.forEach(buildCandles);

function tickMarket() {
  if (state.mode === "real") {
    renderAll();
    return;
  }
  if (state.simPaused) {
    renderAll();
    return;
  }

  stocks.forEach((stock) => {
    const candles = candlesFor(stock, "sim");
    const last = candles.at(-1);
    const newsImpulse = stock.newsImpulse || 0;
    const pressure = stock.drift + state.marketImpulse + newsImpulse + randomNormal() * stock.volatility * state.shock;
    const open = last.close;
    const close = Math.max(1, roundTick(clampToLimit(stock, open * (1 + pressure))));
    const high = roundTick(clampToLimit(stock, Math.max(open, close) * (1 + Math.random() * stock.volatility)));
    const low = roundTick(clampToLimit(stock, Math.min(open, close) * (1 - Math.random() * stock.volatility)));
    const newsVolume = stock.newsVolume || 1;
    const volume = Math.round(stock.baseVolume * state.shock * state.marketVolumeBoost * newsVolume * (1.1 + Math.abs(pressure) * 130 + Math.random()));
    candles.push({ open, high, low, close, volume, time: new Date().toLocaleTimeString("zh-TW", { hour12: false }) });
    stock.simCandles = candles.slice(-88);
    stock.simPrice = close;
    stock.newsImpulse = newsImpulse * 0.72;
    stock.newsVolume = 1 + (newsVolume - 1) * 0.68;
  });
  state.shock = Math.max(1, state.shock * 0.92);
  state.marketImpulse *= 0.78;
  state.marketVolumeBoost = 1 + (state.marketVolumeBoost - 1) * 0.72;
  renderAll();
}

function changePct(stock) {
  const open = openFor(stock);
  return ((priceFor(stock) - open) / open) * 100;
}

function activeStock() {
  return stocks.find((stock) => stock.symbol === state.activeSymbol);
}

function formatSignedPct(value) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function renderWatchlist() {
  const visibleStocks = stocks.filter((stock) => {
    if (state.category === "all") return true;
    return stock.group === state.category || stock.sector === state.category;
  });

  $("stockList").innerHTML = visibleStocks
    .map((stock) => {
      const change = changePct(stock);
      return `
        <button class="stock-row ${stock.symbol === state.activeSymbol ? "active" : ""}" data-symbol="${stock.symbol}" type="button">
          <span><strong>${stock.name}</strong><br>${stock.symbol} · ${stock.group} · ${stock.sector}</span>
          <span class="stock-price"><strong>${priceFmt.format(priceFor(stock))}</strong><br><span class="${change >= 0 ? "up" : "down"}">${formatSignedPct(change)}</span></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".stock-row").forEach((row) => {
    row.addEventListener("click", () => selectStock(row.dataset.symbol));
  });
}

function renderSelectors() {
  $("symbolSelect").innerHTML = stocks.map((stock) => `<option value="${stock.symbol}">${stock.symbol} ${stock.name}</option>`).join("");
  $("symbolSelect").value = state.activeSymbol;
}

function renderCategoryFilter() {
  $("categoryFilter").innerHTML = stockCategories
    .map((category) => `<option value="${category.value}">${category.label}</option>`)
    .join("");
  $("categoryFilter").value = state.category;
}

function renderHeader() {
  const stock = activeStock();
  const change = changePct(stock);
  const marketValue = stocks.reduce((sum, item) => sum + priceFor(item) * item.baseVolume, 0);
  const openValue = stocks.reduce((sum, item) => sum + openFor(item) * item.baseVolume, 0);
  const index = state.mode === "real" && state.realIndex?.price ? state.realIndex.price : state.indexBase * (marketValue / openValue);
  const indexChange = state.mode === "real" && state.realIndex?.previousClose
    ? ((state.realIndex.price - state.realIndex.previousClose) / state.realIndex.previousClose) * 100
    : ((marketValue - openValue) / openValue) * 100;
  const volumeE = stocks.reduce((sum, item) => sum + volumeFor(item) * priceFor(item) * 1000, 0) / 100000000;

  $("indexPrice").textContent = priceFmt.format(index);
  $("indexChange").textContent = formatSignedPct(indexChange);
  $("indexChange").className = indexChange >= 0 ? "up" : "down";
  $("marketVolume").textContent = `${money.format(volumeE)} 億`;
  $("marketStatus").textContent = marketStatusText();
  $("modeHint").textContent = state.mode === "real"
    ? "依 TWSE/TPEx 報價同步"
    : "使用新聞與隨機波動推進";
  $("realChartHint").textContent = state.realChartMode === "daily" ? "歷史日 K" : "當日即時 K";
  $("realChartMode").disabled = state.mode !== "real";
  $("realChartCard").hidden = state.mode !== "real";
  $("simControlCard").hidden = state.mode !== "sim";
  $("pauseSim").textContent = state.simPaused ? "繼續模擬" : "暫停模擬";
  $("simStatus").textContent = state.simPaused ? "模擬已暫停" : "每 5 秒更新一根";
  $("clock").textContent = new Date().toLocaleTimeString("zh-TW", { hour12: false, timeZone: "Asia/Taipei" });
  $("activeName").textContent = stock.name;
  $("activeMeta").textContent = `${stock.symbol} · ${stock.group} · ${stock.sector} · 現股`;
  $("activePrice").textContent = priceFmt.format(priceFor(stock));
  $("activeChange").textContent = formatSignedPct(change);
  $("activeChange").className = change >= 0 ? "up" : "down";
  if (document.activeElement !== $("orderPrice")) {
    $("orderPrice").value = priceFor(stock);
  }
  $("buyingPower").textContent = `可用資金 ${money.format(state.cash)}`;
}

function drawChart() {
  const stock = activeStock();
  const candles = activeCandles(stock);
  const dpr = window.devicePixelRatio || 1;
  const rect = chart.getBoundingClientRect();
  chart.width = Math.floor(rect.width * dpr);
  chart.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);

  if (!candles || candles.length === 0) {
    chartHoverData = null;
    ctx.fillStyle = "#7d8a93";
    ctx.font = "15px Microsoft JhengHei, Arial";
    const message = state.mode === "real" && state.realChartMode === "intraday"
      ? "當日行情 K 尚無資料，開盤同步後會開始累積"
      : state.mode === "real"
        ? "正在載入現實股市日 K..."
        : "尚無 K 線資料";
    ctx.fillText(message, 24, 42);
    return;
  }

  if (state.mode === "real" && state.realChartMode === "intraday") {
    drawIntradayLineChart(stock, candles, rect);
    return;
  }

  const pad = { left: 54, right: 18, top: 24, bottom: 34 };
  const volumeHeight = Math.max(92, rect.height * 0.22);
  const priceBottom = rect.height - pad.bottom - volumeHeight - 18;
  const chartWidth = rect.width - pad.left - pad.right;
  const candleWidth = chartWidth / candles.length;
  const maSeries = buildVisibleMaSeries(candles);
  const highs = candles.map((c) => c.high);
  const lows = candles.map((c) => c.low);
  const maValues = maSeries.flatMap((series) => series.values.filter((value) => value !== null));
  const maxPrice = Math.max(...highs, ...maValues);
  const minPrice = Math.min(...lows, ...maValues);
  const maxVolume = Math.max(...candles.map((c) => c.volume));
  chartHoverData = { candles, pad, candleWidth, rectWidth: rect.width, rectHeight: rect.height };

  ctx.strokeStyle = "#202a31";
  ctx.lineWidth = 1;
  ctx.font = "12px Microsoft JhengHei, Arial";
  ctx.fillStyle = "#7d8a93";
  for (let i = 0; i <= 5; i += 1) {
    const y = pad.top + ((priceBottom - pad.top) * i) / 5;
    const price = maxPrice - ((maxPrice - minPrice) * i) / 5;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(rect.width - pad.right, y);
    ctx.stroke();
    ctx.fillText(priceFmt.format(price), 8, y + 4);
  }

  candles.forEach((candle, index) => {
    const x = pad.left + index * candleWidth + candleWidth / 2;
    const yHigh = scale(candle.high, minPrice, maxPrice, priceBottom, pad.top);
    const yLow = scale(candle.low, minPrice, maxPrice, priceBottom, pad.top);
    const yOpen = scale(candle.open, minPrice, maxPrice, priceBottom, pad.top);
    const yClose = scale(candle.close, minPrice, maxPrice, priceBottom, pad.top);
    const rising = candle.close >= candle.open;
    const color = rising ? "#ff4d5f" : "#20c997";
    const bodyTop = Math.min(yOpen, yClose);
    const bodyHeight = Math.max(2, Math.abs(yOpen - yClose));
    const bodyWidth = Math.max(4, candleWidth * 0.58);
    const volumeTop = rect.height - pad.bottom - (candle.volume / maxVolume) * volumeHeight;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.moveTo(x, yHigh);
    ctx.lineTo(x, yLow);
    ctx.stroke();
    ctx.fillRect(x - bodyWidth / 2, bodyTop, bodyWidth, bodyHeight);

    ctx.globalAlpha = 0.36;
    ctx.fillRect(x - bodyWidth / 2, volumeTop, bodyWidth, rect.height - pad.bottom - volumeTop);
    ctx.globalAlpha = 1;
  });

  maSeries.forEach((series) => {
    ctx.strokeStyle = series.color;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    let started = false;
    series.values.forEach((value, index) => {
      if (value === null) return;
      const x = pad.left + index * candleWidth + candleWidth / 2;
      const y = scale(value, minPrice, maxPrice, priceBottom, pad.top);
      if (!started) {
        ctx.moveTo(x, y);
        started = true;
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  });

  drawMaLegend(maSeries, rect.width - pad.right - 265, pad.top + 4);

  ctx.fillStyle = "#7d8a93";
  ctx.fillText("成交量", pad.left, rect.height - volumeHeight - 12);
  ctx.fillText(`${money.format(maxVolume)} 張`, 8, rect.height - volumeHeight + 10);
}

function buildVisibleMaSeries(candles) {
  const colors = { 5: "#f2b84b", 10: "#66a6ff", 20: "#b78cff", 60: "#5ed6e8" };
  return [5, 10, 20, 60]
    .filter((period) => state.maVisible[period])
    .map((period) => ({
      period,
      color: colors[period],
      values: candles.map((_, index) => {
        if (index + 1 < period) return null;
        const slice = candles.slice(index + 1 - period, index + 1);
        return slice.reduce((sum, candle) => sum + candle.close, 0) / period;
      })
    }));
}

function drawMaLegend(series, x, y) {
  if (series.length === 0) return;
  ctx.font = "12px Microsoft JhengHei, Arial";
  series.forEach((item, index) => {
    const offsetX = x + index * 62;
    ctx.fillStyle = item.color;
    ctx.fillRect(offsetX, y, 18, 3);
    ctx.fillStyle = "#c7d0d6";
    ctx.fillText(`${item.period}MA`, offsetX + 24, y + 6);
  });
}

function minuteOfDayFromCandle(candle) {
  const match = String(candle.time || "").match(/(\d{1,2}):(\d{2})/);
  if (!match) return 9 * 60;
  return Number(match[1]) * 60 + Number(match[2]);
}

function normalizeIntradayCandles(candles) {
  const byMinute = new Map();
  candles
    .filter((candle) => Number.isFinite(candle.close) && candle.time)
    .forEach((candle) => {
      const minute = minuteOfDayFromCandle(candle);
      if (minute < 9 * 60 || minute > 13 * 60 + 30) return;
      const key = String(candle.time).slice(0, 16);
      const existing = byMinute.get(key);
      if (!existing) {
        byMinute.set(key, { ...candle });
        return;
      }
      byMinute.set(key, {
        ...existing,
        high: Math.max(existing.high, candle.high),
        low: Math.min(existing.low, candle.low),
        close: candle.close,
        volume: Math.max(existing.volume || 0, candle.volume || 0)
      });
    });
  return [...byMinute.values()].sort((a, b) => String(a.time).localeCompare(String(b.time))).slice(-270);
}

function compactFlatIntraday(candles) {
  if (candles.length <= 2) return candles;
  return candles.filter((candle, index) => {
    if (index === 0 || index === candles.length - 1) return true;
    const prev = candles[index - 1];
    const next = candles[index + 1];
    return !(candle.close === prev.close && candle.close === next.close && (candle.volume || 0) <= 1);
  });
}

function drawIntradayLineChart(stock, candles, rect) {
  candles = compactFlatIntraday(normalizeIntradayCandles(candles));
  const pad = { left: 62, right: 72, top: 24, bottom: 42 };
  const startMinute = 9 * 60;
  const endMinute = 13 * 60 + 30;
  const chartWidth = rect.width - pad.left - pad.right;
  const chartHeight = rect.height - pad.top - pad.bottom;
  const previousClose = stock.realQuote?.previousClose || openFor(stock, "real") || candles[0].open;
  const prices = candles.map((candle) => candle.close);
  const maxPrice = Math.max(...prices, previousClose);
  const minPrice = Math.min(...prices, previousClose);
  const padding = Math.max((maxPrice - minPrice) * 0.18, previousClose * 0.002);
  const yMax = maxPrice + padding;
  const yMin = minPrice - padding;
  const lastPrice = prices.at(-1);
  const lineColor = lastPrice >= previousClose ? "#ff4d5f" : "#20c997";

  const pointFor = (candle) => {
    const minute = Math.max(startMinute, Math.min(endMinute, minuteOfDayFromCandle(candle)));
    const x = pad.left + ((minute - startMinute) / (endMinute - startMinute)) * chartWidth;
    const y = scale(candle.close, yMin, yMax, rect.height - pad.bottom, pad.top);
    return { x, y, candle, minute };
  };
  const points = candles.map(pointFor);

  ctx.strokeStyle = "#202a31";
  ctx.lineWidth = 1;
  ctx.font = "12px Microsoft JhengHei, Arial";
  ctx.fillStyle = "#7d8a93";
  for (let i = 0; i <= 5; i += 1) {
    const y = pad.top + (chartHeight * i) / 5;
    const price = yMax - ((yMax - yMin) * i) / 5;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(rect.width - pad.right, y);
    ctx.stroke();
    ctx.fillText(priceFmt.format(price), 8, y + 4);
  }

  const prevY = scale(previousClose, yMin, yMax, rect.height - pad.bottom, pad.top);
  ctx.setLineDash([2, 5]);
  ctx.strokeStyle = "#8b96a0";
  ctx.beginPath();
  ctx.moveTo(pad.left, prevY);
  ctx.lineTo(rect.width - pad.right, prevY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#8b96a0";
  ctx.textAlign = "left";
  ctx.fillText(`昨收 ${priceFmt.format(previousClose)}`, rect.width - pad.right - 2, prevY - 6);

  if (points.length > 1) {
    const gradient = ctx.createLinearGradient(0, pad.top, 0, rect.height - pad.bottom);
    gradient.addColorStop(0, lineColor + "44");
    gradient.addColorStop(1, lineColor + "00");
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.lineTo(points.at(-1).x, rect.height - pad.bottom);
    ctx.lineTo(points[0].x, rect.height - pad.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  const last = points.at(-1);
  if (last) {
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(last.x, last.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  const labels = [
    [9 * 60, "上午9:00"],
    [10 * 60, "上午10:00"],
    [11 * 60, "上午11:00"],
    [12 * 60, "下午12:00"],
    [13 * 60, "下午1:00"]
  ];
  ctx.fillStyle = "#7d8a93";
  ctx.textAlign = "center";
  labels.forEach(([minute, label]) => {
    const x = pad.left + ((minute - startMinute) / (endMinute - startMinute)) * chartWidth;
    ctx.fillText(label, x, rect.height - 14);
  });
  ctx.textAlign = "left";

  chartHoverData = { type: "line", points, pad, rectWidth: rect.width, rectHeight: rect.height };
}

function showChartTooltip(event) {
  if (!chartHoverData) {
    tooltip.hidden = true;
    return;
  }
  const { candles, points, pad, candleWidth, rectWidth, rectHeight, type } = chartHoverData;
  const rect = chart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (x < pad.left || x > rectWidth - pad.right || y < pad.top || y > rectHeight - pad.bottom) {
    tooltip.hidden = true;
    return;
  }
  let html = "";
  if (type === "line") {
    const nearest = points.reduce((best, point) => (Math.abs(point.x - x) < Math.abs(best.x - x) ? point : best), points[0]);
    const candle = nearest.candle;
    html = `
      <strong>${escapeHtml(candle.time || "")}</strong>
      價格 ${priceFmt.format(candle.close)}<br>
      量 ${money.format(candle.volume)} 張
    `;
  } else {
    const index = Math.max(0, Math.min(candles.length - 1, Math.floor((x - pad.left) / candleWidth)));
    const candle = candles[index];
    html = `
      <strong>${escapeHtml(candle.time || `第 ${index + 1} 根`)}</strong>
      開 ${priceFmt.format(candle.open)}<br>
      高 ${priceFmt.format(candle.high)}　低 ${priceFmt.format(candle.low)}<br>
      收 ${priceFmt.format(candle.close)}<br>
      量 ${money.format(candle.volume)} 張
    `;
  }
  tooltip.innerHTML = html;
  const tooltipX = Math.min(rect.width - 188, Math.max(10, x + 14));
  const tooltipY = Math.min(rect.height - 126, Math.max(10, y + 14));
  tooltip.style.left = `${chart.offsetLeft + tooltipX}px`;
  tooltip.style.top = `${chart.offsetTop + tooltipY}px`;
  tooltip.hidden = false;
}

function hideChartTooltip() {
  tooltip.hidden = true;
}

function marketStatusText() {
  if (state.mode === "sim") return "模擬走勢中";
  if (state.marketSyncInFlight) return "同步中...";
  if (!state.realSync) return "等待真實報價";
  const syncedAt = new Date(state.lastMarketSync).toLocaleTimeString("zh-TW", { hour12: false });
  const quoteText = state.lastQuoteTime ? `報價 ${state.lastQuoteTime}` : "報價時間未知";
  if (!state.marketOpen) return `台股關盤 · ${quoteText} · 同步 ${syncedAt}`;
  return `開盤同步 · ${quoteText} · ${syncedAt}`;
}

function scale(value, min, max, outMin, outMax) {
  if (max === min) return (outMin + outMax) / 2;
  return outMin - ((value - min) / (max - min)) * (outMin - outMax);
}

function selectStock(symbol) {
  state.activeSymbol = symbol;
  $("symbolSelect").value = symbol;
  if (state.mode === "real") {
    if (state.realChartMode === "intraday") loadRealIntraday(activeStock(), true);
    else loadRealHistory(activeStock());
  }
  renderAll();
}

function setSide(side) {
  state.side = side;
  $("buyTab").classList.toggle("active", side === "buy");
  $("sellTab").classList.toggle("active", side === "sell");
  $("submitOrder").textContent = side === "buy" ? "送出買單" : "送出賣單";
  $("submitOrder").classList.toggle("sell", side === "sell");
}

function submitOrder() {
  const stock = stocks.find((item) => item.symbol === $("symbolSelect").value);
  const lots = Math.max(1, Math.floor(Number($("orderLots").value) || 1));
  const orderType = $("orderType").value;
  const currentPrice = priceFor(stock);
  const requestedPrice = Number($("orderPrice").value) || currentPrice;
  const fillPrice = orderType === "market" ? currentPrice : requestedPrice;
  const shares = lots * 1000;
  const value = fillPrice * shares;
  const fee = Math.max(20, value * 0.001425);
  const tax = state.side === "sell" ? value * 0.003 : 0;
  const pos = state.positions[stock.symbol] || { lots: 0, avg: 0 };

  if (state.side === "buy") {
    const total = value + fee;
    if (total > state.cash) {
      addLog(`資金不足，${stock.name} ${lots} 張未成交`);
      return;
    }
    const oldShares = pos.lots * 1000;
    pos.avg = oldShares + shares > 0 ? (pos.avg * oldShares + value) / (oldShares + shares) : fillPrice;
    pos.lots += lots;
    state.cash -= total;
    state.positions[stock.symbol] = pos;
  } else {
    if (pos.lots < lots) {
      addLog(`庫存不足，${stock.name} ${lots} 張未成交`);
      return;
    }
    pos.lots -= lots;
    state.cash += value - fee - tax;
    if (pos.lots === 0) delete state.positions[stock.symbol];
  }

  addLog(`${state.side === "buy" ? "買進" : "賣出"} ${stock.symbol} ${stock.name} ${lots} 張 @ ${priceFmt.format(fillPrice)}`);
  state.activeSymbol = stock.symbol;
  renderAll();
}

function addLog(text) {
  const li = document.createElement("li");
  li.textContent = `${new Date().toLocaleTimeString("zh-TW", { hour12: false })}  ${text}`;
  $("tradeLog").prepend(li);
  while ($("tradeLog").children.length > 12) $("tradeLog").lastChild.remove();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseNewsTime(value) {
  const time = new Date(value);
  return Number.isNaN(time.getTime()) ? new Date() : time;
}

function minuteStamp(quote) {
  if (!quote?.date || !quote?.time) return new Date().toLocaleString("zh-TW", { hour12: false });
  return `${quote.date.slice(0, 4)}-${quote.date.slice(4, 6)}-${quote.date.slice(6, 8)} ${quote.time.slice(0, 5)}`;
}

function applyLiveQuote(stock, quote, price) {
  const quoteFresh = quoteIsToday(quote) && quoteStillTrading(quote);
  if (!state.marketOpen && !quoteFresh) return;
  const stamp = minuteStamp(quote);
  const live = stock.realLiveCandles || [];
  const cumulativeVolume = Number(quote.volume) || 0;
  const volumeDelta = Math.max(0, cumulativeVolume - (stock.lastCumulativeVolume || 0));
  const volume = quote.temporalVolume || volumeDelta || 0;
  stock.lastCumulativeVolume = cumulativeVolume || stock.lastCumulativeVolume;
  const existingIndex = live.findIndex((candle) => candle.time === stamp);

  if (live.length === 0 && quote.open && stamp.endsWith("09:00")) {
    const date = quote.date ? `${quote.date.slice(0, 4)}-${quote.date.slice(4, 6)}-${quote.date.slice(6, 8)}` : "";
    live.push({
      time: `${date} 09:00`,
      open: quote.open || price,
      high: quote.open || price,
      low: quote.open || price,
      close: quote.open || price,
      volume: 0
    });
  }

  if (existingIndex >= 0) {
    const current = live[existingIndex];
    current.high = Math.max(current.high, price);
    current.low = Math.min(current.low, price);
    current.close = price;
    current.volume = Math.max(current.volume || 0, volume || 0);
  } else {
    const last = live.at(-1);
    if (last && String(stamp).localeCompare(String(last.time)) < 0) return;
    live.push({
      time: stamp,
      open: last?.close ?? quote.open ?? price,
      high: Math.max(quote.high || price, price),
      low: Math.min(quote.low || price, price),
      close: price,
      volume
    });
  }
  stock.realLiveCandles = normalizeIntradayCandles(live);
}

function applyQuote(stock, quote) {
  const price = Number(quote.price);
  if (!Number.isFinite(price) || price <= 0) return;

  const candles = stock.realCandles || [];
  const last = candles.at(-1);
  const quoteStamp = `${quote.date || ""} ${quote.time || ""}`;
  const previousClose = quote.previousClose || stock.realOpen || price;
  const open = quote.open || stock.realOpen || previousClose;
  const lastClose = last?.close ?? previousClose;
  const high = Math.max(quote.high || price, price, open, lastClose);
  const low = Math.min(quote.low || price, price, open, lastClose);
  const volume = quote.volume || last.volume;
  const candle = {
    open: lastClose,
    high: roundTick(high),
    low: roundTick(low),
    close: roundTick(price),
    volume: Math.max(1, Math.round(volume)),
    time: quote.date ? `${quote.date.slice(0, 4)}-${quote.date.slice(4, 6)}-${quote.date.slice(6, 8)} ${quote.time || ""}` : quote.time || "即時報價"
  };

  stock.realOpen = open;
  stock.realPrice = candle.close;
  stock.realQuote = quote;
  applyLiveQuote(stock, quote, candle.close);

  const quoteDate = quote.date ? `${quote.date.slice(0, 4)}-${quote.date.slice(4, 6)}-${quote.date.slice(6, 8)}` : "";
  const lastDate = String(stock.realCandles.at(-1)?.time || "").slice(0, 10);

  if (candles.length === 0) {
    stock.realCandles = [candle];
  } else if (lastDate === quoteDate) {
    stock.realCandles[stock.realCandles.length - 1] = {
      ...stock.realCandles.at(-1),
      high: Math.max(stock.realCandles.at(-1).high, candle.high),
      low: Math.min(stock.realCandles.at(-1).low, candle.low),
      close: candle.close,
      volume: candle.volume,
      time: candle.time
    };
  } else if (stock.lastQuoteStamp === quoteStamp) {
    stock.realCandles[stock.realCandles.length - 1] = candle;
  } else {
    stock.realCandles.push(candle);
    stock.realCandles = stock.realCandles.slice(-88);
    stock.lastQuoteStamp = quoteStamp;
  }
}

async function syncMarket() {
  if (state.mode !== "real") return;
  if (state.marketSyncInFlight) return;

  try {
    state.marketSyncInFlight = true;
    renderAll();
    const symbols = stocks.map((stock) => stock.symbol).join(",");
    const response = await fetch(`/api/market?symbols=${encodeURIComponent(symbols)}&_=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("market api failed");
    const data = await response.json();
    const quotes = new Map((data.quotes || []).map((quote) => [quote.symbol, quote]));
    const quoteList = [...quotes.values()];
    const quoteToday = data.index ? quoteIsToday(data.index) : quoteList.some((quote) => quoteIsToday(quote));
    const quoteTrading = data.index ? quoteStillTrading(data.index) : quoteList.some((quote) => quoteStillTrading(quote));
    const nextMarketOpen = quotes.size > 0 && isTaiwanTradingNow() && quoteToday && quoteTrading;
    state.marketOpen = nextMarketOpen;
    stocks.forEach((stock) => {
      const quote = quotes.get(stock.symbol);
      if (quote) applyQuote(stock, quote);
    });
    if (data.index?.price) state.realIndex = data.index;
    state.realSync = quotes.size > 0;
    state.lastMarketSync = Date.now();
    const activeQuote = quotes.get(state.activeSymbol);
    state.lastQuoteTime = activeQuote?.time || data.index?.time || "";
    if (state.mode === "real") {
      const active = activeStock();
      if (!active.historyLoaded || Date.now() - (active.historyLoadedAt || 0) > 10 * 60 * 1000) {
        loadRealHistory(active, true);
      }
      if (state.realChartMode === "intraday" && (!active.intradayLoaded || Date.now() - (active.intradayLoadedAt || 0) > 30 * 1000)) {
        loadRealIntraday(active, true);
      }
    }
    renderAll();
  } catch (error) {
    state.realSync = false;
    state.marketOpen = false;
    $("marketStatus").textContent = "同步失敗，離線模擬";
    addLog("真實報價同步失敗，已切回離線模擬");
  } finally {
    state.marketSyncInFlight = false;
    renderAll();
  }
}

async function loadRealHistory(stock, force = false) {
  if (!stock || (stock.historyLoaded && !force)) return;
  try {
    const response = await fetch(`/api/history?symbol=${encodeURIComponent(stock.symbol)}`, { cache: "no-store" });
    if (!response.ok) throw new Error("history api failed");
    const data = await response.json();
    if (Array.isArray(data.candles) && data.candles.length > 0) {
      stock.realCandles = data.candles.map((candle) => ({
        time: candle.time,
        open: Number(candle.open),
        high: Number(candle.high),
        low: Number(candle.low),
        close: Number(candle.close),
        volume: Number(candle.volume)
      }));
      stock.realOpen = stock.realCandles.at(-1).open;
      stock.realPrice = stock.realCandles.at(-1).close;
      stock.historyLoaded = true;
      stock.historyLoadedAt = Date.now();
      if (stock.realQuote) applyQuote(stock, stock.realQuote);
      renderAll();
    } else {
      stock.historyLoaded = false;
      addLog(`${stock.symbol} ${stock.name} 找不到交易所日 K，保留最後報價`);
    }
  } catch {
    addLog(`${stock.symbol} ${stock.name} 真實日 K 載入失敗，暫用即時報價`);
  }
}

async function loadRealIntraday(stock, force = false) {
  if (!stock || (stock.intradayLoaded && !force && Date.now() - (stock.intradayLoadedAt || 0) < 60 * 1000)) return;
  try {
    const response = await fetch(`/api/intraday?symbol=${encodeURIComponent(stock.symbol)}&_=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("intraday api failed");
    const data = await response.json();
    if (Array.isArray(data.candles) && data.candles.length > 0) {
      const fetchedCandles = data.candles.map((candle) => ({
        time: candle.time,
        open: Number(candle.open),
        high: Number(candle.high),
        low: Number(candle.low),
        close: Number(candle.close),
        volume: Number(candle.volume)
      }));
      const liveTail = (stock.realLiveCandles || []).filter((candle) => {
        const fetchedLast = fetchedCandles.at(-1)?.time || "";
        return String(candle.time).localeCompare(String(fetchedLast)) > 0 && (candle.volume || 0) > 1;
      });
      stock.realLiveCandles = normalizeIntradayCandles([...fetchedCandles, ...liveTail]);
      stock.realPrice = stock.realLiveCandles.at(-1).close;
      stock.intradayLoaded = true;
      stock.intradayLoadedAt = Date.now();
      if (stock.realQuote) applyLiveQuote(stock, stock.realQuote, Number(stock.realQuote.price));
      renderAll();
    } else {
      addLog(`${stock.symbol} ${stock.name} 找不到當日分時資料，等待即時報價累積`);
    }
  } catch {
    addLog(`${stock.symbol} ${stock.name} 當日分時資料載入失敗，等待即時報價累積`);
  }
}

async function syncNews() {
  try {
    const stockPayload = stocks.map(({ symbol, name, sector, group }) => ({ symbol, name, sector, group }));
    const response = await fetch("/api/news", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ stocks: stockPayload }),
      cache: "no-store"
    });
    if (!response.ok) throw new Error("news api failed");
    const data = await response.json();
    state.news = (data.news || []).slice(0, 9).map((item) => ({
      ...item,
      used: true,
      time: parseNewsTime(item.time)
    }));
    state.news.forEach((item) => applyNewsImpact(item));
    state.lastNewsSync = Date.now();
    addLog(`已同步現實新聞：${state.news.length} 則`);
    renderNews();
    renderAll();
  } catch (error) {
    generateFallbackNews();
  }
}

function generateFallbackNews() {
  const pool = [...newsTemplates].sort(() => Math.random() - 0.5).slice(0, 4);
  state.news = pool.map((item, index) => ({
    ...item,
    id: `fallback-${Date.now()}-${index}`,
    used: true,
    source: "離線備援",
    link: "",
    time: new Date(Date.now() - index * 7 * 60 * 1000)
  }));
  state.news.forEach((item) => applyNewsImpact(item));
  addLog("新聞同步失敗，已使用離線備援新聞");
  renderNews();
  renderAll();
}

function renderNews() {
  $("newsList").innerHTML = state.news
    .map((item) => {
      const impactClass = item.impact >= 0 ? "up" : "down";
      const symbolTags = item.symbols
        .map((symbol) => {
          const stock = stocks.find((entry) => entry.symbol === symbol);
          return stock ? `<span>${symbol} ${stock.name}</span>` : "";
        })
        .join("");
      const title = item.link
        ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a>`
        : escapeHtml(item.title);
      return `
        <article class="news-card">
          <header>
            <time>${item.time.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}</time>
            <strong class="${impactClass}">${item.tone}</strong>
          </header>
          <h3>${title}</h3>
          <p>${escapeHtml(item.body || item.source || "")}</p>
          <div class="news-tags">${symbolTags}</div>
          <div class="news-impact">已自動反映 · 影響 ${item.impact >= 0 ? "+" : ""}${(item.impact * 100).toFixed(2)}% · 量能 x${item.volumeBoost.toFixed(1)}</div>
        </article>
      `;
    })
    .join("");
}

function applyNewsImpact(item) {
  if (state.mode === "real" && !state.marketOpen) return;
  if (!item.symbols?.length) return;
  const directionFactor = item.impact < 0 ? 1.28 : 0.92;
  const directImpact = item.impact * directionFactor;
  const spilloverImpact = directImpact * 0.28;
  const marketImpact = directImpact * (item.symbols.includes("2330") ? 0.38 : 0.16);
  const affectedSectors = new Set(
    item.symbols
      .map((symbol) => stocks.find((entry) => entry.symbol === symbol)?.sector)
      .filter(Boolean)
  );
  item.symbols.forEach((symbol) => {
    const stock = stocks.find((entry) => entry.symbol === symbol);
    if (!stock) return;
    stock.newsImpulse = (stock.newsImpulse || 0) + directImpact;
    stock.newsVolume = Math.max(stock.newsVolume || 1, item.volumeBoost);
  });
  stocks.forEach((stock) => {
    if (item.symbols.includes(stock.symbol) || !affectedSectors.has(stock.sector)) return;
    stock.newsImpulse = (stock.newsImpulse || 0) + spilloverImpact;
    stock.newsVolume = Math.max(stock.newsVolume || 1, 1 + (item.volumeBoost - 1) * 0.45);
  });
  state.marketImpulse += marketImpact;
  state.marketVolumeBoost = Math.max(state.marketVolumeBoost, 1 + (item.volumeBoost - 1) * 0.35);
  state.shock = Math.max(state.shock, Math.min(4.5, item.volumeBoost));
}

function renderPositions() {
  const entries = Object.entries(state.positions);
  let equity = 0;
  let pnl = 0;

  if (entries.length === 0) {
    $("positionsBody").innerHTML = `<tr><td colspan="6" class="empty">尚無持倉</td></tr>`;
  } else {
    $("positionsBody").innerHTML = entries
      .map(([symbol, pos]) => {
        const stock = stocks.find((item) => item.symbol === symbol);
        const currentPrice = priceFor(stock);
        const value = currentPrice * pos.lots * 1000;
        const profit = (currentPrice - pos.avg) * pos.lots * 1000;
        equity += value;
        pnl += profit;
        return `
          <tr>
            <td>${symbol} ${stock.name}</td>
            <td>${pos.lots}</td>
            <td>${priceFmt.format(pos.avg)}</td>
            <td>${priceFmt.format(currentPrice)}</td>
            <td>${money.format(value)}</td>
            <td class="${profit >= 0 ? "up" : "down"}">${money.format(profit)}</td>
          </tr>
        `;
      })
      .join("");
  }

  $("equityValue").textContent = money.format(equity);
  $("unrealizedPnl").textContent = money.format(pnl);
  $("unrealizedPnl").className = pnl >= 0 ? "up" : "down";
}

function renderAll() {
  renderWatchlist();
  renderHeader();
  drawChart();
  renderPositions();
}

function setMarketMode(mode) {
  state.mode = mode;
  $("marketMode").value = mode;
  state.realSync = mode === "real" ? state.realSync : false;
  state.marketOpen = mode === "real" ? state.marketOpen : true;
  if (document.activeElement !== $("orderPrice")) {
    $("orderPrice").value = priceFor(activeStock());
  }
  addLog(mode === "real" ? "已切換到現實股市模式" : "已切換到模擬走勢模式");
  if (mode === "real") {
    loadRealHistory(activeStock());
    syncMarket();
  }
  renderAll();
}

function setRealChartMode(mode) {
  state.realChartMode = mode;
  $("realChartMode").value = mode;
  if (mode === "daily") {
    loadRealHistory(activeStock(), true);
  } else {
    loadRealIntraday(activeStock(), true);
    syncMarket();
  }
  renderAll();
}

function startMarketAutoRefresh() {
  const refresh = async () => {
    await syncMarket();
    setTimeout(refresh, state.mode === "real" ? 3000 : 5000);
  };
  refresh();
}

$("buyTab").addEventListener("click", () => setSide("buy"));
$("sellTab").addEventListener("click", () => setSide("sell"));
$("submitOrder").addEventListener("click", submitOrder);
$("symbolSelect").addEventListener("change", (event) => selectStock(event.target.value));
$("categoryFilter").addEventListener("change", (event) => {
  state.category = event.target.value;
  renderWatchlist();
});
$("marketMode").addEventListener("change", (event) => setMarketMode(event.target.value));
$("realChartMode").addEventListener("change", (event) => setRealChartMode(event.target.value));
$("shockButton").addEventListener("click", () => {
  state.shock = 3.8;
  addLog("市場高量波動已觸發");
});
$("pauseSim").addEventListener("click", () => {
  state.simPaused = !state.simPaused;
  addLog(state.simPaused ? "模擬走勢已暫停" : "模擬走勢已繼續");
  renderAll();
});
$("refreshNews").addEventListener("click", syncNews);
document.querySelectorAll(".ma-toggle").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    state.maVisible[checkbox.value] = checkbox.checked;
    drawChart();
  });
});
window.addEventListener("resize", drawChart);
chart.addEventListener("mousemove", showChartTooltip);
chart.addEventListener("mouseleave", hideChartTooltip);

renderCategoryFilter();
renderSelectors();
$("realChartMode").value = state.realChartMode;
setSide("buy");
renderAll();
loadRealHistory(activeStock(), true);
syncNews();
setInterval(tickMarket, 5000);
startMarketAutoRefresh();
setInterval(syncNews, 300000);
