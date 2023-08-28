// Create a <p> element with red text, and append it to the document
const para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.style.color = "Red";
document.body.appendChild(para);


const h3title = document.createElement("h3");
h3title.innerText = "I'm a blue h3!";
h3title.style.color = "Blue";
document.body.appendChild(h3title);
