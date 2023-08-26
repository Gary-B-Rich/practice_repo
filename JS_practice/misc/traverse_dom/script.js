// script.js for traverse_dom repo

const grandparent = document.getElementById("grandparent-id");
const parents = document.getElementsByClassName('parent');

parents.forEach(changeColor);

//inline background styling:
//grandparent.style.backgroundColor = "#333";

//funtion to do the same thing:
//changeColor(grandparent);
//function changeColor(element) {
    //element.style.backgroundColor = "#333";
//}