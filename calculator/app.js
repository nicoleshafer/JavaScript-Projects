const buttons = document.querySelectorAll("button")
const screenDisplay = document.querySelector('.span')

let calculation = []
let accumulativeCalculation;

const calculate = (button) =>{
    const value = button.textContent
    if(value === "AC"){
        calculation = []
        screenDisplay.textContent = " 0 "
    }   else if(value === "=" ){
        screenDisplay.textContent  = eval(accumulativeCalculation)
    }  
     else{
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

    console.log(calculation)
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button) ))

