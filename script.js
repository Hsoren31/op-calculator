const numButton = document.querySelectorAll('.num-button');
const operationButton = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');
const decimalButton =document.querySelector('#decimal-button');

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
    }),
    decimalButton.addEventListener('click', (e) => {
        document.getElementById("decimal-button").disabled = true;
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
        document.getElementById("decimal-button").disabled = false;
    })
);

function handleOperator(op){
    if(operator === ''){
        operator = op;
        operatorDisplaySign.textContent = operator;
        previousNum = currentNum;
        previousDisplayNum.textContent = previousNum;
        currentNum = "";
        currentDisplayNum.textContent = "";
    } else {
        solution = operate(previousNum, operator, currentNum);
        previousNum = solution;
        previousDisplayNum.textContent = solution;
        operator = op;
        operatorDisplaySign.textContent = operator;
        currentNum = "";
        currentDisplayNum.textContent = "";
    }
}

equalButton.addEventListener('click', (e) => {
    solution = operate(previousNum, operator, currentNum);
    solutionDisplay.textContent = " = " + solution;
});

clearButton.addEventListener('click', (e) => {
    currentNum = "";
    previousNum = "";
    operator = "";
    solution = "";
    currentDisplayNum.textContent = "";
    previousDisplayNum.textContent = "";
    operatorDisplaySign.textContent = "";
    solutionDisplay.textContent = "";
})

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
        case "\u00d7":
            return factor(num1, num2);
            break;
        case '\u00f7':
            return divide(num1, num2);
            break;
        default:
            return ''
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
    return a / b;
};