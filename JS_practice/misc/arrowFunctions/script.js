// script.js for arrowFunctions

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
// Same Arrow Function
let sum3 = (a, b) =>  a + b;
//*******************************************************


function isPositive(number) {
    return number >= 0;
}

function randomNumber() {
    return Math.random;
}

document.addEventListener('click', function() {
    console.log('click');
})
