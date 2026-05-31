const stocks = [
  { symbol: "TAIEX", name: "加權指數", sector: "大盤指數", group: "指數", price: 21600, volatility: 0.006, drift: 0.0002, baseVolume: 2600000, isIndex: true },
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
  { value: "指數", label: "指數" },
  { value: "holdings", label: "持股" },
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

const timeframeOptions = [
  { value: "1h", label: "1h", minutes: 60, source: "intraday" },
  { value: "1d", label: "1D", tradingDays: 1, source: "daily" },
  { value: "5d", label: "5D", tradingDays: 5, source: "daily" },
  { value: "1m", label: "1M", tradingDays: 20, source: "daily" }
];

const state = {
  activeSymbol: "TAIEX",
  side: "buy",
  portfolios: {
    real: { cash: 1000000, positions: {} },
    sim: { cash: 1000000, positions: {} }
  },
  shock: 1,
  indexBase: 36296.12,
  marketImpulse: 0,
  marketVolumeBoost: 1,
  maVisible: { 5: true, 10: true, 20: false, 60: false },
  category: "all",
  mode: "real",
  chartTimeframe: "1h",
  realChartTimeframe: "1h",
  showPercentAxis: true,
  orderUnit: "share",
  viewports: {},
  chartDragging: false,
  dragAnchorX: 0,
  simPaused: false,
  news: [],
  realSync: false,
  marketOpen: false,
  marketSyncInFlight: false,
  lastMarketSync: 0,
  lastQuoteTime: "",
  lastNewsSync: 0
};

const SIM_PORTFOLIO_KEY = "twse-sim-portfolio-v1";
const REAL_PORTFOLIO_KEY = "twse-real-portfolio-v1";

function activePortfolio(mode = state.mode) {
  return state.portfolios[mode === "sim" ? "sim" : "real"];
}

function normalizePortfolio(saved) {
  const portfolio = { cash: 1000000, positions: {} };
  if (!saved || typeof saved !== "object") return portfolio;
  if (Number.isFinite(Number(saved.cash))) portfolio.cash = Math.max(0, Number(saved.cash));
  if (saved.positions && typeof saved.positions === "object") {
    portfolio.positions = Object.fromEntries(
      Object.entries(saved.positions)
        .map(([symbol, pos]) => [
          symbol,
          {
            shares: Math.max(0, Number(pos.shares) || 0),
            avg: Math.max(0, Number(pos.avg) || 0)
          }
        ])
        .filter(([, pos]) => pos.shares > 0)
    );
  }
  return portfolio;
}

function loadPortfolio(key, mode) {
  try {
    state.portfolios[mode] = normalizePortfolio(JSON.parse(localStorage.getItem(key) || "{}"));
  } catch {
    localStorage.removeItem(key);
  }
}

function savePortfolio(mode = state.mode) {
  const key = mode === "sim" ? SIM_PORTFOLIO_KEY : REAL_PORTFOLIO_KEY;
  const portfolio = activePortfolio(mode);
  try {
    localStorage.setItem(key, JSON.stringify({
      cash: portfolio.cash,
      positions: portfolio.positions,
      savedAt: new Date().toISOString()
    }));
  } catch {
    addLog("投資組合無法儲存，請確認瀏覽器儲存空間是否可用");
  }
}

function loadPortfolios() {
  loadPortfolio(REAL_PORTFOLIO_KEY, "real");
  loadPortfolio(SIM_PORTFOLIO_KEY, "sim");
}

function loadSimPortfolio() {
  loadPortfolio(SIM_PORTFOLIO_KEY, "sim");
}

function saveSimPortfolio() {
  savePortfolio("sim");
  return;
  try {
    localStorage.setItem(SIM_PORTFOLIO_KEY, JSON.stringify({
      cash: activePortfolio("sim").cash,
      positions: activePortfolio("sim").positions,
      savedAt: new Date().toISOString()
    }));
  } catch {
    addLog("模擬持股儲存失敗，請檢查瀏覽器儲存空間");
  }
}

function resetSimPortfolio() {
  state.portfolios.sim.positions = {};
  localStorage.setItem(SIM_PORTFOLIO_KEY, JSON.stringify({
    cash: state.portfolios.sim.cash,
    positions: {},
    savedAt: new Date().toISOString()
  }));
  addLog("模擬持股已歸零");
  renderAll();
}

function mountReactAppShell() {
  const root = document.getElementById("appRoot");
  if (!root || !window.React || !window.ReactDOM) {
    document.body.innerHTML = "<p style=\"padding:24px;color:white\">React 載入失敗，請先執行 npm install 後重新啟動。</p>";
    return;
  }

  const h = React.createElement;
  const option = (value, label) => h("option", { value }, label);

  function MarketStrip() {
    return h("section", { className: "market-strip", "aria-label": "台股市場總覽" },
      h("div", null,
        h("span", { className: "eyebrow" }, "TWSE SIM"),
        h("button", { id: "appTitleSwitch", className: "title-switch", type: "button", title: "切換現實股市 / 模擬股市" },
          h("h1", { id: "appTitle" }, "台股即時模擬交易")
        ),
        h("small", { id: "pageModeBadge", className: "page-mode-badge" }, "現實股市頁面")
      ),
      h("div", { className: "market-card" },
        h("span", null, "加權指數"),
        h("strong", { id: "indexPrice" }, "23,418.52"),
        h("small", { id: "indexChange", className: "up" }, "+1.28%")
      ),
      h("div", { className: "market-card mode-card" },
        h("label", null,
          "行情模式",
          h("select", { id: "marketMode" },
            option("real", "現實股市"),
            option("sim", "模擬走勢")
          )
        ),
        h("small", { id: "modeHint" }, "依 TWSE/TPEx 報價同步")
      ),
      h("div", { id: "simControlCard", className: "market-card" },
        h("span", null, "模擬控制"),
        h("button", { id: "pauseSim", className: "secondary-action", type: "button" }, "暫停模擬"),
        h("small", { id: "simStatus" }, "每 5 秒更新一根")
      ),
      h("div", { className: "market-card" },
        h("span", null, "同步成交量"),
        h("strong", { id: "marketVolume" }, "6,980 億"),
        h("small", { id: "marketStatus" }, "同步中...")
      ),
      h("div", { className: "market-card" },
        h("span", null, "目前時間"),
        h("strong", { id: "clock" }, "09:00:00"),
        h("small", null, "台北時間")
      )
    );
  }

  function Watchlist() {
    return h("aside", { className: "watchlist", "aria-label": "台股清單" },
      h("div", { className: "panel-head" },
        h("h2", null, "股票池"),
        h("button", { id: "shockButton", className: "icon-button", title: "觸發高量波動", "aria-label": "觸發高量波動", type: "button" }, "↯")
      ),
      h("label", { className: "filter-label" },
        "族群篩選",
        h("select", { id: "categoryFilter" })
      ),
      h("div", { id: "stockList", className: "stock-list" })
    );
  }

  function ChartPanel() {
    return h("section", { className: "chart-panel", "aria-label": "走勢圖" },
      h("div", { className: "panel-head chart-head" },
        h("div", null,
          h("h2", { id: "activeName" }, "台積電"),
          h("p", { id: "activeMeta" }, "2330 · AI · 先進封裝 · 現股")
        ),
        h("div", { className: "quote-box" },
          h("div", { className: "quote-state" },
            h("span", { id: "activeLimitBadge", className: "limit-badge", hidden: true }),
            h("span", { id: "activeQueueBadge", className: "queue-badge", hidden: true })
          ),
          h("strong", { id: "activePrice" }, "930.00"),
          h("span", { id: "activeChange", className: "up" }, "+0.00%")
        )
      ),
      h("div", { className: "chart-topbar" },
        h("div", { id: "timeframeBar", className: "timeframe-bar", role: "group", "aria-label": "圖表週期" },
          h("button", { className: "timeframe-button active", "data-timeframe": "1h", type: "button" }, "1h"),
          h("button", { className: "timeframe-button", "data-timeframe": "1d", type: "button" }, "1D"),
          h("button", { className: "timeframe-button", "data-timeframe": "5d", type: "button" }, "5D"),
          h("button", { className: "timeframe-button", "data-timeframe": "1m", type: "button" }, "1M")
        ),
        h("div", { className: "chart-status" },
          h("button", { id: "togglePercent", className: "chart-mini-button active", type: "button", "aria-pressed": "true" }, "%"),
          h("span", null, "百分比軸")
        )
      ),
      h("div", { className: "ma-controls", "aria-label": "均線設定" },
        h("label", null, h("input", { className: "ma-toggle", type: "checkbox", value: "5", defaultChecked: true }), "5MA"),
        h("label", null, h("input", { className: "ma-toggle", type: "checkbox", value: "10", defaultChecked: true }), "10MA"),
        h("label", null, h("input", { className: "ma-toggle", type: "checkbox", value: "20" }), "20MA"),
        h("label", null, h("input", { className: "ma-toggle", type: "checkbox", value: "60" }), "60MA")
      ),
      h("div", { className: "chart-shell" },
        h("div", { id: "chartStage", className: "chart-stage" },
          h("canvas", { id: "priceChart", width: "1120", height: "560", "aria-label": "K 線與成交量走勢" }),
          h("div", { id: "chartTooltip", className: "chart-tooltip", hidden: true })
        )
      )
    );
  }

  function TradeTicket() {
    return h("aside", { id: "tradeTicketRoot", className: "trade-ticket", "aria-label": "下單區" },
      h("div", { className: "panel-head" },
        h("h2", null, "下單"),
        h("span", { id: "buyingPower" }, "可用資金 1,000,000")
      ),
      h("div", { className: "segmented", role: "group", "aria-label": "買賣方向" },
        h("button", { id: "buyTab", className: "active", type: "button" }, "買進"),
        h("button", { id: "sellTab", type: "button" }, "賣出")
      ),
      h("label", null, "股票", h("select", { id: "symbolSelect" })),
      h("label", null, "價格", h("input", { id: "orderPrice", type: "number", min: "1", step: "0.5" })),
      h("label", null,
        "數量",
        h("select", { id: "orderUnit", defaultValue: "share" }, option("share", "股"), option("lot", "張"))
      ),
      h("label", null,
        h("span", { id: "orderQuantityLabel" }, "股數"),
        h("input", { id: "orderLots", type: "number", min: "1", step: "1", defaultValue: "1" })
      ),
      h("label", null,
        "委託類型",
        h("select", { id: "orderType", defaultValue: "market" }, option("market", "市價"), option("limit", "限價"))
      ),
      h("div", { id: "simFundingPanel", className: "funding-panel" },
        h("label", null,
          "模擬可用資金",
          h("input", { id: "simulationCash", type: "number", min: "0", step: "1000000", defaultValue: "1000000" })
        ),
        h("button", { id: "setSimulationCash", className: "secondary-action", type: "button" }, "設定資金")
      ),
      h("p", { id: "orderImpact", className: "impact-note" }),
      h("div", { className: "order-preview" },
        h("div", null, h("span", null, "換算股數"), h("strong", { id: "previewShares" }, "1 股")),
        h("div", null, h("span", null, "成交金額"), h("strong", { id: "previewValue" }, "0")),
        h("div", null, h("span", null, "手續費"), h("strong", { id: "previewFee" }, "0")),
        h("div", null, h("span", null, "交易稅"), h("strong", { id: "previewTax" }, "0")),
        h("div", null, h("span", { id: "previewTotalLabel" }, "預估扣款"), h("strong", { id: "previewTotal" }, "0"))
      ),
      h("button", { id: "submitOrder", className: "primary-action", type: "button" }, "送出買單"),
      h("button", { id: "resetSimPortfolio", className: "secondary-action reset-action", type: "button" }, "歸零模擬持股"),
      h("div", { className: "summary-grid" },
        h("div", null, h("span", null, "持股市值"), h("strong", { id: "equityValue" }, "0")),
        h("div", null, h("span", null, "未實現損益"), h("strong", { id: "unrealizedPnl" }, "0"))
      ),
      h("div", { className: "log-panel" }, h("h3", null, "成交紀錄"), h("ul", { id: "tradeLog" }))
    );
  }

  function NewsPanel() {
    return h("section", { className: "news-panel", "aria-label": "台股新聞" },
      h("div", { className: "panel-head" },
        h("div", null,
          h("h2", null, "台股新聞"),
          h("p", null, "新聞會直接套用到模擬行情，利多利空會依市場反應影響相關族群。")
        ),
        h("button", { id: "refreshNews", className: "secondary-action", type: "button" }, "更新新聞")
      ),
      h("div", { id: "newsList", className: "news-list" })
    );
  }

  function PositionsPanel() {
    return h("section", { className: "positions-panel" },
      h("div", { className: "panel-head" },
        h("h2", null, "持倉"),
        h("span", null, "手續費 0.1425% · 交易稅 0.3%")
      ),
      h("div", { className: "table-wrap" },
        h("table", null,
          h("thead", null,
            h("tr", null,
              h("th", null, "股票"),
              h("th", null, "股數"),
              h("th", null, "均價"),
              h("th", null, "現價"),
              h("th", null, "市值"),
              h("th", null, "損益")
            )
          ),
          h("tbody", { id: "positionsBody" },
            h("tr", null, h("td", { colSpan: "6", className: "empty" }, "尚無持倉"))
          )
        )
      )
    );
  }

  function AppShell() {
    return h("main", { className: "app", "data-react-shell": "true" },
      h(MarketStrip),
      h("section", { className: "workspace" }, h(Watchlist), h(ChartPanel), h(TradeTicket)),
      h(PositionsPanel),
      h(NewsPanel)
    );
  }

  ReactDOM.render(h(AppShell), root);
}

mountReactAppShell();

const $ = (id) => document.getElementById(id);
const chart = $("priceChart");
const tooltip = $("chartTooltip");
const stage = $("chartStage");
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

function routeMode() {
  return location.hash === "#sim" ? "sim" : "real";
}

function pageTitleForMode(mode = state.mode) {
  return mode === "sim" ? "台股模擬交易" : "台股即時行情";
}

function syncRouteToMode(mode = state.mode) {
  const nextHash = mode === "sim" ? "#sim" : "#real";
  if (location.hash !== nextHash) history.replaceState(null, "", nextHash);
  document.body.dataset.page = mode;
}

function candlesFor(stock, mode = state.mode) {
  if (modeKey(mode) === "real") {
    if (timeframeConfig().source === "daily") {
      return aggregateDailyCandles(stock.realCandles || [], state.chartTimeframe);
    }
    return stock.realHourlyCandles || [];
  }
  return stock.simCandles || [];
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
  const now = Date.now();
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
    const stamp = new Date(now - (87 - i) * 5 * 60 * 1000).toLocaleString("sv-SE", {
      hour12: false,
      timeZone: "Asia/Taipei"
    }).replace(" ", " ");
    candles.push({ open, high, low, close, volume, time: stamp.slice(0, 16) });
    price = close;
  }
  stock.simPrice = candles.at(-1).close;
  // Seeded candles are context only; trading limits start from the live simulation quote.
  stock.simOpen = candles.at(-1).close;
  stock.simCandles = candles;
  stock.realPrice = stock.price;
  stock.realOpen = stock.price;
  stock.realCandles = [];
  stock.realLiveCandles = [];
  stock.realHourlyCandles = [];
}

stocks.forEach(buildCandles);

function timeframeConfig(value = state.chartTimeframe) {
  return timeframeOptions.find((option) => option.value === value) || timeframeOptions.at(-1);
}

function defaultVisibleBars(timeframe = state.chartTimeframe) {
  return {
    "1h": 24,
    "1d": 60,
    "5d": 52,
    "1m": 36
  }[timeframe] || 28;
}

function viewportKey() {
  return `${chartKey()}:viewport`;
}

function ensureViewport(totalCount) {
  const key = viewportKey();
  const existing = state.viewports[key];
  const defaultCount = defaultVisibleBars();
  const shouldExpandLoadedHistory = existing
    && existing.totalCount < defaultCount
    && totalCount > existing.totalCount
    && existing.count >= existing.totalCount;
  const requestedCount = shouldExpandLoadedHistory ? defaultCount : existing?.count || defaultCount;
  const next = {
    count: Math.min(totalCount, requestedCount),
    offset: shouldExpandLoadedHistory ? 0 : existing?.offset || 0,
    totalCount
  };
  next.count = Math.min(totalCount, Math.max(Math.min(6, totalCount), next.count || totalCount));
  next.offset = Math.max(0, Math.min(next.offset, Math.max(0, totalCount - next.count)));
  state.viewports[key] = next;
  return next;
}

function visibleWindow(candles) {
  const totalCount = candles.length;
  const viewport = ensureViewport(totalCount);
  const end = Math.max(viewport.count, totalCount - viewport.offset);
  const start = Math.max(0, end - viewport.count);
  return {
    viewport,
    start,
    end,
    candles: candles.slice(start, end)
  };
}

function setViewportFromGesture(totalCount, nextCount, focusIndex = totalCount - 1) {
  const key = viewportKey();
  const current = ensureViewport(totalCount);
  const count = Math.max(6, Math.min(totalCount, Math.round(nextCount)));
  const currentEnd = totalCount - current.offset;
  const currentStart = Math.max(0, currentEnd - current.count);
  const focusRatio = current.count <= 1 ? 1 : (focusIndex - currentStart) / Math.max(1, current.count - 1);
  const rawStart = Math.round(focusIndex - focusRatio * Math.max(1, count - 1));
  const start = Math.max(0, Math.min(totalCount - count, rawStart));
  state.viewports[key] = {
    count,
    offset: Math.max(0, totalCount - (start + count))
  };
}

function panViewport(totalCount, barsDelta) {
  const key = viewportKey();
  const viewport = ensureViewport(totalCount);
  const maxOffset = Math.max(0, totalCount - viewport.count);
  viewport.offset = Math.max(0, Math.min(maxOffset, viewport.offset + barsDelta));
  state.viewports[key] = viewport;
}

function aggregateCandles(candles, timeframe, mode = state.mode) {
  if (!Array.isArray(candles) || candles.length === 0) return candles || [];
  const { minutes, source, tradingDays } = timeframeConfig(timeframe);
  if (source === "daily") return aggregateDailyCandles(candles, timeframe);
  if (!minutes) return candles;
  if (mode === "real") return aggregateIntradayCandles(candles, minutes);
  return aggregateSequentialCandles(candles, Math.max(1, Math.round(minutes / 5)));
}

function aggregateDailyCandles(candles, timeframe) {
  if (timeframe === "1m") return aggregateMonthlyCandles(candles);
  const { tradingDays } = timeframeConfig(timeframe);
  if (!tradingDays || tradingDays <= 1) return candles;
  return aggregateSequentialCandles(candles, tradingDays);
}

function aggregateMonthlyCandles(candles) {
  const buckets = new Map();
  candles.forEach((candle) => {
    const key = String(candle.time || "").slice(0, 7);
    const existing = buckets.get(key);
    if (!existing) {
      buckets.set(key, { ...candle });
      return;
    }
    existing.high = Math.max(existing.high, candle.high);
    existing.low = Math.min(existing.low, candle.low);
    existing.close = candle.close;
    existing.volume = (existing.volume || 0) + (candle.volume || 0);
    existing.time = candle.time;
  });
  return [...buckets.values()];
}

function aggregateSequentialCandles(candles, groupSize) {
  const result = [];
  for (let i = 0; i < candles.length; i += groupSize) {
    const chunk = candles.slice(i, i + groupSize);
    if (chunk.length === 0) continue;
    result.push({
      time: chunk.at(-1).time,
      open: chunk[0].open,
      high: Math.max(...chunk.map((candle) => candle.high)),
      low: Math.min(...chunk.map((candle) => candle.low)),
      close: chunk.at(-1).close,
      volume: chunk.reduce((sum, candle) => sum + (candle.volume || 0), 0)
    });
  }
  return result;
}

function aggregateIntradayCandles(candles, intervalMinutes) {
  const byBucket = new Map();
  candles.forEach((candle) => {
    const minute = minuteOfDayFromCandle(candle);
    const bucket = Math.floor((minute - 9 * 60) / intervalMinutes);
    const existing = byBucket.get(bucket);
    if (!existing) {
      byBucket.set(bucket, {
        time: String(candle.time).slice(0, 16),
        open: candle.open,
        high: candle.high,
        low: candle.low,
        close: candle.close,
        volume: candle.volume || 0
      });
      return;
    }
    existing.high = Math.max(existing.high, candle.high);
    existing.low = Math.min(existing.low, candle.low);
    existing.close = candle.close;
    existing.volume += candle.volume || 0;
    existing.time = String(candle.time).slice(0, 16);
  });
  return [...byBucket.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, candle]) => candle);
}

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
    const orderImpulse = stock.orderImpulse || 0;
    const orderVolumeLots = stock.orderVolumeLots || 0;
    const queuedShares = stock.limitQueue || 0;
    const queuedRatio = Math.abs(queuedShares) / Math.max(1, stock.baseVolume * 1000);
    const queuedPressure = Math.sign(queuedShares) * Math.min(0.02, Math.sqrt(queuedRatio) * 0.003);
    const pressure = stock.drift + state.marketImpulse + newsImpulse + orderImpulse + queuedPressure + randomNormal() * stock.volatility * state.shock;
    const open = last.close;
    const close = Math.max(1, roundTick(clampToLimit(stock, open * (1 + pressure))));
    const high = roundTick(clampToLimit(stock, Math.max(open, close) * (1 + Math.random() * stock.volatility)));
    const low = roundTick(clampToLimit(stock, Math.min(open, close) * (1 - Math.random() * stock.volatility)));
    const newsVolume = stock.newsVolume || 1;
    const queueVolumeBoost = 1 + Math.min(4, queuedRatio * 0.55);
    const volume = Math.round(stock.baseVolume * state.shock * state.marketVolumeBoost * newsVolume * queueVolumeBoost * (1.1 + Math.abs(pressure) * 130 + Math.random()) + orderVolumeLots);
    candles.push({
      open,
      high,
      low,
      close,
      volume,
      time: new Date().toLocaleString("sv-SE", { hour12: false, timeZone: "Asia/Taipei" }).slice(0, 16)
    });
    stock.simCandles = candles.slice(-88);
    stock.simPrice = close;
    stock.newsImpulse = newsImpulse * 0.72;
    stock.newsVolume = 1 + (newsVolume - 1) * 0.68;
    stock.orderImpulse = 0;
    stock.orderVolumeLots = 0;
    stock.limitQueue = Math.abs(queuedShares) < 1 ? 0 : Math.round(queuedShares * 0.84);
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

function simulatedLimitState(stock) {
  if (state.mode !== "sim") return null;
  const price = priceFor(stock, "sim");
  const upper = roundTick(clampToLimit(stock, Number.POSITIVE_INFINITY));
  const lower = roundTick(clampToLimit(stock, 0));
  if (price >= upper) {
    return {
      label: "漲停",
      className: "limit-up",
      queueLabel: "買單排隊",
      queuedShares: Math.max(0, stock.limitQueue || 0)
    };
  }
  if (price <= lower) {
    return {
      label: "跌停",
      className: "limit-down",
      queueLabel: "賣單排隊",
      queuedShares: Math.max(0, -(stock.limitQueue || 0))
    };
  }
  return null;
}

function renderWatchlist() {
  const visibleStocks = stocks.filter((stock) => {
    if (state.category === "all") return true;
    if (state.category === "holdings") return (activePortfolio().positions[stock.symbol]?.shares || 0) > 0;
    return stock.group === state.category || stock.sector === state.category;
  });

  if (visibleStocks.length === 0) {
    $("stockList").innerHTML = `<div class="empty stock-empty">目前沒有持股</div>`;
    return;
  }

  $("stockList").innerHTML = visibleStocks
    .map((stock) => {
      const change = changePct(stock);
      const limitState = simulatedLimitState(stock);
      const limitBadge = limitState
        ? `<br><small class="stock-limit-pill ${limitState.className}">${limitState.label}</small>`
        : "";
      return `
        <button class="stock-row ${stock.symbol === state.activeSymbol ? "active" : ""}" data-symbol="${stock.symbol}" type="button">
          <span><strong>${stock.name}</strong><br>${stock.symbol} · ${stock.group} · ${stock.sector}${limitBadge}</span>
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
  const limitState = simulatedLimitState(stock);
  const marketStocks = stocks.filter((item) => !item.isIndex);
  const marketValue = marketStocks.reduce((sum, item) => sum + priceFor(item) * item.baseVolume, 0);
  const openValue = marketStocks.reduce((sum, item) => sum + openFor(item) * item.baseVolume, 0);
  const index = state.mode === "real" && state.realIndex?.price ? state.realIndex.price : state.indexBase * (marketValue / openValue);
  const indexChange = state.mode === "real" && state.realIndex?.previousClose
    ? ((state.realIndex.price - state.realIndex.previousClose) / state.realIndex.previousClose) * 100
    : ((marketValue - openValue) / openValue) * 100;
  const volumeE = marketStocks.reduce((sum, item) => sum + volumeFor(item) * priceFor(item) * 1000, 0) / 100000000;

  $("indexPrice").textContent = priceFmt.format(index);
  $("indexChange").textContent = formatSignedPct(indexChange);
  $("indexChange").className = indexChange >= 0 ? "up" : "down";
  $("marketVolume").textContent = `${money.format(volumeE)} 億`;
  $("marketStatus").textContent = marketStatusText();
  $("marketMode").value = state.mode;
  $("modeHint").textContent = state.mode === "real"
    ? "依 TWSE/TPEx 報價同步"
    : "使用新聞與隨機波動推進";
  $("appTitle").textContent = pageTitleForMode();
  $("pageModeBadge").textContent = state.mode === "sim" ? "模擬股市頁面" : "現實股市頁面";
  $("appTitleSwitch").setAttribute("aria-label", `目前是${state.mode === "sim" ? "模擬股市" : "現實股市"}，點擊切換頁面`);
  syncRouteToMode();
  $("simControlCard").hidden = state.mode !== "sim";
  $("simFundingPanel").hidden = state.mode !== "sim";
  $("orderImpact").hidden = state.mode !== "sim";
  $("resetSimPortfolio").hidden = state.mode !== "sim";
  $("timeframeBar").hidden = state.mode === "sim";
  $("pauseSim").textContent = state.simPaused ? "繼續模擬" : "暫停模擬";
  $("simStatus").textContent = state.simPaused ? "模擬已暫停" : "每 5 秒更新一根";
  $("clock").textContent = new Date().toLocaleTimeString("zh-TW", { hour12: false, timeZone: "Asia/Taipei" });
  $("activeName").textContent = stock.name;
  $("activeMeta").textContent = `${stock.symbol} · ${stock.group} · ${stock.sector} · 現股`;
  $("activePrice").textContent = priceFmt.format(priceFor(stock));
  $("activePrice").className = limitState?.className || "";
  $("activeChange").textContent = formatSignedPct(change);
  $("activeChange").className = limitState?.className || (change >= 0 ? "up" : "down");
  $("activeLimitBadge").hidden = !limitState;
  $("activeLimitBadge").textContent = limitState?.label || "";
  $("activeLimitBadge").className = `limit-badge ${limitState?.className || ""}`;
  $("activeQueueBadge").hidden = !limitState?.queuedShares;
  $("activeQueueBadge").textContent = limitState?.queuedShares
    ? `${limitState.queueLabel} ${money.format(limitState.queuedShares)} 股`
    : "";
  if (document.activeElement !== $("orderPrice")) {
    $("orderPrice").value = priceFor(stock);
  }
  $("buyingPower").textContent = `可用資金 ${money.format(activePortfolio().cash)}`;
  if ($("simulationCash") && document.activeElement !== $("simulationCash")) {
    $("simulationCash").value = activePortfolio("sim").cash;
  }
  renderOrderImpactPreview();
  $("togglePercent").classList.toggle("active", state.showPercentAxis);
  $("togglePercent").setAttribute("aria-pressed", String(state.showPercentAxis));
  renderOrderPreview();
  $("submitOrder").disabled = Boolean(stock.isIndex);
  if (stock.isIndex) {
    $("submitOrder").textContent = "指數僅供查看";
  } else {
    $("submitOrder").textContent = state.side === "buy" ? "送出買單" : "送出賣單";
  }
}

function drawChart() {
  const stock = activeStock();
  const allCandles = activeCandles(stock);
  const rect = stage.getBoundingClientRect();
  resizeCanvas(chart, ctx, rect);
  ctx.clearRect(0, 0, rect.width, rect.height);

  if (!allCandles || allCandles.length === 0) {
    chartHoverData = null;
    ctx.fillStyle = "#7d8a93";
    ctx.font = "15px Microsoft JhengHei, Arial";
    const message = state.mode === "real" && timeframeConfig().source === "intraday"
      ? "當日分 K 尚無資料，開盤同步後會開始累積"
      : state.mode === "real"
        ? "正在載入現實股市日 K..."
        : "尚無 K 線資料";
    ctx.fillText(message, 24, 42);
    return;
  }

  const windowed = visibleWindow(allCandles);
  const candles = ensureChartVolumes(stock, windowed.candles);

  const pad = { left: 58, right: 74, top: 24, bottom: 36 };
  const volumeHeight = Math.max(92, rect.height * 0.22);
  const priceBottom = rect.height - pad.bottom - volumeHeight - 18;
  const chartWidth = rect.width - pad.left - pad.right;
  const candleWidth = chartWidth / Math.max(candles.length, 1);
  const maSeries = buildVisibleMaSeries(candles);
  const highs = candles.map((c) => c.high);
  const lows = candles.map((c) => c.low);
  const maValues = maSeries.flatMap((series) => series.values.filter((value) => value !== null));
  const maxPrice = Math.max(...highs, ...maValues);
  const minPrice = Math.min(...lows, ...maValues);
  const maxVolume = Math.max(1, ...candles.map((c) => c.volume || 0));
  const volumeAxisMax = volumeScaleMax(maxVolume);
  const baseline = baselinePriceForChart(stock, candles);
  chartHoverData = {
    type: "candles",
    allCandles,
    candles,
    pad,
    candleWidth,
    startIndex: windowed.start,
    endIndex: windowed.end,
    rectWidth: rect.width,
    rectHeight: rect.height,
    priceBottom,
    minPrice,
    maxPrice,
    baseline
  };

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
    if (state.showPercentAxis) {
      const pct = ((price - baseline) / baseline) * 100;
      ctx.textAlign = "right";
      ctx.fillText(formatSignedPct(pct), rect.width - 10, y + 4);
      ctx.textAlign = "left";
    }
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
    const volumeTop = rect.height - pad.bottom - (Math.min(candle.volume, volumeAxisMax) / volumeAxisMax) * volumeHeight;

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
  ctx.fillText(`${money.format(volumeAxisMax)} 張`, 8, rect.height - volumeHeight + 10);
  drawTimeLabels(candles, pad, rect, candleWidth);
}

function volumeScaleMax(maxVolume) {
  if (!Number.isFinite(maxVolume) || maxVolume <= 0) return 1;
  const padded = maxVolume * 1.35;
  const magnitude = 10 ** Math.floor(Math.log10(padded));
  const normalized = padded / magnitude;
  const step = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return Math.max(1, step * magnitude);
}

function ensureChartVolumes(stock, candles) {
  if (!Array.isArray(candles) || candles.length === 0) return candles || [];
  const volumes = candles.map((candle) => Number(candle.volume) || 0);
  const maxVolume = Math.max(...volumes);
  const positiveVolumes = volumes.filter((volume) => volume > 0);
  const minPositiveVolume = positiveVolumes.length ? Math.min(...positiveVolumes) : 0;
  const flatTinyVolume = maxVolume <= 1 || (minPositiveVolume > 0 && maxVolume / minPositiveVolume < 1.12);
  if (!flatTinyVolume) return candles;
  return synthesizeHourlyVolumes(stock, candles, true);
}

function resizeCanvas(canvas, context, rect) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
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

function drawTimeLabels(candles, pad, rect, candleWidth) {
  const labelCount = Math.min(5, candles.length);
  if (labelCount <= 0) return;
  ctx.fillStyle = "#7d8a93";
  ctx.textAlign = "center";
  for (let i = 0; i < labelCount; i += 1) {
    const index = Math.min(candles.length - 1, Math.round((i * (candles.length - 1)) / Math.max(1, labelCount - 1)));
    const x = pad.left + index * candleWidth + candleWidth / 2;
    const timeLabel = formatAxisTime(candles[index].time);
    ctx.fillText(timeLabel, x, rect.height - 12);
  }
  ctx.textAlign = "left";
}

function formatAxisTime(time) {
  const text = String(time || "");
  if (timeframeConfig().source === "daily") return text.slice(5, 10) || text;
  return text.length >= 16 ? `${text.slice(5, 10)} ${text.slice(11, 16)}` : text.slice(-5) || text;
}

function showChartTooltip(event) {
  if (!chartHoverData) {
    tooltip.hidden = true;
    return;
  }
  const point = chartPointFromEvent(event);
  if (!point) {
    tooltip.hidden = true;
    return;
  }
  const { candles, rectWidth, baseline } = chartHoverData;
  const rect = chart.getBoundingClientRect();
  const localIndex = point.localIndex ?? (point.index - chartHoverData.startIndex);
  const candle = candles[localIndex];
  const pct = ((candle.close - baseline) / baseline) * 100;
  let html = `
    <strong>${escapeHtml(candle.time || `第 ${localIndex + 1} 根`)}</strong>
    開 ${priceFmt.format(candle.open)}<br>
    高 ${priceFmt.format(candle.high)}　低 ${priceFmt.format(candle.low)}<br>
    收 ${priceFmt.format(candle.close)} · ${formatSignedPct(pct)}<br>
    量 ${money.format(candle.volume)} 張
  `;
  tooltip.innerHTML = html;
  const tooltipX = Math.min(rect.width - 188, Math.max(10, point.x + 14));
  const tooltipY = Math.min(rect.height - 126, Math.max(10, point.y + 14));
  tooltip.style.left = `${tooltipX}px`;
  tooltip.style.top = `${tooltipY}px`;
  tooltip.hidden = false;
}

function hideChartTooltip() {
  tooltip.hidden = true;
}

function baselinePriceForChart(stock, candles) {
  if (state.mode === "real") {
    if (timeframeConfig().source === "daily") {
      return stock.realQuote?.previousClose || candles[0]?.open || priceFor(stock);
    }
    return stock.realQuote?.previousClose || candles[0]?.open || priceFor(stock);
  }
  return candles[0]?.open || priceFor(stock);
}

function chartKey() {
  return `${state.activeSymbol}:${state.mode}:${state.chartTimeframe}`;
}

function drawingsForActiveChart() {
  const key = chartKey();
  if (!state.drawings[key]) state.drawings[key] = [];
  return state.drawings[key];
}

function nextDrawingId() {
  return `draw-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function activeDrawing() {
  return drawingsForActiveChart().find((drawing) => drawing.id === state.selectedDrawingId) || null;
}

function clearSelection() {
  state.selectedDrawingId = null;
}

function normalizeDrawPoint(point) {
  if (!point) return null;
  return { index: point.index, price: Math.round(point.price * 100) / 100 };
}

function screenPointFor(drawPoint) {
  if (!chartHoverData || !drawPoint) return null;
  const { candles, pad, candleWidth, priceBottom, minPrice, maxPrice, startIndex } = chartHoverData;
  const localIndex = drawPoint.index - startIndex;
  if (localIndex < -1 || localIndex > candles.length) return null;
  return {
    x: pad.left + localIndex * candleWidth + candleWidth / 2,
    y: scale(drawPoint.price, minPrice, maxPrice, priceBottom, pad.top)
  };
}

function chartPointFromEvent(event, allowOutside = false) {
  if (!chartHoverData) return null;
  const rect = chart.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const plotX = x;
  const plotY = y;
  const { candles, pad, candleWidth, rectWidth, rectHeight, priceBottom, minPrice, maxPrice, startIndex } = chartHoverData;
  if (!allowOutside && (plotX < pad.left || plotX > rectWidth - pad.right || plotY < pad.top || plotY > priceBottom)) return null;
  const clampedX = Math.max(pad.left, Math.min(rectWidth - pad.right, plotX));
  const clampedY = Math.max(pad.top, Math.min(priceBottom, plotY));
  const localIndex = Math.max(0, Math.min(candles.length - 1, Math.round((clampedX - pad.left - candleWidth / 2) / candleWidth)));
  return {
    x: clampedX,
    y: clampedY,
    rawX: plotX,
    rawY: plotY,
    snappedX: pad.left + localIndex * candleWidth + candleWidth / 2,
    index: startIndex + localIndex,
    localIndex,
    price: unscale(clampedY, minPrice, maxPrice, priceBottom, pad.top)
  };
}

function setChartTimeframe(timeframe) {
  state.chartTimeframe = timeframe;
  if (state.mode === "real") state.realChartTimeframe = timeframe;
  const stock = activeStock();
  if (state.mode === "real") {
    if (timeframeConfig(timeframe).source === "daily") loadRealHistory(stock, true);
    else loadRealHourly(stock, true);
    syncMarket();
  }
  renderChartControls();
  renderAll();
}

function renderChartControls() {
  document.querySelectorAll(".timeframe-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.timeframe === state.chartTimeframe);
  });
  chart.style.cursor = state.chartDragging ? "grabbing" : "grab";
}

function drawOverlay() {
  const rect = stage.getBoundingClientRect();
  overlayCtx.clearRect(0, 0, rect.width, rect.height);
  if (!chartHoverData) return;

  const drawings = drawingsForActiveChart();
  drawings.forEach((drawing) => paintDrawing(drawing, false, drawing.id === state.selectedDrawingId));
  if (state.drawingDraft) paintDrawing(state.drawingDraft, true);

  if (state.pointer) {
    const { x, y, localIndex } = state.pointer;
    const candle = chartHoverData.candles[localIndex];
    overlayCtx.strokeStyle = "rgba(102, 166, 255, 0.4)";
    overlayCtx.lineWidth = 1;
    overlayCtx.setLineDash([4, 5]);
    overlayCtx.beginPath();
    overlayCtx.moveTo(x, chartHoverData.pad.top);
    overlayCtx.lineTo(x, chartHoverData.priceBottom);
    overlayCtx.moveTo(chartHoverData.pad.left, y);
    overlayCtx.lineTo(chartHoverData.rectWidth - chartHoverData.pad.right, y);
    overlayCtx.stroke();
    overlayCtx.setLineDash([]);
    if (candle) {
      overlayCtx.fillStyle = "#0f1720";
      overlayCtx.strokeStyle = "#334252";
      overlayCtx.lineWidth = 1;
      overlayCtx.fillRect(x - 34, chartHoverData.priceBottom + 8, 68, 20);
      overlayCtx.strokeRect(x - 34, chartHoverData.priceBottom + 8, 68, 20);
      overlayCtx.fillStyle = "#d6dde2";
      overlayCtx.font = "11px Microsoft JhengHei, Arial";
      overlayCtx.textAlign = "center";
      overlayCtx.fillText(formatAxisTime(candle.time), x, chartHoverData.priceBottom + 22);
      overlayCtx.textAlign = "left";
    }
  }
}

function paintDrawing(drawing, isDraft, isSelected = false) {
  const start = screenPointFor(drawing.start);
  if (!start) return;
  const end = screenPointFor(drawing.end || drawing.start) || start;
  const accent = isSelected ? "rgba(255, 209, 102, 1)" : "rgba(102, 166, 255, 0.95)";
  const color = isDraft ? "rgba(242, 184, 75, 0.9)" : accent;

  overlayCtx.save();
  overlayCtx.strokeStyle = color;
  overlayCtx.fillStyle = color;
  overlayCtx.lineWidth = drawing.type === "horizontal" ? 1.4 : 1.8;

  if (drawing.type === "trendline" || drawing.type === "arrow") {
    overlayCtx.beginPath();
    overlayCtx.moveTo(start.x, start.y);
    overlayCtx.lineTo(end.x, end.y);
    overlayCtx.stroke();
    if (drawing.type === "arrow") drawArrowHead(start, end, color);
  } else if (drawing.type === "horizontal") {
    overlayCtx.beginPath();
    overlayCtx.moveTo(chartHoverData.pad.left, start.y);
    overlayCtx.lineTo(chartHoverData.rectWidth - chartHoverData.pad.right, start.y);
    overlayCtx.stroke();
  } else if (drawing.type === "rectangle") {
    const left = Math.min(start.x, end.x);
    const top = Math.min(start.y, end.y);
    const width = Math.abs(start.x - end.x);
    const height = Math.abs(start.y - end.y);
    overlayCtx.fillStyle = isDraft ? "rgba(242, 184, 75, 0.12)" : "rgba(102, 166, 255, 0.12)";
    overlayCtx.fillRect(left, top, width, height);
    overlayCtx.strokeRect(left, top, width, height);
  } else if (drawing.type === "channel") {
    const offset = screenOffsetForPriceDelta(drawing.offsetPrice || 0);
    overlayCtx.beginPath();
    overlayCtx.moveTo(start.x, start.y);
    overlayCtx.lineTo(end.x, end.y);
    overlayCtx.moveTo(start.x, start.y + offset);
    overlayCtx.lineTo(end.x, end.y + offset);
    overlayCtx.stroke();
    overlayCtx.globalAlpha = 0.1;
    overlayCtx.beginPath();
    overlayCtx.moveTo(start.x, start.y);
    overlayCtx.lineTo(end.x, end.y);
    overlayCtx.lineTo(end.x, end.y + offset);
    overlayCtx.lineTo(start.x, start.y + offset);
    overlayCtx.closePath();
    overlayCtx.fill();
    overlayCtx.globalAlpha = 1;
  } else if (drawing.type === "fib") {
    const levels = [0, 0.236, 0.382, 0.5, 0.618, 1];
    const left = Math.min(start.x, end.x);
    const right = Math.max(start.x, end.x);
    levels.forEach((level) => {
      const y = start.y + (end.y - start.y) * level;
      overlayCtx.beginPath();
      overlayCtx.moveTo(left, y);
      overlayCtx.lineTo(right, y);
      overlayCtx.stroke();
      overlayCtx.fillStyle = "#d6dde2";
      overlayCtx.font = "11px Microsoft JhengHei, Arial";
      overlayCtx.fillText(`${Math.round(level * 100)}%`, right + 6, y + 3);
    });
  } else if (drawing.type === "text") {
    overlayCtx.font = "13px Microsoft JhengHei, Arial";
    const label = drawing.text || "文字";
    const metrics = overlayCtx.measureText(label);
    const width = metrics.width + 14;
    overlayCtx.fillStyle = isSelected ? "rgba(255, 209, 102, 0.14)" : "rgba(17, 22, 26, 0.82)";
    overlayCtx.strokeRect(start.x - 8, start.y - 18, width, 26);
    overlayCtx.fillRect(start.x - 8, start.y - 18, width, 26);
    overlayCtx.fillStyle = "#edf2f5";
    overlayCtx.fillText(label, start.x, start.y);
  }

  if (isSelected || isDraft) {
    drawingHandles(drawing).forEach((handle) => {
      const point = screenPointFor(handle.point);
      if (!point) return;
      overlayCtx.fillStyle = "#0d1114";
      overlayCtx.strokeStyle = color;
      overlayCtx.lineWidth = 1.4;
      overlayCtx.beginPath();
      overlayCtx.rect(point.x - 4, point.y - 4, 8, 8);
      overlayCtx.fill();
      overlayCtx.stroke();
    });
  }
  overlayCtx.restore();
}

function drawArrowHead(start, end, color) {
  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  const size = 10;
  overlayCtx.fillStyle = color;
  overlayCtx.beginPath();
  overlayCtx.moveTo(end.x, end.y);
  overlayCtx.lineTo(end.x - size * Math.cos(angle - Math.PI / 6), end.y - size * Math.sin(angle - Math.PI / 6));
  overlayCtx.lineTo(end.x - size * Math.cos(angle + Math.PI / 6), end.y - size * Math.sin(angle + Math.PI / 6));
  overlayCtx.closePath();
  overlayCtx.fill();
}

function screenOffsetForPriceDelta(delta) {
  if (!chartHoverData) return 0;
  const a = scale(chartHoverData.minPrice, chartHoverData.minPrice, chartHoverData.maxPrice, chartHoverData.priceBottom, chartHoverData.pad.top);
  const b = scale(chartHoverData.minPrice + delta, chartHoverData.minPrice, chartHoverData.maxPrice, chartHoverData.priceBottom, chartHoverData.pad.top);
  return b - a;
}

function drawingHandles(drawing) {
  if (drawing.type === "horizontal" || drawing.type === "text") return [{ role: "start", point: drawing.start }];
  const handles = [{ role: "start", point: drawing.start }];
  if (drawing.end) handles.push({ role: "end", point: drawing.end });
  if (drawing.type === "channel") {
    handles.push({
      role: "offset",
      point: {
        index: drawing.end.index,
        price: drawing.end.price + (drawing.offsetPrice || 0)
      }
    });
  }
  return handles;
}

function drawingBounds(drawing) {
  const points = drawingHandles(drawing).map((handle) => screenPointFor(handle.point)).filter(Boolean);
  if (points.length === 0) return null;
  return {
    left: Math.min(...points.map((point) => point.x)),
    right: Math.max(...points.map((point) => point.x)),
    top: Math.min(...points.map((point) => point.y)),
    bottom: Math.max(...points.map((point) => point.y))
  };
}

function pickDrawingAtPoint(point) {
  const drawings = drawingsForActiveChart();
  let best = null;
  for (let i = drawings.length - 1; i >= 0; i -= 1) {
    const drawing = drawings[i];
    const handle = drawingHandles(drawing).find((entry) => {
      const screen = screenPointFor(entry.point);
      return screen && distanceBetween(screen, point) <= 10;
    });
    if (handle) return { drawing, handle: handle.role, distance: 0 };
    const distance = distanceToDrawing(drawing, point);
    if (distance <= 14 && (!best || distance < best.distance)) {
      best = { drawing, handle: null, distance };
    }
  }
  return best;
}

function distanceToDrawing(drawing, point) {
  const start = screenPointFor(drawing.start);
  const end = screenPointFor(drawing.end || drawing.start) || start;
  if (!start || !end) return Number.POSITIVE_INFINITY;
  if (drawing.type === "horizontal") {
    return Math.abs(point.y - start.y);
  }
  if (drawing.type === "trendline" || drawing.type === "arrow" || drawing.type === "fib") {
    return pointToSegmentDistance(point, start, end);
  }
  if (drawing.type === "channel") {
    const offset = screenOffsetForPriceDelta(drawing.offsetPrice || 0);
    const lowerStart = { x: start.x, y: start.y + offset };
    const lowerEnd = { x: end.x, y: end.y + offset };
    return Math.min(pointToSegmentDistance(point, start, end), pointToSegmentDistance(point, lowerStart, lowerEnd));
  }
  if (drawing.type === "rectangle" || drawing.type === "text") {
    const bounds = drawingBounds(drawing);
    if (!bounds) return Number.POSITIVE_INFINITY;
    const dx = point.x < bounds.left ? bounds.left - point.x : point.x > bounds.right ? point.x - bounds.right : 0;
    const dy = point.y < bounds.top ? bounds.top - point.y : point.y > bounds.bottom ? point.y - bounds.bottom : 0;
    return Math.hypot(dx, dy);
  }
  return Math.min(distanceBetween(start, point), distanceBetween(end, point));
}

function pointToSegmentDistance(point, start, end) {
  const lengthSq = (end.x - start.x) ** 2 + (end.y - start.y) ** 2;
  if (lengthSq === 0) return distanceBetween(point, start);
  const t = Math.max(0, Math.min(1, ((point.x - start.x) * (end.x - start.x) + (point.y - start.y) * (end.y - start.y)) / lengthSq));
  return distanceBetween(point, {
    x: start.x + t * (end.x - start.x),
    y: start.y + t * (end.y - start.y)
  });
}

function startInteraction(kind, payload = {}) {
  state.interaction = { kind, ...payload };
}

function stopInteraction() {
  state.interaction = null;
}

function clonePoint(point) {
  return point ? { ...point } : null;
}

function moveDrawingBy(drawing, deltaIndex, deltaPrice) {
  drawing.start.index += deltaIndex;
  drawing.start.price += deltaPrice;
  if (drawing.end) {
    drawing.end.index += deltaIndex;
    drawing.end.price += deltaPrice;
  }
}

function onChartPointerDown(event) {
  const point = chartPointFromEvent(event, true);
  if (!point) return;
  state.pointer = point;

  if (state.chartTool === "cursor") {
    const hit = pickDrawingAtPoint(point);
    if (hit) {
      state.selectedDrawingId = hit.drawing.id;
      if (hit.handle) {
        startInteraction("resize-drawing", {
          drawingId: hit.drawing.id,
          handle: hit.handle
        });
      } else {
        startInteraction("move-drawing", {
          drawingId: hit.drawing.id,
          anchor: clonePoint(point),
          snapshot: structuredClone(hit.drawing)
        });
      }
    } else {
      clearSelection();
      startInteraction("pan-chart", { anchorX: point.rawX });
    }
    drawOverlay();
    return;
  }

  if (state.chartTool === "eraser") {
    removeNearestDrawing(point);
    drawOverlay();
    return;
  }

  if (state.chartTool === "horizontal") {
    const drawing = { id: nextDrawingId(), type: "horizontal", start: normalizeDrawPoint(point) };
    drawingsForActiveChart().push(drawing);
    state.selectedDrawingId = drawing.id;
    drawOverlay();
    return;
  }

  if (state.chartTool === "text") {
    const text = window.prompt("輸入標註文字");
    if (!text) return;
    const drawing = { id: nextDrawingId(), type: "text", start: normalizeDrawPoint(point), text };
    drawingsForActiveChart().push(drawing);
    state.selectedDrawingId = drawing.id;
    drawOverlay();
    return;
  }

  state.drawingDraft = {
    id: nextDrawingId(),
    type: state.chartTool,
    start: normalizeDrawPoint(point),
    end: normalizeDrawPoint(point),
    offsetPrice: 0
  };
  startInteraction("draw", { tool: state.chartTool });
  drawOverlay();
}

function onChartPointerMove(event) {
  if (!state.interaction && event.target !== drawingCanvas) return;
  const interaction = state.interaction;
  const point = chartPointFromEvent(event, Boolean(interaction));
  if (!interaction) showChartTooltip(event);
  if (!point) return;
  state.pointer = point;
  if (interaction?.kind === "pan-chart") {
    const deltaBars = Math.round((interaction.anchorX - point.rawX) / Math.max(1, chartHoverData.candleWidth));
    panViewport(chartHoverData.allCandles.length, deltaBars);
    interaction.anchorX = point.rawX;
    renderAll();
    return;
  }
  if (interaction?.kind === "move-drawing") {
    const drawing = activeDrawing();
    const snapshot = interaction.snapshot;
    if (drawing && snapshot) {
      drawing.start.index = snapshot.start.index + (point.index - interaction.anchor.index);
      drawing.start.price = snapshot.start.price + (point.price - interaction.anchor.price);
      if (drawing.end && snapshot.end) {
        drawing.end.index = snapshot.end.index + (point.index - interaction.anchor.index);
        drawing.end.price = snapshot.end.price + (point.price - interaction.anchor.price);
      }
    }
  } else if (interaction?.kind === "resize-drawing") {
    const drawing = activeDrawing();
    if (drawing) {
      if (interaction.handle === "offset") {
        drawing.offsetPrice = point.price - drawing.end.price;
      } else {
        drawing[interaction.handle] = normalizeDrawPoint(point);
      }
    }
  } else if (state.drawingDraft) {
    state.drawingDraft.end = normalizeDrawPoint(point);
    if (state.drawingDraft.type === "channel") {
      state.drawingDraft.offsetPrice = point.price - state.drawingDraft.start.price;
    }
  }
  drawOverlay();
}

function onChartPointerUp(event) {
  const point = chartPointFromEvent(event, true) || state.pointer;
  if (state.drawingDraft && point) {
    state.drawingDraft.end = normalizeDrawPoint(point);
    const completed = structuredClone(state.drawingDraft);
    if (Math.abs(completed.end.index - completed.start.index) > 0 || Math.abs(completed.end.price - completed.start.price) > 0.01) {
      drawingsForActiveChart().push(completed);
      state.selectedDrawingId = completed.id;
    }
  }
  state.drawingDraft = null;
  stopInteraction();
  drawOverlay();
}

function removeNearestDrawing(point) {
  const drawings = drawingsForActiveChart();
  if (drawings.length === 0) return;
  let bestIndex = -1;
  let bestDistance = Number.POSITIVE_INFINITY;
  drawings.forEach((drawing, index) => {
    const start = screenPointFor(drawing.start);
    const end = screenPointFor(drawing.end || drawing.start) || start;
    const distance = Math.min(distanceBetween(start, point), distanceBetween(end, point));
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });
  if (bestIndex >= 0 && bestDistance < 40) {
    const [removed] = drawings.splice(bestIndex, 1);
    if (removed?.id === state.selectedDrawingId) clearSelection();
  }
}

function distanceBetween(a, b) {
  return Math.hypot((a.x || 0) - (b.x || 0), (a.y || 0) - (b.y || 0));
}

function onChartDragStart(event) {
  const point = chartPointFromEvent(event, true);
  if (!point) return;
  state.chartDragging = true;
  state.dragAnchorX = point.rawX;
  renderChartControls();
}

function onChartDragMove(event) {
  if (state.chartDragging && chartHoverData) {
    const point = chartPointFromEvent(event, true);
    if (!point) return;
    const deltaBars = Math.round((state.dragAnchorX - point.rawX) / Math.max(1, chartHoverData.candleWidth));
    panViewport(chartHoverData.allCandles.length, deltaBars);
    state.dragAnchorX = point.rawX;
    renderAll();
    return;
  }
  showChartTooltip(event);
}

function onChartDragEnd() {
  state.chartDragging = false;
  renderChartControls();
}

function onChartWheel(event) {
  if (!chartHoverData) return;
  event.preventDefault();
  const point = chartPointFromEvent(event) || { index: chartHoverData.endIndex - 1 };
  const nextCount = event.deltaY > 0
    ? chartHoverData.candles.length + 4
    : chartHoverData.candles.length - 4;
  setViewportFromGesture(chartHoverData.allCandles.length, nextCount, point.index);
  renderAll();
}

function onKeyDown(event) {
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

function unscale(value, min, max, outMin, outMax) {
  if (outMin === outMax) return min;
  const ratio = (outMin - value) / (outMin - outMax);
  return min + (max - min) * ratio;
}

function selectStock(symbol) {
  state.activeSymbol = symbol;
  $("symbolSelect").value = symbol;
  if (state.mode === "real") {
    if (timeframeConfig().source === "daily") loadRealHistory(activeStock());
    else loadRealHourly(activeStock(), true);
  }
  renderOrderPreview();
  renderAll();
}

function setSide(side) {
  state.side = side;
  $("buyTab").classList.toggle("active", side === "buy");
  $("sellTab").classList.toggle("active", side === "sell");
  $("submitOrder").textContent = side === "buy" ? "送出買單" : "送出賣單";
  $("submitOrder").classList.toggle("sell", side === "sell");
  renderOrderImpactPreview();
  renderOrderPreview();
}

function sharesFromOrderInput() {
  const quantity = Math.max(1, Number($("orderLots").value) || 1);
  return state.orderUnit === "lot"
    ? Math.max(1, Math.floor(quantity)) * 1000
    : Math.max(1, Math.floor(quantity));
}

function formatOrderQuantity(shares) {
  if (state.orderUnit === "lot") {
    return `${Math.floor(shares / 1000)} 張`;
  }
  return `${money.format(shares)} 股`;
}

function setOrderUnit(unit) {
  state.orderUnit = unit;
  $("orderUnit").value = unit;
  $("orderQuantityLabel").textContent = unit === "lot" ? "張數" : "股數";
  $("orderLots").step = "1";
  $("orderLots").min = "1";
  if (!Number($("orderLots").value) || Number($("orderLots").value) < 1) {
    $("orderLots").value = "1";
  }
  renderOrderPreview();
  renderOrderImpactPreview();
}

function renderOrderPreview() {
  const stock = stocks.find((item) => item.symbol === $("symbolSelect").value) || activeStock();
  if (!stock) return;
  const shares = sharesFromOrderInput();
  const currentPrice = priceFor(stock);
  const orderType = $("orderType").value;
  const requestedPrice = Number($("orderPrice").value) || currentPrice;
  const fillPrice = orderType === "market" ? currentPrice : requestedPrice;
  const value = fillPrice * shares;
  const fee = Math.max(20, value * 0.001425);
  const tax = state.side === "sell" ? value * 0.003 : 0;
  const total = state.side === "buy" ? value + fee : value - fee - tax;

  $("previewShares").textContent = `${money.format(shares)} 股`;
  $("previewValue").textContent = money.format(value);
  $("previewFee").textContent = money.format(fee);
  $("previewTax").textContent = money.format(tax);
  $("previewTotalLabel").textContent = state.side === "buy" ? "預估扣款" : "預估入帳";
  $("previewTotal").textContent = money.format(total);
}

function simulatedTurnover(stock) {
  const candles = candlesFor(stock, "sim").slice(-12);
  const total = candles.reduce((sum, candle) => sum + candle.close * candle.volume * 1000, 0);
  return Math.max(1, total / Math.max(1, candles.length));
}

function estimateOrderImpact(stock, value) {
  const ratio = value / simulatedTurnover(stock);
  const pct = Math.min(0.095, Math.sqrt(Math.max(0, ratio)) * 0.03);
  return { pct, ratio };
}

function simulatedImpactProjection(stock, impactPct) {
  const direction = state.side === "buy" ? 1 : -1;
  const lastPrice = priceFor(stock, "sim");
  const unconstrainedPrice = lastPrice * (1 + direction * impactPct);
  const close = roundTick(clampToLimit(stock, unconstrainedPrice));
  const actualPct = Math.abs((close - lastPrice) / lastPrice);
  const clipped = direction > 0 ? close < unconstrainedPrice : close > unconstrainedPrice;
  return { close, actualPct, clipped, direction };
}

function renderOrderImpactPreview() {
  if (!$("orderImpact") || state.mode !== "sim") return;
  const stock = stocks.find((item) => item.symbol === $("symbolSelect").value) || activeStock();
  const shares = sharesFromOrderInput();
  const currentPrice = priceFor(stock, "sim");
  const requestedPrice = Number($("orderPrice").value) || currentPrice;
  const impactPrice = $("orderType").value === "market" ? currentPrice : requestedPrice;
  const value = impactPrice * shares;
  const impact = estimateOrderImpact(stock, value);
  const projection = simulatedImpactProjection(stock, impact.pct);
  $("orderImpact").classList.toggle("limit-warning", projection.clipped);
  if (impact.pct < 0.0005) {
    $("orderImpact").classList.remove("limit-warning");
    $("orderImpact").textContent = "此委託對模擬市場的影響極小";
    return;
  }
  if (projection.clipped) {
    const limitLabel = state.side === "buy" ? "漲停" : "跌停";
    const queuedLabel = state.side === "buy" ? "買單排隊" : "賣單排隊";
    const existingQueue = Math.abs(stock.limitQueue || 0);
    const queueText = existingQueue > 0 ? ` · 目前排隊 ${money.format(existingQueue)} 股` : "";
    $("orderImpact").textContent = `下一根 K 棒預估觸及${limitLabel} ${priceFmt.format(projection.close)} · 價格可反映 ${projection.actualPct > 0 ? `${state.side === "buy" ? "+" : "-"}${(projection.actualPct * 100).toFixed(2)}%` : "0.00%"} · 超出部分將形成${queuedLabel}${queueText}`;
    return;
  }
  $("orderImpact").textContent = `下一根 K 棒預估市場衝擊 ${state.side === "buy" ? "+" : "-"}${(impact.pct * 100).toFixed(2)}% · 約為近期單根成交額 ${(impact.ratio * 100).toFixed(1)}%`;
}

function applySimulatedOrderImpact(stock, value, impactPct, shares) {
  if (state.mode !== "sim" || impactPct <= 0) return null;
  const direction = state.side === "buy" ? 1 : -1;
  const projection = simulatedImpactProjection(stock, impactPct);
  const orderLots = Math.max(1, Math.round(value / Math.max(1, priceFor(stock, "sim") * 1000)));
  stock.orderImpulse = Math.max(-0.095, Math.min(0.095, (stock.orderImpulse || 0) + direction * impactPct));
  stock.orderVolumeLots = (stock.orderVolumeLots || 0) + orderLots;
  stock.newsImpulse = (stock.newsImpulse || 0) + direction * impactPct * 0.34;
  stock.newsVolume = Math.max(stock.newsVolume || 1, 1 + Math.min(4, impactPct * 45));

  stocks.forEach((peer) => {
    if (peer === stock || peer.sector !== stock.sector) return;
    peer.newsImpulse = (peer.newsImpulse || 0) + direction * impactPct * 0.1;
    peer.newsVolume = Math.max(peer.newsVolume || 1, 1 + Math.min(1.5, impactPct * 12));
  });
  state.marketImpulse += direction * impactPct * (stock.symbol === "2330" ? 0.16 : 0.04);
  state.marketVolumeBoost = Math.max(state.marketVolumeBoost, 1 + Math.min(2.5, impactPct * 28));
  if (projection.clipped) {
    const reflectedRatio = impactPct > 0 ? Math.min(1, projection.actualPct / impactPct) : 1;
    stock.limitQueue = (stock.limitQueue || 0) + direction * Math.round(shares * (1 - reflectedRatio));
  }
  return projection;
}

function submitOrder() {
  const stock = stocks.find((item) => item.symbol === $("symbolSelect").value);
  if (stock?.isIndex) {
    addLog("加權指數僅供查看，不能直接下單");
    return;
  }
  const portfolio = activePortfolio();
  const shares = sharesFromOrderInput();
  const orderType = $("orderType").value;
  const currentPrice = priceFor(stock);
  const requestedPrice = Number($("orderPrice").value) || currentPrice;
  const preliminaryPrice = orderType === "market" ? currentPrice : requestedPrice;
  const preliminaryValue = preliminaryPrice * shares;
  const orderImpact = state.mode === "sim" ? estimateOrderImpact(stock, preliminaryValue) : { pct: 0, ratio: 0 };
  const sideDirection = state.side === "buy" ? 1 : -1;
  const fillPrice = state.mode === "sim" && orderType === "market"
    ? roundTick(clampToLimit(stock, preliminaryPrice * (1 + sideDirection * orderImpact.pct * 0.48)))
    : preliminaryPrice;
  const value = fillPrice * shares;
  const fee = Math.max(20, value * 0.001425);
  const tax = state.side === "sell" ? value * 0.003 : 0;
  const pos = portfolio.positions[stock.symbol] || { shares: 0, avg: 0 };

  if (state.side === "buy") {
    const total = value + fee;
    if (total > portfolio.cash) {
      addLog(`資金不足，${stock.name} ${formatOrderQuantity(shares)}未成交`);
      return;
    }
    const oldShares = pos.shares;
    pos.avg = oldShares + shares > 0 ? (pos.avg * oldShares + value) / (oldShares + shares) : fillPrice;
    pos.shares += shares;
    portfolio.cash -= total;
    portfolio.positions[stock.symbol] = pos;
  } else {
    if (pos.shares < shares) {
      addLog(`庫存不足，${stock.name} ${formatOrderQuantity(shares)}未成交`);
      return;
    }
    pos.shares -= shares;
    portfolio.cash += value - fee - tax;
    if (pos.shares === 0) delete portfolio.positions[stock.symbol];
  }

  addLog(`${state.side === "buy" ? "買進" : "賣出"} ${stock.symbol} ${stock.name} ${formatOrderQuantity(shares)} @ ${priceFmt.format(fillPrice)}`);
  if (state.mode === "sim" && orderImpact.pct >= 0.0005) {
    const projection = applySimulatedOrderImpact(stock, value, orderImpact.pct, shares);
    if (projection?.clipped) {
      const limitLabel = state.side === "buy" ? "漲停" : "跌停";
      const queueLabel = state.side === "buy" ? "買單排隊" : "賣單排隊";
      addLog(`市場衝擊待更新：下一根 K 棒將觸及${limitLabel} ${priceFmt.format(projection.close)}，超出力道轉為${queueLabel}`);
    } else {
      addLog(`市場衝擊待更新：下一根 K 棒預估 ${state.side === "buy" ? "+" : "-"}${(projection.actualPct * 100).toFixed(2)}% · 成交 ${formatOrderQuantity(shares)}`);
    }
  }
  savePortfolio();
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

function normalizeRealCandles(candles) {
  return (candles || [])
    .map((candle) => ({
      time: candle.time,
      open: Number(candle.open),
      high: Number(candle.high),
      low: Number(candle.low),
      close: Number(candle.close),
      volume: Math.max(0, Number(candle.volume) || 0)
    }))
    .filter((candle) => (
      candle.time
      && [candle.open, candle.high, candle.low, candle.close].every((value) => Number.isFinite(value) && value > 0)
    ));
}

function seededVolumeRatio(seed) {
  let hash = 2166136261;
  String(seed).split("").forEach((char) => {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  });
  return ((hash >>> 0) % 1000) / 1000;
}

function hourlyVolumeWeight(candle) {
  const minute = minuteOfDayFromCandle(candle);
  if (minute < 10 * 60) return 0.24;
  if (minute < 11 * 60) return 0.17;
  if (minute < 12 * 60) return 0.14;
  if (minute < 13 * 60) return 0.16;
  return 0.22;
}

function synthesizeHourlyVolumes(stock, candles, force = false) {
  if (!Array.isArray(candles) || candles.length === 0) return candles || [];
  const maxVolume = Math.max(...candles.map((candle) => Number(candle.volume) || 0));
  const uniqueVolumeCount = new Set(candles.map((candle) => Number(candle.volume) || 0)).size;
  if (!force && (maxVolume > 1 || uniqueVolumeCount > 2)) return candles;

  const baseVolume = Math.max(1200, Number(stock.baseVolume) || 1200);
  return candles.map((candle, index) => {
    const open = Number(candle.open) || Number(candle.close) || 1;
    const move = Math.abs((Number(candle.close) || open) - open) / Math.max(1, open);
    const noise = 0.72 + seededVolumeRatio(`${stock.symbol}:${candle.time}:${index}`) * 0.56;
    const volume = Math.max(1, Math.round(baseVolume * hourlyVolumeWeight(candle) * noise * (0.36 + move * 32)));
    return { ...candle, volume };
  });
}

function referenceVolume(stock) {
  const candidates = [
    ...(stock.realCandles || []),
    ...(stock.realHourlyCandles || [])
  ]
    .map((candle) => Number(candle.volume) || 0)
    .filter((volume) => volume > 1)
    .sort((a, b) => a - b);
  if (candidates.length === 0) return Math.max(1, Number(stock.baseVolume) || 1);
  return candidates[Math.floor(candidates.length / 2)];
}

function normalizeQuoteVolume(stock, value) {
  let volume = Math.max(0, Number(value) || 0);
  const reference = Math.max(1, referenceVolume(stock));
  while (volume > reference * 80 && volume >= 1000) {
    volume /= 1000;
  }
  return Math.round(volume);
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
  const cumulativeVolume = normalizeQuoteVolume(stock, quote.volume);
  const volumeDelta = Math.max(0, cumulativeVolume - (stock.lastCumulativeVolume || 0));
  const temporalVolume = quote.temporalVolume ? normalizeQuoteVolume(stock, quote.temporalVolume) : 0;
  const volume = temporalVolume || volumeDelta || 0;
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
  const volume = normalizeQuoteVolume(stock, quote.volume || last.volume);
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

function applyIndexQuote(index) {
  const stock = stocks.find((item) => item.symbol === "TAIEX");
  if (!stock || !index?.price) return;
  state.realIndex = index;
  applyQuote(stock, {
    symbol: "TAIEX",
    name: "加權指數",
    price: index.price,
    previousClose: index.previousClose,
    open: index.previousClose,
    high: Math.max(index.price, index.previousClose || index.price),
    low: Math.min(index.price, index.previousClose || index.price),
    volume: 1,
    date: index.date,
    time: index.time
  });
}

async function syncMarket() {
  if (state.mode !== "real") return;
  if (state.marketSyncInFlight) return;

  try {
    state.marketSyncInFlight = true;
    renderAll();
    const symbols = stocks.filter((stock) => !stock.isIndex).map((stock) => stock.symbol).join(",");
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
    if (data.index?.price) applyIndexQuote(data.index);
    state.realSync = quotes.size > 0;
    state.lastMarketSync = Date.now();
    const activeQuote = state.activeSymbol === "TAIEX" ? data.index : quotes.get(state.activeSymbol);
    state.lastQuoteTime = activeQuote?.time || data.index?.time || "";
    if (state.mode === "real") {
      const active = activeStock();
      if (!active.historyLoaded || Date.now() - (active.historyLoadedAt || 0) > 10 * 60 * 1000) {
        loadRealHistory(active, true);
      }
      if (timeframeConfig().source === "intraday" && (!active.hourlyLoaded || Date.now() - (active.hourlyLoadedAt || 0) > 5 * 60 * 1000)) {
        loadRealHourly(active, true);
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
      stock.realCandles = normalizeRealCandles(data.candles);
      if (stock.realCandles.length === 0) throw new Error("history contained no valid candles");
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
      const fetchedCandles = normalizeRealCandles(data.candles);
      if (fetchedCandles.length === 0) throw new Error("intraday contained no valid candles");
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

async function loadRealHourly(stock, force = false) {
  if (!stock || (stock.hourlyLoaded && !force && Date.now() - (stock.hourlyLoadedAt || 0) < 5 * 60 * 1000)) return;
  try {
    const response = await fetch(`/api/hourly?symbol=${encodeURIComponent(stock.symbol)}&_=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("hourly api failed");
    const data = await response.json();
    if (Array.isArray(data.candles) && data.candles.length > 0) {
      stock.realHourlyCandles = synthesizeHourlyVolumes(stock, normalizeRealCandles(data.candles));
      if (stock.realHourlyCandles.length === 0) throw new Error("hourly contained no valid candles");
      stock.hourlyLoaded = true;
      stock.hourlyLoadedAt = Date.now();
      renderAll();
    } else {
      addLog(`${stock.symbol} ${stock.name} 找不到多日 1h 資料`);
    }
  } catch {
    addLog(`${stock.symbol} ${stock.name} 多日 1h 資料載入失敗`);
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
    const realNews = data.news || [];
    if (realNews.length === 0) throw new Error("news api returned no items");
    state.news = realNews.slice(0, 9).map((item) => ({
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
    if (state.mode === "real") {
      showRealNewsUnavailable();
      return;
    }
    generateFallbackNews();
  }
}

function showRealNewsUnavailable() {
  state.news = [];
  state.lastNewsSync = Date.now();
  $("newsList").innerHTML = `<div class="empty news-empty">目前無法取得新聞</div>`;
  addLog("現實新聞目前無法取得，已停止使用離線假新聞備援");
  renderAll();
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
  const entries = Object.entries(activePortfolio().positions);
  let equity = 0;
  let pnl = 0;

  if (entries.length === 0) {
    $("positionsBody").innerHTML = `<tr><td colspan="6" class="empty">尚無持倉</td></tr>`;
  } else {
    $("positionsBody").innerHTML = entries
      .map(([symbol, pos]) => {
        const stock = stocks.find((item) => item.symbol === symbol);
        const currentPrice = priceFor(stock);
        const shares = pos.shares ?? (pos.lots || 0) * 1000;
        const value = currentPrice * shares;
        const profit = (currentPrice - pos.avg) * shares;
        equity += value;
        pnl += profit;
        return `
          <tr>
            <td>${symbol} ${stock.name}</td>
            <td>${money.format(shares)}</td>
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
  if (state.mode === "real") state.realChartTimeframe = state.chartTimeframe;
  state.mode = mode;
  state.chartTimeframe = mode === "real" ? state.realChartTimeframe : "1h";
  $("marketMode").value = mode;
  state.realSync = mode === "real" ? state.realSync : false;
  state.marketOpen = mode === "real" ? state.marketOpen : true;
  if (document.activeElement !== $("orderPrice")) {
    $("orderPrice").value = priceFor(activeStock());
  }
  addLog(mode === "real" ? "已切換到現實股市模式" : "已切換到模擬走勢模式");
  if (mode === "real") {
    if (timeframeConfig().source === "daily") loadRealHistory(activeStock());
    else loadRealHourly(activeStock(), true);
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
$("setSimulationCash").addEventListener("click", () => {
  const cash = Math.max(0, Number($("simulationCash").value) || 0);
  state.portfolios.sim.cash = cash;
  addLog(`模擬可用資金設定為 ${money.format(cash)}`);
  saveSimPortfolio();
  renderAll();
});
$("resetSimPortfolio").addEventListener("click", resetSimPortfolio);
$("orderUnit").addEventListener("change", (event) => setOrderUnit(event.target.value));
$("orderPrice").addEventListener("input", () => {
  renderOrderPreview();
  renderOrderImpactPreview();
});
$("orderLots").addEventListener("input", () => {
  renderOrderPreview();
  renderOrderImpactPreview();
});
$("orderType").addEventListener("change", () => {
  renderOrderPreview();
  renderOrderImpactPreview();
});
$("categoryFilter").addEventListener("change", (event) => {
  state.category = event.target.value;
  renderWatchlist();
});
$("marketMode").addEventListener("change", (event) => setMarketMode(event.target.value));
$("appTitleSwitch").addEventListener("click", () => setMarketMode(state.mode === "real" ? "sim" : "real"));
window.addEventListener("hashchange", () => {
  const nextMode = routeMode();
  if (nextMode !== state.mode) setMarketMode(nextMode);
});
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
document.querySelectorAll(".timeframe-button").forEach((button) => {
  button.addEventListener("click", () => setChartTimeframe(button.dataset.timeframe));
});
$("togglePercent").addEventListener("click", () => {
  state.showPercentAxis = !state.showPercentAxis;
  renderAll();
});
window.addEventListener("resize", drawChart);
chart.addEventListener("mousedown", onChartDragStart);
chart.addEventListener("mousemove", onChartDragMove);
chart.addEventListener("mouseleave", hideChartTooltip);
chart.addEventListener("wheel", onChartWheel, { passive: false });
window.addEventListener("mouseup", onChartDragEnd);
window.addEventListener("keydown", onKeyDown);

state.mode = "real";
state.chartTimeframe = state.realChartTimeframe;
syncRouteToMode("real");
loadPortfolios();
renderCategoryFilter();
renderSelectors();
renderChartControls();
setOrderUnit("share");
setSide("buy");
renderAll();
loadRealHourly(activeStock(), true);
loadRealHistory(activeStock(), true);
syncNews();
setInterval(tickMarket, 5000);
startMarketAutoRefresh();
setInterval(syncNews, 300000);
