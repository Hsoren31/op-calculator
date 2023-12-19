const calculator = document.querySelector('#calculator');

//Create buttons 0-9
for(let i = 0; i < 10; i++){
    const button = document.createElement('button');
    button.className = `button${i}`;
    button.textContent = `${i}`;
    calculator.appendChild(button);
};