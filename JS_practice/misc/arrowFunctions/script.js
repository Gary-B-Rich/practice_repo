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
// Normal Function
function randomNumber() {
    return Math.random;
}
// Arrow Function of the same thing
// when NO parameters, use empty parenthesis
let randomNumber2 = () => {
    return Math.random;
}
// Arrow Function when single line return
let randomNumber3 = () => Math.random;

//********************************************************
// Normal 
document.addEventListener('click', function() {
    console.log('click');
})
// Same with arrow
document.addEventListener('click', () => {
    console.log('click');
})
// Same when single line return
document.addEventListener('click', () => console.log('click'));

//**********************************************************
class Person {
    constructor(name) {
        this.name = name;
    }
    //Arrow Function
    //Inside an arrow function 'this' has local scope
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100)
    }
    //Same as the Arrow Function, but standard.
    //Inside a regular function 'this' has global scope from
    //wherever the fuction was called
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100)
    }
}
let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();