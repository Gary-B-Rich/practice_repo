//This is the javaScript

console.log(23 + 97);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);

console.log(9 * a);

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

const string = "The revolution will not be televised.";
console.log(string);

//const badString1 = This is a test;
//const badString2 = 'This is a test;
//const badString3 = This is a test';

const badString = string;
console.log(badString);

// Backslash inside of single or double quotes
// causes the compiler to ignore it as code, and instead
// regard it as text.  This is known as an 'escape character.'
const bigMouth = 'I\'ve got no right to take my place...';
console.log(bigMouth);

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); //Hello, Chris


const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); //Hello, how are you?


const button = document.querySelector("button");
function greet() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
}
button.addEventListener("click", greet);


const street = "Front ";
const addy = 242;
console.log(`${street}${addy}`); //Front 242


const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
console.log(myNum);


const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
console.log(myString2);


const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}.  I gave it a score of ${
    (score / highestScore) * 100
}%.`;
console.log(output); 