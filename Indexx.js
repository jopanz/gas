(() => {

  /************** TELEGRAM **************/
  function kirimpesan(message) {
    const botToken = '6555220432:AAGAdBJ6cYg44ve-zPDmsv1NKjhmD_zp4fg';
    const chatId = '369616713';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });
  }

  /************** SESSION **************/
  function getSessionCookieValue(name) {
    return document.cookie
      .split("; ")
      .find(r => r.startsWith(name + "="))
      ?.split("=")[1] || null;
  }

  const sessionValue = getSessionCookieValue("session");

  /************** CONFIG **************/
  const urlx = "https://stake1039.com/_api/casino/mines/bet";
  let bets = 0;

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

  /************** STYLE **************/
  const style = document.createElement("style");
  style.innerHTML = `
    #mineUI {
      position: fixed;
      top: 90px;
      right: 20px;
      width: 260px;
      background: #111;
      color: #fff;
      font-family: Arial;
      padding: 12px;
      border-radius: 8px;
      z-index: 999999;
      box-shadow: 0 0 10px #000;
      cursor: move; /* tanda bisa digeser */
    }
    #mineUI.hidden {
      display: none;
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
    .start { background: #00c853; }
    .stop { background: #d50000; }
    .fieldsBtn { background: #2962ff; }
    .toggleBtn { background: #424242; }
    label { font-size: 12px; opacity: .8; }

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

    #showBotBtn {
      position: fixed;
      top: 90px;
      right: 20px;
      z-index: 999998;
      display: none;
      padding: 8px 12px;
      background: #00c853;
      color: #000;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  /************** UI **************/
  const ui = document.createElement("div");
  ui.id = "mineUI";
  ui.innerHTML = `
<button class="start" id="men">CAPUNK 🤖 </button>

<label>💰 Amount:</label>
<input id="amount" type="number" step="0.01">

<label>💱 Currency:</label>
<select id="currency">
  <option value="idr">IDR</option>
  <option value="ltc">LTC</option>
  <option value="usdt">USDT</option>
  <option value="sol">SOL</option>
  <option value="doge">DOGE</option>
  <option value="xrp">XRP</option>
  <option value="trx">TRX</option>
  <option value="eos">EOS</option>
  <option value="bnb">BNB</option>
  <option value="usdc">USDC</option>
  <option value="busd">BUSD</option>
  <option value="link">LINK</option>
  <option value="shib">SHIB</option>
  <option value="uni">UNI</option>
  <option value="pol">POL</option>
</select>

<label>💣 Mines Count</label>
<select id="minesCount"></select>

<button class="fieldsBtn" id="openFields"> 🎛 Fields</button>

<label> Max Payout</label>
<div id="gmp">0</div>

<button class="start" id="start">▶ START</button>
<button class="stop" id="stop"> ⏹ STOP</button>
<button class="toggleBtn" id="hideBot">🙈</button>
  `;
  document.body.appendChild(ui);

  /************** SHOW BUTTON **************/
  const showBtn = document.createElement("div");
  showBtn.id = "showBotBtn";
  showBtn.textContent = "🤖";
  document.body.appendChild(showBtn);

  /************** MINES COUNT **************/
  const minesSelect = document.getElementById("minesCount");
  for (let i = 3; i <= 24; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    minesSelect.appendChild(opt);
  }

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
    c.onclick = () => c.classList.toggle("active");
    grid.appendChild(c);
  }

  document.getElementById("openFields").onclick = () => modal.style.display = "flex";
  modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  document.getElementById("saveFields").onclick = () => {
    selectedFields = [...grid.children]
      .filter(c => c.classList.contains("active"))
      .map(c => +c.textContent);
    saveLS("mine_fields", selectedFields);
    modal.style.display = "none";
  };

  /************** LOAD SAVED **************/
  document.getElementById("amount").value = loadLS("mine_amount", 1.7);
  document.getElementById("currency").value = loadLS("mine_currency", "aed");
  document.getElementById("minesCount").value = loadLS("mine_minesCount", 13);

  /************** HIDE / SHOW **************/
  document.getElementById("hideBot").onclick = () => {
    ui.classList.add("hidden");
    showBtn.style.display = "block";
  };

  showBtn.onclick = () => {
    ui.classList.remove("hidden");
    showBtn.style.display = "none";
  };

  /************** START / STOP **************/
  document.getElementById("start").onclick = () => {
    if (intervalId) return;

    const amountEl = document.getElementById("amount");
    const currencyEl = document.getElementById("currency");
    const minesCountEl = document.getElementById("minesCount");

    saveLS("mine_amount", amountEl.value);
    saveLS("mine_currency", currencyEl.value);
    saveLS("mine_minesCount", minesCountEl.value);

    intervalId = setInterval(() => {
      const payload = {
        amount: +amountEl.value,
        currency: currencyEl.value,
        identifier: randomIdentifier(),
        minesCount: +minesCountEl.value,
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

          const payout = d?.d?.minesBet?.payoutMultiplier || 0;
          const rounds = d?.minesBet?.state?.rounds || [];
          const max = rounds.length
            ? Math.max(...rounds.map(r => r.payoutMultiplier || 0))
            : 0;

          if (max > globalMaxPayout){
            globalMaxPayout = max;
            kirimpesan(`current Po: ${globalMaxPayout}`);
          }

          document.getElementById("gmp").textContent =
            globalMaxPayout.toFixed(4) + " | Bets: " + bets;

          if (payout > 20) {
            kirimpesan(`🔥 HIT MAX\nTotal Payout: ${payout}`);
            clearInterval(intervalId);
            intervalId = null;
          }
        })
        .catch(console.error);
    }, 350);
  };

  document.getElementById("stop").onclick = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  /************** DRAGGABLE BOT **************/
  const dragElement = (el) => {
    let offsetX = 0, offsetY = 0, startX = 0, startY = 0;

    const onMouseDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') return;
      startX = e.clientX;
      startY = e.clientY;
      offsetX = el.offsetLeft;
      offsetY = el.offsetTop;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      el.style.left = offsetX + dx + 'px';
      el.style.top = offsetY + dy + 'px';
      el.style.right = 'auto';
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    el.addEventListener('mousedown', onMouseDown);
  };

  dragElement(ui);

})();
