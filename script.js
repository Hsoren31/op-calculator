const numButton = document.querySelectorAll('.num-button');
const operationButton = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');

const previousDisplayNum = document.querySelector('.previous-num');
const operatorDisplaySign = document.querySelector('.operator');
const currentDisplayNum = document.querySelector('.current-num');
const solutionDisplay = document.querySelector('.solution');

let previousNum = "";
let currentNum = "";
let operator = "";
let solution = "";

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

equalButton.addEventListener('click', (e) => {
    solution = operate(previousNum, operator, currentNum);
    solutionDisplay.textContent = solution;
});

function operate(num1, operator, num2){
    num1 = Number(previousNum);
    num2 = Number(currentNum);
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
};

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