// script.js for arrowFunctions
// video tutorial: https://www.youtube.com/watch?v=h33Srr5J9nY

//*******************************************************
// Three examples of the same thing:
// Normal Function
function sum(a, b) {
    return a + b;
}
// Arrow Function
let sum2 = (a, b) => {
    return a + b;
}
// Same Arrow Function when single line return
let sum3 = (a, b) =>  a + b;
//*******************************************************

// Normal Function
function isPositive(number) {
    return number >= 0;
}
// Arrow Function of the same thing
// when using a single parameter: (number) parenthesis unneeded 
let isPositive2 = number => {
    return number >= 0;
}
// Same Arrow Function when single line return
// single parameter (number) parenthesis optional 
let isPositive3 = (number) => number >= 0;



//********************************************************
function randomNumber() {
    return Math.random;
}

document.addEventListener('click', function() {
    console.log('click');
})
