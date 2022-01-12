let storedValues;
let number = '';
let ans;



function storeValues (number, operator) {
  return storedValues = {
    firstNumber: number,
    operator: operator, 
  }
}

function replaceZero () {
    let position = number.indexOf('0');
    if (position==0) {
      resetNumber();
    }
    else return
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

function resetAnswer () {
  return ans = '';
}

function displayNumber (number) {
    const display = document.querySelector('#display');
    let node = document.createTextNode (number);
    display.appendChild(node);
}

function getOne() {
    replaceZero();
    if (number.length>17) {
      return
    }
    else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(1);
    return number += '1';
}
function getTwo() {
  replaceZero()
  if (number.length>17) {
    return
  }
  else if (number===''||number==ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(2);
    return number += '2';
}
function getThree() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(3);
    return number += '3';
}
function getFour() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(4);
    return number += '4';
}
function getFive() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(5);
    return number += '5';
}
function getSix() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
  }
    displayNumber(6);
    return number += '6';
}
function getSeven() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(7);
    return number += '7';
}
function getEight() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(8);
    return number += '8';
}
function getNine() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
      clearDisplay();
      resetNumber();
      resetAnswer();
    }
    displayNumber(9);
    return number += '9';
}
function getZero() {
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number===''||number == ans) {
    clearDisplay();
    resetNumber();
    resetAnswer();
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
  replaceZero();
  if (number.length>17) {
    return
  }
  else if (number==''||number == ans) {
    clearDisplay();
    resetNumber();
    displayNumber('0.');
    return number += '.';
  }
  else if (number.includes('.')) {
    return
  }
  else 
  displayNumber('.');
  return number += '.';
}

function add (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
  return ans=((first*10)+(parsed*10))*10000000000000000/100000000000000000;
}
function subtract (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
    return ans=((first*10)/10)-((parsed*10)/10);
}
function multiply (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
  return ans=((first*10)/10)*((parsed*10)/10);
}
function divide (firstNumber, number) {
  const parsed = parseFloat(number);
  const first = parseFloat(firstNumber);
  clearDisplay();
  return ans=first/parsed
}

function operate (operator, firstNumber, number) {
    if (firstNumber==0&&number==0) {
      clearDisplay();
      displayNumber('Error: Division by Zero')
      return
    }
    else if (operator=='plus') {
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
    if (storedValues.firstNumber&&number) {
        operate(storedValues.operator, storedValues.firstNumber, number);
        
        displayNumber(ans);
        if (ans=='Infinity') {
          clearDisplay();
          displayNumber('Error: Division by Zero');
        }
        else if (ans.toString().length>17) {
          clearDisplay();
          displayNumber('Error: Exceeds Display');
          
        }
        else resetStoredValues();
        return number = ans;
    }
    else 
    clearDisplay();
    displayNumber('Error: Syntax');
    resetStoredValues();
    return
});

function clearDisplay() {
    resetNumber ();
    const display = document.querySelector('#display');
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
}
