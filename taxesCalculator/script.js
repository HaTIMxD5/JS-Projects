let ipt = document.getElementById("ipt");
let perIpt = document.getElementById("perIpt");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function calculateTax() {
  let amount = Number(ipt.value);
  let per = Number(perIpt.value);
  let total = (amount * (per / 100)) + amount;
  
  result.innerHTML = `Your Total Price Is : ${total}$`;
  result.style.display = "block";
  if (amount < 0) {
    window.alert("Please Enter a Positive Number");
    result.style.display = "none";
  }
}