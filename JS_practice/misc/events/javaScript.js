//javaScript.js for events directory

// .js for method two
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// .js for method three
const mtd3 = document.querySelector('#mtd3');
mtd3.addEventListener('click', () => {
    alert("Hello World");
});