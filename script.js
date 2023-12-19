let firstNum = 0;
let secondNum = 0;
let operator = '+'; 

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