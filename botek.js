console.clear();
const chalk = require("chalk");
const inquirer = require("inquirer");
const EasyTable = require("easy-table");


 var 
 bearer="",
coin = "XEC",
base = 1,

nextbet = base,
chance = 1,
bethigh=true,
countAfterWins = 1,
countAfterLosses =1,
saldo=0,
basebet=base,
betset=1,
  r = '>',

hapus=0,
gaji=-1,
chat = "",
ko=0,
color="",
startTime = new Date(),
playTime = 0,
myArray = [],
playDays = 0,
playHours = 0,
playMinutes = 0,
playSeconds = 0,
dps = [],
waktu=0,
chart = "",
betsChart = 0,
profitChart = 0,
run = true,
win = true,
sOW = false,

ruha=0,
bets = 0,
wins = 0,
losses = 0,
balance = 0,
profit = 0,
wagered = 0,
maxBetAmount = 0,
currentprofit = 0,
winstreak = 0,
losestreak = 0,
currentstreak = 0,
maxwinstreak = 0,
maxlosestreak = 0,
previousbet = 0,
lastBet = {
  nonce: 0,
  id: 0,
  amount: 0,
  roll: 0,
  chance: 0,
  profit: 0,
},
p1=0,
ammount,
has,
p2=0,
lastFourElements=0,
myVar=0,
p3=0,
s1=0,
s2=0,
 lines = [],
s3=0,
limitTime = "",
token = "",
cname = "",
state = 0,
typeBalance = "",
coins = [],
cxx=0,
rh=0,
disChart = false,
hab=0,
lastroll=0,
checkBet = 0,
checkChance = 0,
countBet = 0,
countChance = 0,
afterLossesBet = 0,
afterLossesChance = 0,
balanceB = 0;

const log = console.log;
const dox = () => {
  console.log(
    chalk.hex('#59a9c1')(`
    
                           █████████████▀██████████████████████
                           █▄─▀█▄─▄█─▄▄▄▄█─▄▄─█▄─▄▄─█▄─▄█─▄─▄─█
                           ██─█▄▀─██─██▄─█─██─██─▄▄▄██─████─███
                           ▀▄▄▄▀▀▄▄▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▀▀▀▄▄▄▀▀▄▄▄▀▀
 `),
  );
}
dox();

const banner = () => {
  console.log(
    chalk.hex('#FFA500')(`
                               █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
                               █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
                               █░░║║║╠─║─║─║║║║║╠─░░█
                               █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
                               █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
                                    ${chalk.greenBright('Ngopitbot versi 1.0')}
 `),
  );
}
banner();


  
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(min, max) {
    return min + (max - min) * Math.random();
}

function dobet(){
	
	var v;
			var a = Number(nextbet);
			var sxb = getRndInteger(50, 700);
			var m = Number((99 / Number(chance).toFixed(2)).toFixed(4));
			bethigh = Math.random() < 0.5;
			if (bethigh == true) {
				r = '>';
				
				v = Number((99.99 - chance.toFixed(2)).toFixed(2));
				} else {
				r = '<';
				
				v = Number(chance.toFixed(2));
			}
			var Cc = Number(chance.toFixed(2));
			var t = '>';
const headers = { 
    "accept": "*/*", 
    "accept-language": "en-US,en;q=0.9,id;q=0.8", 
    "authorization": bearer,
    "content-type": "application/json", 
    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"", 
    "sec-ch-ua-mobile": "?1", 
    "sec-ch-ua-platform": "\"Android\"", 
    "sec-fetch-dest": "empty", 
    "sec-fetch-mode": "cors", 
    "sec-fetch-site": "same-origin", 
    "x-requested-with": "XMLHttpRequest", 
    "cookie": "mac=Mod; maxBetWindow=true; XSRF-TOKEN=eyJpdiI6IndGZ1Y4OU8zOTZCTmt4c3FUNHpvaEE9PSIsInZhbHVlIjoid3JMbkJ4dVhrMXNTK09nVVRtVDVweXZTeFV6YzlDZ25rWVZOSDIyK1hXVnFFcXdscmVNTHh5ZVBHdmZpY1JOeS9jN1B1T2lsMURPSU5QZG0wUm5YRHYrQXRLcU5YaTlOS3VRNmZzOVgyK2MyK2xTNEJBWVkrSVhOU1ZiU2E3Nk4iLCJtYWMiOiI1NTc1OTgzMjIzOTYxNzU4ZGViNjZlYTNkYTFkN2Y1MzBlMjBhNDUyZTY3MWU1ZDA3NDUwYzA5ZWQyMGFmYWUzIiwidGFnIjoiIn0%3D; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.WrpY18ggXgW79AUnRaz3G6m92afcPtvY52cbHQHhtS4JiTp53ltn4pHsbeBH0p6qaYJVrhH3fBsF4elwgA8OU1jCDyzHvfIbMj8ksA7WoeUF2Vpyl1BBkse9V%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674675215092%7D",
    "Referer": "https://luckydiamond.io/dice", 
    "Referrer-Policy": "strict-origin-when-cross-origin" 
  };
  
  
  
const body = "type=" + t + "&condition=" + r + "&currency=" + coin + "&auto=true&autoMore=false&actionOnWin=increase&actionOnLose=reset&amount=" + a + "&rolls-number=0&roll=" + v + "&payout=" + m + "&chance=" + Cc + "&stop-profit=100.00000000&stop-loss=0.00000000&moreOptionsSelectWin=streak&number-win=2&moreOptionsSelectLose=streak&number-lose=2&speed=" + sxb + "&betting=" + sxb + "";
       
fetch('https://luckydiamond.io/api/game/dice', { 
  headers,
  method: 'POST',
  body
})
.then(res => res.json())
.then(response => {
hapus=hapus +1;



	bets++;
	
	previousbet = Number(response.result.amount);
	profit += Number(response.result.profit);
	hab=Number(profit).toFixed(8);
	currentprofit = Number(response.result.profit);
	saldo=Number(response.result.balance).toFixed(8);
	wagered += previousbet;
	lastroll = Number(response.result.result);
	rh =response.result.rollHunt;
	ruha = response.result.id;
	ammount=Number(response.result.amount).toFixed(8);
	has=`${bethigh ? 'H' : 'L'}${Number(response.result.roll).toFixed(2)}`;
if (Number(currentprofit) >= 0) {
	
	
	
    win = true;
     wins++;
    winstreak++;
    losestreak = 0;
    currentstreak = winstreak;
    betset++;
  if (betset >= 9) {
    betset = 1;
  }
  nextbet = basebet;
    
 console.log(chalk.green(`${bethigh ? 'H' : 'L'}`) + "  " +
         chalk.green (               ` ${Number(ammount).toFixed(8)}`) + "  " +
            `${(Number(response.result.roll).toFixed(2)).toString().padStart(5, '0')}` + "  " +
                        `${(Number(response.result.result).toFixed(2)).toString().padStart(5, '0')}` + "  " +
                    ` ${ Number(currentprofit).toFixed(8) >= 0 ? chalk.green('+'+Number(currentprofit).toFixed(8)):chalk.red(Number(currentprofit).toFixed(8))}` + "  " +

            `${Number(wagered).toFixed(8)}`

);
      } else {
    win = false;
    
    losses++, losestreak++, (winstreak = 0);
    currentstreak = 0 - losestreak;
    if (betset == 1) {
    chance = 70.71;
  } else if (betset == 2) {
    chance = 54;
  } else if (betset == 3) {
    chance = 25.00;
  } else if (betset == 4) {
    chance = 19.75;
  } else if (betset == 5) {
    chance = 28.29;
  } else if (betset == 6) {
    chance = 40.24;
  } else if (betset == 7) {
    chance = 47.10;
  } else if (betset == 8) {
    chance = 66.00;
  }

  if (chance == 70.71) {
    nextbet = previousbet * 3.50;
  } else if (chance == 16.00) {
    nextbet = previousbet * 2.2;
  } else if (chance == 25.00) {
    nextbet = previousbet * 1.38;
  } else if (chance == 19.75) {
    nextbet = previousbet * 1.30;
  } else if (chance == 28.29) {
    nextbet = previousbet * 1.45;
  } else if (chance == 40.24) {
    nextbet = previousbet * 1.80;
  } else if (chance == 47.10) {
    nextbet = previousbet * 1.95;
  } else if (chance == 66.00) {
    nextbet = previousbet * 2.50;
  }
 
  console.log(chalk.red(`${bethigh ? 'H' : 'L'}`) + "  " +
                   chalk.red   (  ` ${Number(ammount).toFixed(8)}`) + "  " +
            `${(Number(response.result.roll).toFixed(2)).toString().padStart(5, '0')}` + "  " +
                        `${(Number(response.result.result).toFixed(2)).toString().padStart(5, '0')}` + "  " +
                    ` ${ Number(currentprofit).toFixed(8) >= 0 ? chalk.green('+'+Number(currentprofit).toFixed(8)):chalk.red(Number(currentprofit).toFixed(8))}` + "  " +

            `${Number(wagered).toFixed(8)}`

);


    
}

const str = ''+waktu+'  '+bets+' Roll'+'  Ball:'+Number(saldo) .toFixed (8)+' '+ response.result.currency+' P:'+(Number(profit) >= 0 ? chalk.green(hab):chalk.red(hab));
process.stdout.write(chalk.yellow(str.padEnd(1) + '\x1b[0G'));


if (Number(response.result.profit)> ko && Number(response.result.profit) >= 0){
	ko=Number(response.result.profit);
	
	
cxx=response.result.id;

chat = "b:dice:"+cxx;


	}


if(lastBet.roll==rh &&  rh>0){
				
			const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
"authorization": bearer,
   "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mac=Mod; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.JMYyGwUOT2UZqessqrbfqkeZinOnCc0X0skqOwPhjumfAMmh5Bc9gdp1kjERyvu8KF92UQYSmoI1fnsW9wbgH546WRagrWQ5XwHSmoPBySgIjBkbDzA6zeL6fOh6xeYSRtdqBZxa3WaaVSEIgm9H%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674810969224%7D; XSRF-TOKEN=eyJpdiI6IldlQyt3aXNqVDNuNGVsb1JNMlovMHc9PSIsInZhbHVlIjoiUyt6Wmduejk2dXRFV21RZlVQUWl2QXFQc2dvL2pyNlJZY1hQVzhPZzBMcDZnOGZhTXNYK3B2amxqNExwMHljcStHSjZMcGN5RDlRZHp0eXFUajhkUjc3N3hWQUNaRXpPcHQ1T28vZFZKQ29EK1JyUFpMOFFiU1A1eFoyS25PQ2UiLCJtYWMiOiJiMzE2MzE2NmMwMjY1NGMxYTk0NzM3OTljZWFlY2U3YTc3ZTM1MWExYzVlOTgwOTc4YTE1MDRhY2JhZmM5ZmY1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IndLdXBnNzcraHl2RFFnV2IzK2xDY2c9PSIsInZhbHVlIjoiTUJBaGJQMVdVaS8vblpFYnF3ZE9MOXNwaU94Z2R0V2o5WWQyQ1dRZlJuS2VsTnBUUi95RjFaN1NtdW9iTzhLbFJZbDVKYkNMM01kOWFVMlVKd1p6dVRjcG9GcTUyNzA3TExpTEpDL3J5TUpNc3VMZjQ4eHo1YmU2SDd6c2VCbWUiLCJtYWMiOiIxMGU2OGQwYmQzOWUzZTRmMmFiYjM2ZDI1Mzg1ZjY0ZjliMTc5ZjBhNmIxOGFhZGI2MzkyNzlmZTE3NDQ3ZWQ3IiwidGFnIjoiIn0%3D",

    "Referer": "https://luckydiamond.io/dice",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

const data = {
  language: 'id',
  message: 'b:dice:'+response.result.id
};

fetch("https://luckydiamond.io/api/chat/send-message", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
    
    
});

  
  
      }
	
 
 
})
.catch(error => console.log(error));


}

 
  
      
function klaim(){

fetch("https://luckydiamond.io/get-faucet-mod", {
headers: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "zb4UbkADbQ5SQssfgQMHvPZnUt3JslSmUgxn2xHX",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mac=Mod; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.JMYyGwUOT2UZqessqrbfqkeZinOnCc0X0skqOwPhjumfAMmh5Bc9gdp1kjERyvu8KF92UQYSmoI1fnsW9wbgH546WRagrWQ5XwHSmoPBySgIjBkbDzA6zeL6fOh6xeYSRtdqBZxa3WaaVSEIgm9H%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674976725594%7D; XSRF-TOKEN=eyJpdiI6ImZzdFB0KyswTHJNeTMvTTBDR1NZTUE9PSIsInZhbHVlIjoiWG1POGdyMWxJTkRnQVVNbERXVWNoVkRJc1pKNXZMKzFuMGNzbWRFRU1aNGxaUG9VWTVoZW1GWTR5UVlBRWJRNmxEV3ozSENETmtCTFJKL0pTNHB4cU5TUWF0T1dmM1ZaUlQ3cVNlM2N6TzRidkFoZlRvZ2xqcTlZemdlOVFPQisiLCJtYWMiOiJkZGE0ZjNkMzliMTNlMjljYWQ3ZDcxNWEyNjcxN2M2ZjhhMjBlY2E4NTc3YTQ0OWI4MWU5YjVlNjg4M2UwMzI0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IkFOSCt6OVFPK0w3MzdKd1BiQlExNWc9PSIsInZhbHVlIjoialJpQndoaElnQ1UrdllyZEhUeEJmNkdDc3BYRDhUVXF2dkFselAzNmVOTWx1RnArVmJYbUZtSk9yTHZ1WVd6WlFhaUFaRDVwbHBYb3Qram1OUGhvbE9iZkVXcFJiSHczR29ROXJBNnBEdkJiV2Q0b2o3cmdYNGxCWVA3bXArT0UiLCJtYWMiOiIwZmJiMjk2NDY3Yzc3YjFhNTEyOWE0ZDQzMDIxZTllNmM4ZWVhYjdkNjY4NjgzNTI3NzlmY2Q3OGI2NmM5YjMzIiwidGFnIjoiIn0%3D",
    "Referer": "https://luckydiamond.io/dice",
    "Referrer-Policy": "strict-origin-when-cross-origin"
},
body: null,
method: "POST"
})
.then(response => response.json())
.then(data => {
console.log(data.result,data.message);


})
.catch(error => {
console.log(error);
});



}

function kirim(){
	
const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
"authorization": bearer,
   "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mac=Mod; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.JMYyGwUOT2UZqessqrbfqkeZinOnCc0X0skqOwPhjumfAMmh5Bc9gdp1kjERyvu8KF92UQYSmoI1fnsW9wbgH546WRagrWQ5XwHSmoPBySgIjBkbDzA6zeL6fOh6xeYSRtdqBZxa3WaaVSEIgm9H%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674810969224%7D; XSRF-TOKEN=eyJpdiI6IldlQyt3aXNqVDNuNGVsb1JNMlovMHc9PSIsInZhbHVlIjoiUyt6Wmduejk2dXRFV21RZlVQUWl2QXFQc2dvL2pyNlJZY1hQVzhPZzBMcDZnOGZhTXNYK3B2amxqNExwMHljcStHSjZMcGN5RDlRZHp0eXFUajhkUjc3N3hWQUNaRXpPcHQ1T28vZFZKQ29EK1JyUFpMOFFiU1A1eFoyS25PQ2UiLCJtYWMiOiJiMzE2MzE2NmMwMjY1NGMxYTk0NzM3OTljZWFlY2U3YTc3ZTM1MWExYzVlOTgwOTc4YTE1MDRhY2JhZmM5ZmY1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IndLdXBnNzcraHl2RFFnV2IzK2xDY2c9PSIsInZhbHVlIjoiTUJBaGJQMVdVaS8vblpFYnF3ZE9MOXNwaU94Z2R0V2o5WWQyQ1dRZlJuS2VsTnBUUi95RjFaN1NtdW9iTzhLbFJZbDVKYkNMM01kOWFVMlVKd1p6dVRjcG9GcTUyNzA3TExpTEpDL3J5TUpNc3VMZjQ4eHo1YmU2SDd6c2VCbWUiLCJtYWMiOiIxMGU2OGQwYmQzOWUzZTRmMmFiYjM2ZDI1Mzg1ZjY0ZjliMTc5ZjBhNmIxOGFhZGI2MzkyNzlmZTE3NDQ3ZWQ3IiwidGFnIjoiIn0%3D",

    "Referer": "https://luckydiamond.io/dice",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

const data = {
  language: 'id',
  message: chat
};

fetch("https://luckydiamond.io/api/chat/send-message", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});}


function upx(){
	
const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
        "x-csrf-token": "zb4UbkADbQ5SQssfgQMHvPZnUt3JslSmUgxn2xHX",
"authorization": bearer,

   "content-type": "application/json",
    "sec-fetch-dest": "empty",
    
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mac=Mod; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.JMYyGwUOT2UZqessqrbfqkeZinOnCc0X0skqOwPhjumfAMmh5Bc9gdp1kjERyvu8KF92UQYSmoI1fnsW9wbgH546WRagrWQ5XwHSmoPBySgIjBkbDzA6zeL6fOh6xeYSRtdqBZxa3WaaVSEIgm9H%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674810969224%7D; XSRF-TOKEN=eyJpdiI6IldlQyt3aXNqVDNuNGVsb1JNMlovMHc9PSIsInZhbHVlIjoiUyt6Wmduejk2dXRFV21RZlVQUWl2QXFQc2dvL2pyNlJZY1hQVzhPZzBMcDZnOGZhTXNYK3B2amxqNExwMHljcStHSjZMcGN5RDlRZHp0eXFUajhkUjc3N3hWQUNaRXpPcHQ1T28vZFZKQ29EK1JyUFpMOFFiU1A1eFoyS25PQ2UiLCJtYWMiOiJiMzE2MzE2NmMwMjY1NGMxYTk0NzM3OTljZWFlY2U3YTc3ZTM1MWExYzVlOTgwOTc4YTE1MDRhY2JhZmM5ZmY1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IndLdXBnNzcraHl2RFFnV2IzK2xDY2c9PSIsInZhbHVlIjoiTUJBaGJQMVdVaS8vblpFYnF3ZE9MOXNwaU94Z2R0V2o5WWQyQ1dRZlJuS2VsTnBUUi95RjFaN1NtdW9iTzhLbFJZbDVKYkNMM01kOWFVMlVKd1p6dVRjcG9GcTUyNzA3TExpTEpDL3J5TUpNc3VMZjQ4eHo1YmU2SDd6c2VCbWUiLCJtYWMiOiIxMGU2OGQwYmQzOWUzZTRmMmFiYjM2ZDI1Mzg1ZjY0ZjliMTc5ZjBhNmIxOGFhZGI2MzkyNzlmZTE3NDQ3ZWQ3IiwidGFnIjoiIn0%3D",

    "Referer": "https://luckydiamond.io/dice",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

const data = {
  mac: 'Mod'
  
};

fetch("https://luckydiamond.io/up-time", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});}

function countTime() {

    setInterval(() => {
    
        playTime = (new Date().getTime()) - startTime;
        playDays = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24));
        playHours = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1));
        playMinutes = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1));
        playSeconds = Math.floor((playTime % (1e3 * 6e1)) / 1e3);
        waktu=(`${playDays}:${playHours}:${playMinutes}:${playSeconds}`);
    }, 1e3)
    
}



var count_min = 1;
setInterval(function() {

    count_min = count_min + 1;
    console.log(count_min)
    
    upx();
     if (count_min == 2) {
     	
stop()
        p1 = getRndInteger(5, 10);
        p2 = getRndInteger(14, 20);
        p3 = getRndInteger(21, 28);
        s1 = p1 - 1;

        s2 = p2 - 1;
        s3 = p3 - 1;
        console.log(p1,p2,p3,s1,s2,s3);
        klaim()
        
    }

    if (count_min == s1) {
        start();
    }

    if (count_min == s2) {
        start();
        
    }

    if (count_min == s3) {
        start();
    }

    if (count_min == p1) {
        
       kirim();
        chat = "";
        ko=0;
       stop()
        
    }

    if (count_min == p2) {
        console.log(count_min)
     kirim();
        chat = "";
        ko=0;
        
       stop()
    }

    if (count_min == p3) {
        console.log(count_min)
        
       kirim();
        chat = "";
        ko=0;
       stop()
    }

    if (count_min == 31) {
        console.log(count_min)
klaim();
    }
    if (count_min >= 32) {

        count_min = 0;
    }
}, 60000);


setInterval(function() {
    let now = new Date();
    let minutes = now.getMinutes(); // You can change getSeconds() to getMinutes()
    if (minutes - 57== 0) {
    	
        const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,id;q=0.8",
"authorization": bearer,
   "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mac=Mod; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.JMYyGwUOT2UZqessqrbfqkeZinOnCc0X0skqOwPhjumfAMmh5Bc9gdp1kjERyvu8KF92UQYSmoI1fnsW9wbgH546WRagrWQ5XwHSmoPBySgIjBkbDzA6zeL6fOh6xeYSRtdqBZxa3WaaVSEIgm9H%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674810969224%7D; XSRF-TOKEN=eyJpdiI6IldlQyt3aXNqVDNuNGVsb1JNMlovMHc9PSIsInZhbHVlIjoiUyt6Wmduejk2dXRFV21RZlVQUWl2QXFQc2dvL2pyNlJZY1hQVzhPZzBMcDZnOGZhTXNYK3B2amxqNExwMHljcStHSjZMcGN5RDlRZHp0eXFUajhkUjc3N3hWQUNaRXpPcHQ1T28vZFZKQ29EK1JyUFpMOFFiU1A1eFoyS25PQ2UiLCJtYWMiOiJiMzE2MzE2NmMwMjY1NGMxYTk0NzM3OTljZWFlY2U3YTc3ZTM1MWExYzVlOTgwOTc4YTE1MDRhY2JhZmM5ZmY1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IndLdXBnNzcraHl2RFFnV2IzK2xDY2c9PSIsInZhbHVlIjoiTUJBaGJQMVdVaS8vblpFYnF3ZE9MOXNwaU94Z2R0V2o5WWQyQ1dRZlJuS2VsTnBUUi95RjFaN1NtdW9iTzhLbFJZbDVKYkNMM01kOWFVMlVKd1p6dVRjcG9GcTUyNzA3TExpTEpDL3J5TUpNc3VMZjQ4eHo1YmU2SDd6c2VCbWUiLCJtYWMiOiIxMGU2OGQwYmQzOWUzZTRmMmFiYjM2ZDI1Mzg1ZjY0ZjliMTc5ZjBhNmIxOGFhZGI2MzkyNzlmZTE3NDQ3ZWQ3IiwidGFnIjoiIn0%3D",

    "Referer": "https://luckydiamond.io/dice",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

const data = {
  language: 'id',
  message: 'lucky:2'
};

fetch("https://luckydiamond.io/api/chat/send-message", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});}
    

}, 60000)

let waitBet;

function start() {
	countTime() 
  waitBet = setInterval(function() {
    dobet();
  }, 1000);
}

function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


function resetseed() { 
	fetch("https://luckydiamond.io/api/game-options/change-seeds", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${bearer}`,
    "Content-Type": "application/json",
        "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mac=Mod; TawkConnectionTime=0; twk_uuid_6166719b157d100a41ac2224=%7B%22uuid%22%3A%221.JMYyGwUOT2UZqessqrbfqkeZinOnCc0X0skqOwPhjumfAMmh5Bc9gdp1kjERyvu8KF92UQYSmoI1fnsW9wbgH546WRagrWQ5XwHSmoPBySgIjBkbDzA6zeL6fOh6xeYSRtdqBZxa3WaaVSEIgm9H%22%2C%22version%22%3A3%2C%22domain%22%3A%22luckydiamond.io%22%2C%22ts%22%3A1674810969224%7D; XSRF-TOKEN=eyJpdiI6IldlQyt3aXNqVDNuNGVsb1JNMlovMHc9PSIsInZhbHVlIjoiUyt6Wmduejk2dXRFV21RZlVQUWl2QXFQc2dvL2pyNlJZY1hQVzhPZzBMcDZnOGZhTXNYK3B2amxqNExwMHljcStHSjZMcGN5RDlRZHp0eXFUajhkUjc3N3hWQUNaRXpPcHQ1T28vZFZKQ29EK1JyUFpMOFFiU1A1eFoyS25PQ2UiLCJtYWMiOiJiMzE2MzE2NmMwMjY1NGMxYTk0NzM3OTljZWFlY2U3YTc3ZTM1MWExYzVlOTgwOTc4YTE1MDRhY2JhZmM5ZmY1IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IndLdXBnNzcraHl2RFFnV2IzK2xDY2c9PSIsInZhbHVlIjoiTUJBaGJQMVdVaS8vblpFYnF3ZE9MOXNwaU94Z2R0V2o5WWQyQ1dRZlJuS2VsTnBUUi95RjFaN1NtdW9iTzhLbFJZbDVKYkNMM01kOWFVMlVKd1p6dVRjcG9GcTUyNzA3TExpTEpDL3J5TUpNc3VMZjQ4eHo1YmU2SDd6c2VCbWUiLCJtYWMiOiIxMGU2OGQwYmQzOWUzZTRmMmFiYjM2ZDI1Mzg1ZjY0ZjliMTc5ZjBhNmIxOGFhZGI2MzkyNzlmZTE3NDQ3ZWQ3IiwidGFnIjoiIn0%3D",

    "Referer": "https://luckydiamond.io/dice",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  body: JSON.stringify({ clientSeed: randomString(16) })
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
console.log(data);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });

     
}



function stop() {
  clearInterval(waitBet);
  console.clear();
}
//klaim();






  

  
  
  
