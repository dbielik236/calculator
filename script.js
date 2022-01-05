let operator;
let a;
let b = 2;

function displaySeven() {
    const display = document.querySelector('#display');
    const seven = document.createElement('div')
    seven.classList.add('seven');
    seven.textContent = 7;
    display.appendChild(seven);
    return a = 7;
}

function getMultiply () {
    return operator = '*'
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
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    operate(operator, a, b);
    console.log(ans);
    const display = document.querySelector('#display');
    const answer = document.createElement('div')
    answer.classList.add('solution');
    answer.textContent = ans;
    display.appendChild(answer);

    const remove = document.querySelector('.seven');
    display.removeChild(remove);
});


