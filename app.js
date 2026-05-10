
console.log("SGTRADECHART Loaded");

// Demo Auto Signal Change
const signalBox = document.querySelector('.signal');

setInterval(() => {
  const random = Math.random();

  if(random > 0.5){
    signalBox.innerHTML = "BUY ↑";
    signalBox.classList.remove("sell");
    signalBox.classList.add("buy");
  } else {
    signalBox.innerHTML = "SELL ↓";
    signalBox.classList.remove("buy");
    signalBox.classList.add("sell");
  }

}, 60000);
