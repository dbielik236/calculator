
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

operate('-', 10, 2);

console.log(ans)