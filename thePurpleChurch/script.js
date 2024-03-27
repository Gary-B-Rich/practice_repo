//  script.js for thePurpleChurch in practice_repo 

const button1=document.getElementById('button1');
button1.addEventListener("click", function() {
    console.log("You clicked button 1");
});

const button2=document.getElementById('button2');
button2.addEventListener("click", function() {
    console.log("Clicked button 2");
});

const button3=document.getElementById('button3');
button3.addEventListener("click", function() {
    console.log("Clicked button 3");
});

const button4=document.getElementById('button4');
button4.addEventListener("click", function() {
    console.log("Clicked button 4");
});

const welcomeText = document.querySelector('.welcome');
welcomeText.innerText="Welcome to the Purple Church";

const blackBox1 = document.getElementById('blackBox1');
blackBox1.innerText="This is blackBox1";

const blackBox2 = document.getElementById('blackBox2');
blackBox2.innerText="This is blackBox2";

const pinkBox1 = document.getElementById('pinkBox1');
pinkBox1.innerText="This is pinkBox1";



/*
const mainText=document.querySelector('.main-text');
//mainText.innerText="Success";

const secondText=document.querySelector('.second-text');
//secondText.innerText="Success";

const thirdText=document.querySelector('.third-text');
//thirdText.innerText="Success";
*/