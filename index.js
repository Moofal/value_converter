const prompt = require('prompt-sync')();
console.log("Valuta konvertor fra NOK");
const nok = prompt('Hvor mange kr?: ');

const convertTo = prompt('Danske kroner(dkk) | Euro(eur) | Amerikanske dollar(usd) | ');
switch (convertTo) {
  case "dkk": {
    break;
  }
  case "eur": {
    break;
  }
  case "usd": {
    break;
  }
  default: {
    console.log("Invalid input");
  }
}

const nokToDkk = (nok) => {
  return Number(nok/1.13);
}
const nokToEur = (nok) => {
  return Number(nok/10);
}
const nokToUsd = (nok) => {
  return Number(nok/9);
}

