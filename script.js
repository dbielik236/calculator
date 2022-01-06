let storedValues = {
    number: "25",
    operator: "+",
}

let operator;
let a = 5;



let number;

function displayNumber (number) {    
    const div = document.createElement('aside');
    div.classList.add('number')
    div.textContent = number;
    display.appendChild(div);
}

function getSeven() {
    displayNumber(7);
    return number = 7;
}

function getFour() {
    displayNumber(4);
    return number = 4;
}

function getMultiply () {
    return operator = '*';
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

function add (a, number) {
    return ans=a+number;
}

function subtract (a, number) {
    return ans=a-number;
}

function multiply (a, number) {
    return ans=a*number
}

function divide (a, number) {
    return ans=a/number;
}

function operate (operator, a, number) {
    if (operator=='+') {
        add(a, number)
        return ans;
    }
    else if (operator=='-') {
        subtract(a, number)
        return ans;
    }
    else if (operator=='*') {
        multiply(a, number)
        return ans;
    }
    if (operator=='/') {
        divide(a, number)
        return ans;
    }
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    console.log (operate(operator, a, number));
    
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

function storeValues () {

}