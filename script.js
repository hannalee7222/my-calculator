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
    console.log(e.target.value)                    
     let value = e.target.value                         
    if (value === "."){                                
      if (!display.textContent.includes(".")){       
        display.textContent += "."                     
      }
    }
    if (value === "AC"){
      display.textContent = "0"
      firstOperand = null;
      operator = "";
      secondOperand = true;
    }                                               
  })                                                
}

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(e){
    const value = e.target.value;
    if (e.target.classList.contains("operator")){
      if (firstOperand === null){
        firstOperand = Number(display.textContent)
      }
      operator = value;
      secondOperand = true;
      console.log("First Operand:", firstOperand);
      console.log("Operator:", operator);
    }
    if (e.target.classList.contains("number")){
      if (display.textContent === "0" || secondOperand){
        display.textContent = value;
        secondOperand = false;
      }else {
        display.textContent += value;
      }
    }
    if (e.target.classList.contains("equal")){
      if (firstOperand !== null && operator !== ""){
      const secondValue = Number(display.textContent)
      const result = calculate(firstOperand, operator, secondValue)
      display.textContent = result;
      console.log("Result:", result);
      firstOperand = result;
      operator = "";
      secondOperand = true;
    }                                               
  }                                                
  })
 }