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

    const remove = document.querySelector('.number');
    display.removeChild(remove);
});


function clearDisplay() {
    const display = document.querySelector('#display');
    const div = document.querySelector('.number');
    if (div) {  
        display.removeChild(div);
    }
}




/*
//This doesn't work right yet
function removeNodes() {
    const contents = document.querySelector('#display');
    const number = document.querySelector('aside');
    contents.forEach((number) => {
    contents.removeChild(number);
    });
    
    
}
*/