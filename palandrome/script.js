// script.js for palandrome

// add text input functionality
const breakfastNumberInputs=document.getElementById('text-input');

// add button functionality
let checkButton = document.getElementById('check-btn');
checkButton.addEventListener("click", function () {
    if(breakfastNumberInputs===undefined){
        alert("Please input a value");
    }
});