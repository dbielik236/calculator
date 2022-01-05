let operator = '+';
let a = 5;
let b = 3;

function displaySeven() {
    const display = document.querySelector('#display');
    const seven = document.createElement('div')
    seven.classList.add('seven');
    seven.textContent = 7;
    display.appendChild(seven);
}

function getMultiply () {
    
}

function getDivide () {

}

function getSubtract () {

}

function getAdd () {

}

function getEquals () {
    const equals = document.querySelector('#equals');
    
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

operate(operator, a, 2);

console.log(ans)