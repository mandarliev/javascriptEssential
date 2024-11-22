let length;
let width;

let grocery1;
let grocery2;
let grocery3;

function calculateArea() {
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  let area = length * width;

  document.getElementById(
    "result"
  ).innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
  grocery1 = parseFloat(document.getElementById("grocery1").value);
  grocery2 = parseFloat(document.getElementById("grocery2").value);
  grocery3 = parseFloat(document.getElementById("grocery3").value);

  let expenditure = (grocery1 + grocery2 + grocery3).toFixed(2);

  document.getElementById(
    "expenditure"
  ).innerText = `The total amount is :$ ${expenditure}`;
}
