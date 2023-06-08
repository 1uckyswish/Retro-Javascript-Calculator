const $ = document;
const buttons = $.querySelectorAll('button');
const screenDisplay = $.querySelector('.screen');

let total = [];
let arrayToStringValue;

function calculate(button){
    const value = button.textContent;
    if(value == "CLEAR"){
        total = [];
        screenDisplay.textContent = "."
    }else if(value == "="){
        screenDisplay.textContent = eval(arrayToStringValue)
    }else{
        total.push(value);
        arrayToStringValue = total.join('')
        screenDisplay.textContent = arrayToStringValue
    }

}

buttons.forEach((button)=> button.addEventListener('click', () => calculate(button)))
