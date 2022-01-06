let operator;
let a;
let b;

function displayNumber (number) {    
    const div = document.createElement('aside');
    div.classList.add('number')
    div.textContent = number;
    display.appendChild(div);
    return number;
}

function getSeven() {
    const number = 7;
    displayNumber(number);
}

function getFour() {
    const number = 4;
    displayNumber(number);
}
/*
function displaySeven() {
    
    const seven = document.createElement('div')
    seven.classList.add('seven');
    seven.textContent = 7;
    display.appendChild(seven);
    
    const spacer = document.querySelector('.spacer');
    display.removeChild(spacer);
    return a = 7;
}
*/

function displayFour() {
    const display = document.querySelector('#display');
    const four = document.createElement('aside')
    four.classList.add('four');
    four.textContent = 4;
    display.appendChild(four);
    
    const removeSeven = document.querySelector('.seven');
    display.removeChild(removeSeven);

    return b = 4;
}

function getMultiply () {
    return operator = '*'
}

function getDivide () {
    return operator = '/'
}

function getSubtract () {
    return operator = '-'
}

function getAdd () {
    return operator = '+'
}

function add (a, b) {
    return ans=a+b;
}

function subtract (a, b) {
    return ans=a-b;
}

function multiply (a, b) {
    return ans=a*b
}

function divide (a, b) {
    return ans=a/b;
}

function operate (operator, a, b) {
    if (operator=='+') {
        add(a, b)
        return ans;
    }
    else if (operator=='-') {
        subtract(a, b)
        return ans;
    }
    else if (operator=='*') {
        multiply(a, b)
        return ans;
    }
    if (operator=='/') {
        divide(a, b)
        return ans;
    }
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    operate(operator, a, b);
    
    const display = document.querySelector('#display');
    const answer = document.createElement('aside')
    answer.classList.add('answer');
    answer.textContent = ans;
    display.appendChild(answer);

    const remove = document.querySelector('.four');
    display.removeChild(remove);
});



const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const display = document.querySelector('#display');
});

function removeNodes() {

}