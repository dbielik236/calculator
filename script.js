let number;
let storedValues;

function displayNumber (number) {    
    const div = document.createElement('aside');
    div.classList.add('number')
    div.textContent = number;
    display.appendChild(div);
    
}
function getOne() {
    clearDisplay();
    displayNumber(1);
    return number = 1;
}
function getTwo() {
    clearDisplay();
    displayNumber(2);
    return number = 2;
}
function getThree() {
    clearDisplay();
    displayNumber(3);
    return number = 3;
}
function getFour() {
    clearDisplay();
    displayNumber(4);
    return number = 4;
}
function getFive() {
    clearDisplay();
    displayNumber(5);
    return number = 5;
}
function getSix() {
    clearDisplay();
    displayNumber(6);
    return number = 6;
}
function getSeven() {
    clearDisplay();
    displayNumber(7);
    return number = 7;
}
function getEight() {
    clearDisplay();
    displayNumber(8);
    return number = 8;
}
function getNine() {
    clearDisplay();
    displayNumber(9);
    return number = 9;
}
function getZero() {
    clearDisplay();
    displayNumber(0);
    return number = 0;
}

function getMultiply () {
    return storedValues = {
        firstNumber: number,
        operator: '*',
        }
}
function getDivide () {
    return storedValues = {
        firstNumber: number,
        operator: '/',
        }
}
function getSubtract () {
    return storedValues = {
        firstNumber: number,
        operator: '-',
        }
}
function getAdd () {
    return storedValues = {
        firstNumber: number,
        operator: '+',
        }
}

function add (firstNumber, number) {
    return ans=firstNumber+number;
}

function subtract (firstNumber, number) {
    return ans=firstNumber-number;
}

function multiply (firstNumber, number) {
    return ans=firstNumber*number;
}

function divide (firstNumber, number) {
    return ans=firstNumber/number;
}

function operate (operator, firstNumber, number) {
    if (operator=='+') {
        add(firstNumber, number)
        return ans;
    }
    else if (operator=='-') {
        subtract(firstNumber, number)
        return ans;
    }
    else if (operator=='*') {
        multiply(firstNumber, number)
        return ans;
    }
    if (operator=='/') {
        divide(firstNumber, number)
        return ans;
    }
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    clearDisplay();
    operate(storedValues.operator, storedValues.firstNumber, number);
    
    const display = document.querySelector('#display');
    const answer = document.createElement('aside')
    answer.classList.add('answer');
    answer.textContent = ans;
    display.appendChild(answer);
    
});

function clearDisplay() {
    const display = document.querySelector('#display');
    const aside = document.querySelector('aside');
    if (aside) {  
        display.removeChild(aside);
    }
}



