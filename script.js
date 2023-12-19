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