let operator;
let a;
let b;

function displaySeven() {
    const display = document.querySelector('#display');
    const seven = document.createElement('div')
    seven.classList.add('seven');
    seven.textContent = 7;
    display.appendChild(seven);
    
    const remove = document.querySelector('.spacer');
    display.removeChild(remove);
    
    return a = 7;
}

function displayFour() {
    const display = document.querySelector('#display');
    const four = document.createElement('div')
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
    answer.classList.add('answer');
    answer.textContent = ans;
    display.appendChild(answer);

    const remove = document.querySelector('.four');
    display.removeChild(remove);
});



const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const display = document.querySelector('#display');

    const answer = document.querySelector('.answer');
    display.removeChild(answer);

   
    const spacer = document.createElement('div')
    spacer.classList.add('spacer');
    spacer.textContent = 'spacer';
    display.appendChild(spacer);
});

