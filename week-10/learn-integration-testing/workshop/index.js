const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, sign, b) {
  const aNum = parseFloat(a);
  const bNum = parseFloat(b)
  switch (sign) {
    case "+":
      return add(aNum, bNum);
    case "-":
      return subtract(aNum, bNum);
    case "*":
      return multiply(aNum, bNum);
    case "/":
      return divide(aNum, bNum);
    default:
      return "Please enter a valid sign (+, -, *, /)";
  }
}

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get user input from form
  const data = new FormData(form);
  const a = data.get("a");
  const sign = data.get("sign");
  const b = data.get("b");

  // calculate result and update page
  const answer = calculate(a, sign, b);
  document.querySelector("#result").textContent = answer;
  event.target.reset();
});

