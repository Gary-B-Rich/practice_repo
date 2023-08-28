// Create a <p> element with red text, and append it to the document
const para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.style.color = "Red";
document.body.appendChild(para);


// Create an <h3> with blue text, and append it 
const h3title = document.createElement("h3");
h3title.innerText = "I'm a blue h3!";
h3title.style.color = "Blue";
document.body.appendChild(h3title);


// Create a <div> with blk border & pink backround.  DON'T append.
const div1 = document.createElement("div");
div1.style.border = "2px solid black";
div1.style.backgroundColor = "pink";
    // Create <h1> append inside <div>
    const h1title = document.createElement("h1");
    h1title.innerText = "I'm in a div";
    div1.appendChild(h1title);
    // Create <p> append inside <div>
    const para2 = document.createElement("p");
    para2.innerText = "ME TOO!";
    div1.appendChild(para2);
// Append <div> with <h1> & <p> to document
document.body.appendChild(div1);


// Style .content class from the html
const content = document.querySelector('.content').style;
content.color = 'purple';
