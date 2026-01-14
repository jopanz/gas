(() => {
function kirimpesan(message) {
  const botToken = '6555220432:AAGAdBJ6cYg44ve-zPDmsv1NKjhmD_zp4fg';
  const chatId = '369616713';

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });
}

    function getSessionCookieValue(name) {
  return document.cookie
    .split("; ")
    .find(r => r.startsWith(name + "="))
    ?.split("=")[1] || null;
}

var sessionValue = getSessionCookieValue("session");

  /************** CONFIG **************/
  const urlx = "https://stake1039.com/_api/casino/mines/bet";
let bets=0;
  const headers = {
    "accept": "*/*",
    "content-type": "application/json",
    "x-access-token": sessionValue
     
  };

  let intervalId = null;
  let globalMaxPayout = 0;

  /************** UTILS **************/
  function randomIdentifier() {
    const length = Math.floor(Math.random() * (32 - 20 + 1)) + 20;
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
  }

  function saveLS(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  function loadLS(key, def) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? def;
    } catch {
      return def;
    }
  }

  /************** UI **************/
  const style = document.createElement("style");
  style.innerHTML = `
    #mineUI {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 260px;
      background: #111;
      color: #fff;
      font-family: Arial;
      padding: 12px;
      border-radius: 8px;
      z-index: 999999;
      box-shadow: 0 0 10px #000;
    }
    #mineUI input, #mineUI select, #mineUI button {
      width: 100%;
      margin: 4px 0;
      padding: 6px;
      border-radius: 4px;
      border: none;
    }
    #mineUI button {
      cursor: pointer;
      font-weight: bold;
    }
    #mineUI .start { background: #00c853; }
    #mineUI .stop { background: #d50000; }
    #mineUI .fieldsBtn { background: #2962ff; }
    #mineUI label { font-size: 12px; opacity: 0.8; }
    #fieldsModal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.7);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000000;
    }
    #fieldsBox {
      background: #111;
      padding: 15px;
      border-radius: 8px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(5, 40px);
      gap: 6px;
    }
    .cell {
      width: 40px;
      height: 40px;
      background: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
    }
    .cell.active {
      background: #00c853;
      color: #000;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  const ui = document.createElement("div");
  ui.id = "mineUI";
  ui.innerHTML = `
    <label>Amount</label>
    <input id="amount" type="number" step="0.01">

    <label>Currency</label>
   <select id="currency" >
    <option value="aed">aed</option>
    <option value="ape">ape</option>
    <option value="ars">ars</option>
    <option value="bch">bch</option>
    <option value="bdt">bdt</option>
    <option value="bhd">bhd</option>
    <option value="bnb">bnb</option>
    <option value="bob">bob</option>
    <option value="brl">brl</option>
    <option value="btc">btc</option>
    <option value="busd">busd</option>
    <option value="cad">cad</option>
    <option value="clp">clp</option>
    <option value="crc">crc</option>
    <option value="cro">cro</option>
    <option value="dai">dai</option>
    <option value="dkk">dkk</option>
    <option value="doge">doge</option>
    <option value="egp">egp</option>
    <option value="eos">eos</option>
    <option value="eth">eth</option>
    <option value="eur">eur</option>
    <option value="ghs">ghs</option>
    <option value="gold">gold</option>
    <option value="gtq">gtq</option>
    <option value="huf">huf</option>
    <option value="idr">idr</option>
    <option value="ils">ils</option>
    <option value="inr">inr</option>
    <option value="jod">jod</option>
    <option value="jpy">jpy</option>
    <option value="kes">kes</option>
    <option value="khr">khr</option>
    <option value="krw">krw</option>
    <option value="kwd">kwd</option>
    <option value="kzt">kzt</option>
    <option value="link">link</option>
    <option value="ltc">ltc</option>
    <option value="mad">mad</option>
    <option value="pol">pol</option>
    <option value="mwk">mwk</option>
    <option value="mxn">mxn</option>
    <option value="myr">myr</option>
    <option value="ngn">ngn</option>
    <option value="nok">nok</option>
    <option value="nzd">nzd</option>
    <option value="omr">omr</option>
    <option value="pen">pen</option>
    <option value="pkr">pkr</option>
    <option value="pln">pln</option>
    <option value="qar">qar</option>
    <option value="rwf">rwf</option>
    <option value="sand">sand</option>
    <option value="sar">sar</option>
    <option value="sgd">sgd</option>
    <option value="shib">shib</option>
    <option value="sol">sol</option>
    <option value="sweeps">sweeps</option>
    <option value="thb">thb</option>
    <option value="tnd">tnd</option>
    <option value="trump">trump</option>
    <option value="trx">trx</option>
    <option value="try">try</option>
    <option value="twd">twd</option>
    <option value="tzs">tzs</option>
    <option value="ugx">ugx</option>
    <option value="uni">uni</option>
    <option value="usd">usd</option>
    <option value="usdc">usdc</option>
    <option value="usdt">usdt</option>
    <option value="uzs">uzs</option>
    <option value="vnd">vnd</option>
    <option value="xaf">xaf</option>
    <option value="xof">xof</option>
    <option value="xrp">xrp</option>
    <option value="zar">zar</option>
    <option value="zmw">zmw</option>
</select>


    <button class="fieldsBtn" id="openFields">Fields (5x5)</button>

    <label>Global Max Payout</label>
    <div id="gmp">0</div>

    <button class="start" id="start">START</button>
    <button class="stop" id="stop">STOP</button>
  `;
  document.body.appendChild(ui);

  /************** FIELDS MODAL **************/
  const modal = document.createElement("div");
  modal.id = "fieldsModal";
  modal.innerHTML = `
    <div id="fieldsBox">
      <div class="grid" id="grid"></div>
      <button id="saveFields" style="margin-top:10px;width:100%">SAVE</button>
    </div>
  `;
  document.body.appendChild(modal);

  const grid = modal.querySelector("#grid");
  let selectedFields = loadLS("mine_fields", []);

  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.className = "cell";
    c.textContent = i;
    if (selectedFields.includes(i)) c.classList.add("active");
    c.onclick = () => {
      c.classList.toggle("active");
    };
    grid.appendChild(c);
  }

  document.getElementById("openFields").onclick = () => {
    modal.style.display = "flex";
  };

  modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };

  document.getElementById("saveFields").onclick = () => {
    selectedFields = [...grid.children]
      .filter(c => c.classList.contains("active"))
      .map(c => +c.textContent);
    saveLS("mine_fields", selectedFields);
    modal.style.display = "none";
  };

  /************** LOAD SAVED **************/
  document.getElementById("amount").value = loadLS("mine_amount", 1.7);
  document.getElementById("currency").value = loadLS("mine_currency", "idr");

  /************** START / STOP **************/
  document.getElementById("start").onclick = () => {
    if (intervalId) return;

    const amountEl = document.getElementById("amount");
    const currencyEl = document.getElementById("currency");

    saveLS("mine_amount", amountEl.value);
    saveLS("mine_currency", currencyEl.value);

    intervalId = setInterval(() => {
      const payload = {
        amount: +amountEl.value,
        currency: currencyEl.value,
        identifier: randomIdentifier(),
        minesCount: selectedFields.length,
        fields: selectedFields
      };

      fetch(urlx, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        credentials: "include"
      })
        .then(r => r.json())
        .then(d => {
       bets++;
            document.getElementById("gmp").textContent =
          globalMaxPayout.toFixed(4) + " | Bets: " + bets;
	const payout = d?.d?.minesBet?.payoutMultiplier;

          const rounds = d?.minesBet?.state?.rounds || [];
          const max = rounds.length
            ? Math.max(...rounds.map(r => r.payoutMultiplier || 0))
            : 0;

      if (payout > 20) {
    kirimpesan(`🔥 HIT MAX\nTotal Payout: ${payout}`);
    stopBot();
  }

          if (max > globalMaxPayout) {
            globalMaxPayout = max;
           
          }

         
        })
        .catch(console.error);
    }, 350);
  };

  document.getElementById("stop").onclick = () => {
    clearInterval(intervalId);
    intervalId = null;
  };
})();
