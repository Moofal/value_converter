const prompt = require('prompt-sync')();
console.log("Valuta konvertor fra NOK");
const nok = prompt('Hvor mange kr?: ');

const convertTo = prompt('Danske kroner(dkk) | Euro(eur) | Amerikanske dollar(usd) | ');

const nokToDkk = (nok) => {
  return Number(nok/1.13).toFixed(2);
}
const nokToEur = (nok) => {
  return Number(nok/10).toFixed(2);
}
const nokToUsd = (nok) => {
  return Number(nok/9).toFixed(2);
}

switch (convertTo) {
  case "dkk": {
    console.log(nokToDkk(nok))
    break;
  }
  case "eur": {
    console.log(nokToEur(nok));
    break;
  }
  case "usd": {
    console.log(nokToUsd(nok));
    break;
  }
  default: {
    console.log("Invalid input");
  }
}

