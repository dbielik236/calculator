let number;
let storedValues;

function displayNumber (number) {    
    const div = document.createElement('aside');
    div.classList.add('number')
    div.textContent = number;
    display.appendChild(div);
    
}
function getOne() {
    displayNumber(1);
    return number = 1;
}
function getTwo() {
    displayNumber(2);
    return number = 2;
}
function getThree() {
    displayNumber(3);
    return number = 3;
}
function getFour() {
    displayNumber(4);
    return number = 4;
}
function getFive() {
    displayNumber(5);
    return number = 5;
}
function getSix() {
    displayNumber(6);
    return number = 6;
}
function getSeven() {
    displayNumber(7);
    return number = 7;
}
function getEight() {
    displayNumber(8);
    return number = 8;
}
function getNine() {
    displayNumber(9);
    return number = 9;
}
function getZero() {
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
    operate(storedValues.operator, storedValues.firstNumber, number);
    
    const display = document.querySelector('#display');
    const answer = document.createElement('aside')
    answer.classList.add('answer');
    answer.textContent = ans;
    display.appendChild(answer);
    
});

//this current function on removes one number at a time and doesn't remove answer
function clearDisplay() {
    const display = document.querySelector('#display');
    const div = document.querySelector('.number');
    if (div) {  
        display.removeChild(div);
    }

}



