let storedValues;
let number = '';
let ans;

function storeValues (number, operator) {
  return storedValues = {
    firstNumber: number,
    operator: operator, 
  }
}

function resetStoredValues () {
    return storedValues = {
    firstNumber: null,
    operator: null,
  }
}

function resetNumber () {
  return number = '';
}

function displayNumber (number) {
    const display = document.querySelector('#display');
    let node = document.createTextNode (number);
    display.appendChild(node);
}

/* OLD DISPLAY BY CREATING A DIV
function displayNumber (number) {    
    const div = document.createElement('aside');
    div.classList.add('number')
    div.textContent = number;
    display.appendChild(div);
}
*/

function getOne() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      
    }
    displayNumber(1);
    return number += '1';
}
function getTwo() {

    if (number===''||number==ans) {
      clearDisplay();
      resetNumber();
      
    }
    displayNumber(2);
    return number += '2';
}
function getThree() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(3);
    return number += '3';
}
function getFour() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(4);
    return number += '4';
}
function getFive() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(5);
    return number += '5';
}
function getSix() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(6);
    return number += '6';
}
function getSeven() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(7);
    return number += '7';
}
function getEight() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(8);
    return number += '8';
}
function getNine() {
    if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
    }
    displayNumber(9);
    return number += '9';
}
function getZero() {
    if (number===''||number == ans) {
      return
    }
    displayNumber(0);
    return number += '0';
}

function getMultiply () {
    storeValues(number, '*');
    resetNumber();
      
}
function getDivide () {
    storeValues(number, '/');
    resetNumber();
}
function getSubtract () {
    
    storeValues(number, '-');
    resetNumber();
}
function getAdd () {
  
  storeValues(number, 'plus');
  resetNumber();
}

function getDecimal () {
  if (number===''||number == ans) {
    return number +='0.'
  }
  displayNumber('.');
  return number += '.';
}

function add (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
    return ans=first+parsed;
}
function subtract (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
    return ans=first-parsed;
}
function multiply (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
    return ans=first*parsed;
}
function divide (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
    return ans=first/parsed;
}

function operate (operator, firstNumber, number) {
    if (operator=='plus') {
      add(firstNumber, number)
      
    }
    else if (operator=='-') {
        subtract(firstNumber, number)
        
    }
    else if (operator=='*') {
        multiply(firstNumber, number)
        
    }
    else if (operator=='/') {
        divide(firstNumber, number)
        
    }
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (storedValues.operator) {
    
    operate(storedValues.operator, storedValues.firstNumber, number);
    displayNumber(ans);
    resetStoredValues();
    return number = ans;
    }
    
});

/* OLD ONE CREATES A DIV
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
*/

function clearDisplay() {
    resetNumber ();
    const display = document.querySelector('#display');
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
}
