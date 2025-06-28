const buttons = document.querySelectorAll('.button')  
const display = document.getElementById('display')  
let firstOperand = null;
let operator = "";
let secondOperand = true;
                            
function calculate (num1, operator, num2){
  switch (operator){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
     case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0){
        return "ERROR"
      }
      return num1 / num2;
      default:
        return;
  }
}

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(e){
    const value = e.currentTarget.value;
    if (value === "AC"){
      display.textContent = "0";
      firstOperand = null;
      operator = "";
      secondOperand = true;
      return;
    }
    if (value === "."){
      if (!display.textContent.includes(".")){
        display.textContent += ".";
      }
      return;
    }
    if (e.currentTarget.classList.contains("operator")){
      if (firstOperand === null){
        firstOperand = Number(display.textContent);
      }
      operator = value;
      secondOperand = true;
      return;
    }
    if (e.currentTarget.classList.contains("number")){
      if (display.textContent === "0" || secondOperand){
        display.textContent = value;
        secondOperand = false;
      } else {
        display.textContent += value;
      }
      return;
    }
    if (e.currentTarget.classList.contains("equal")){
      if (firstOperand !== null && operator !== ""){
        const secondValue = Number(display.textContent);
        const result = calculate(firstOperand, operator, secondValue);
        display.textContent = result;
        firstOperand = result;
        operator = "";
        secondOperand = true;
      }
      return;
    }
  })
}

