const numButton = document.querySelectorAll('.num-button');
const operationButton = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');
const valueDisplay = document.querySelector('#value-display');

let firstNum = 0;
let secondNum = 0;
let operator = ''; 

numButton.forEach((button) =>
    button.addEventListener('click', (e) => {
        const valueNum = document.createElement('p');
        valueNum.textContent = e.target.textContent;
        valueDisplay.appendChild(valueNum);

        firstNum =+ e.target.textContent;
        console.log(firstNum);
    })
);

operationButton.forEach((button) =>
    button.addEventListener('click', (e) => {
        const valueOperator = document.createElement('p');
        valueOperator.textContent = e.target.textContent;
        valueDisplay.appendChild(valueOperator);
    })
);

function sum(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function factor(a, b){
    return a * b;
};

function divide(a, b){
    return a % b;
};

function sumAll(array){
    const initialValue = 0;
    return array.reduce((previousValue, currentValue) =>
        previousValue + currentValue, initialValue,);
};

function operate(num1, operator, num2){
    switch(operator){
        case '+':
            return sum(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return factor(num1, num2);
            break;
        case '%':
            return divide(num1, num2);
            break;
        default:
            return 'not a option, try again.'
    }
}