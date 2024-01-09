const numButton = document.querySelectorAll('.num-button');
const operationButton = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');

const valueDisplay = document.querySelector('#value-display');
const previousDisplayNum = document.querySelector('.previous-num');
const operatorDisplaySign = document.querySelector('.operator');
const currentDisplayNum = document.querySelector('.current-num');

let previousNum = "";
let currentNum = "";
let operator = ""; 

numButton.forEach((button) =>
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    })
);

function handleNumber(number){
    if (currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNum.textContent = currentNum;
    }
};

operationButton.forEach((button) =>
    button.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    })
);

function handleOperator(op){
    operator = op;
    operatorDisplaySign.textContent = operator;
    previousNum = currentNum;
    previousDisplayNum.textContent = previousNum;
    currentNum = "";
    currentDisplayNum.textContent = "";
}

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