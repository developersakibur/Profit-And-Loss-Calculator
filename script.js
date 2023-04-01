let outpol = document.querySelector("#profitOrLoss");
let outtip = document.querySelector("#percent");
let pol = document.getElementById("pol");
let tip = document.getElementById("tip");
function result() {
  let buyCost = document.getElementById("buyCost").value;

  let sellCost = document.getElementById("sellCost").value;

  var quantity = document.getElementById("quantity").value;
  var hundret = 100;
  var profitOrLoss = (sellCost - buyCost) * quantity;
  var percent = ((profitOrLoss / quantity) * hundret) / buyCost;

  outpol.value = profitOrLoss.toFixed(2) + " $"; //toPrecision
  outtip.value = percent.toFixed(2) + " %"; //toPrecision

  if (profitOrLoss > 0) {
    pol.innerHTML = "Total Profit";
    pol.style = "color:rgb(0,250,0);";
    outpol.style = "background-color:rgb(0,250,0);";
  } else if (profitOrLoss == 0.0) {
    pol.innerHTML = "Total Profit/Loss";
    pol.style = "color:#fff;";
    outpol.style = "background-color:#fff;";
  } else {
    pol.innerHTML = "Total Loss";
    pol.style = "color:rgb(250,0,0);";
    outpol.style = "background-color:rgb(250,0,0);";
  }

  if (percent > 0) {
    tip.innerHTML = "Profit In Percent";
    tip.style = "color:rgb(0,250,0);";
    outtip.style = "background-color:rgb(0,250,0);";
  } else if (percent == 0.0) {
    tip.innerHTML = "Total In Percent";
    tip.style = "color:#fff;";
    outtip.style = "background-color:#fff;";
  } else if (percent < 0) {
    tip.innerHTML = "Loss In Percent";
    tip.style = "color:rgb(250,0,0);";
    outtip.style = "background-color:rgb(250,0,0);";
  }

  if (buyCost == 0) {
    reset();
    pol.innerHTML = "Total Profit/Loss";
  } else if (sellCost == 0) {
    reset();
    pol.innerHTML = "Total Profit/Loss";
  }
}

function reset() {
  document.querySelector("#buyCost").value = " ";
  document.querySelector("#sellCost").value = " ";
  document.querySelector("#quantity").value = "01";
  document.querySelector("#profitOrLoss").value = "0.00 $";
  document.querySelector("#percent").value = "0.00 %";
  tip.style = "color:#fff;";
  tip.innerHTML = "Total In Percent";
  outtip.style = "background-color:#fff;";
  pol.style = "color:#fff;";
  pol.innerHTML = "Total Profit/Loss";
  outpol.style = "background-color:#fff;";
}
