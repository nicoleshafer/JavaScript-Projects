const buttons = document.querySelectorAll("button")
const screenDisplay = document.querySelector('.span')

let calculation = []
let accumulativeCalculation;
let positiveNumber = true
const calculate = (button) =>{
    const value = button.textContent
    if(value === "AC"){
        calculation = []
        screenDisplay.textContent = " 0 "
    }  else if(value === "=" ){
        screenDisplay.textContent  = eval(accumulativeCalculation)
    }  else if(value === "%"){
        if(calculation.length > 0){
            const percentValue = parseFloat(calculation.join("")) / 100
            accumulativeCalculation = [percentValue.toString()]
            accumulativeCalculation = percentValue.toString()
            screenDisplay.textContent = accumulativeCalculation;
            
        }} else if(value ==="+/-"){
        positiveNumber = !positiveNumber
        if(!positiveNumber){
            calculation = ["-" + calculation.join("")]
            accumulativeCalculation = calculation.join("")
        }
    } else{
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

    console.log(calculation)
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button) ))

