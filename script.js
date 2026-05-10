function changePair(pair){

  const chart =
    document.getElementById("chartFrame");

  chart.src =
    `https://s.tradingview.com/widgetembed/?symbol=FX:${pair}&interval=1&theme=dark`;

  const pairText =
    document.getElementById("currentPair");

  let displayName = pair;

  if(pair === "EURUSD"){
    displayName = "EUR/USD OTC";
  }

  if(pair === "USDBRL"){
    displayName = "USD/BRL OTC";
  }

  if(pair === "GBPJPY"){
    displayName = "GBP/JPY OTC";
  }

  if(pair === "AUDUSD"){
    displayName = "AUD/USD OTC";
  }

  if(pair === "EURJPY"){
    displayName = "EUR/JPY OTC";
  }

  pairText.innerText = displayName;

}