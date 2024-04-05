//  script.js for thePurpleChurch in practice_repo 

//set color variables for css pageload
document.documentElement.style.setProperty('--mainColor', 'hotpink');
document.documentElement.style.setProperty('--background', 'black');

// buttons
const button1=document.getElementById('button1');
button1.addEventListener("click", function() {
    console.log("Clicked button 1");
    //change color variables on click
    document.documentElement.style.setProperty('--mainColor', 'goldenrod');
    document.documentElement.style.setProperty('--background', 'black');
    welcomeText.innerText="Welcome to the Golden Church";
});
const button2=document.getElementById('button2');
button2.addEventListener("click", function() {
    console.log("Clicked button 2");
    document.documentElement.style.setProperty('--mainColor', 'hotpink');
    document.documentElement.style.setProperty('--background', 'black');
    welcomeText.innerText="Welcome to the Purple Church";
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

const pinkBoxLeftText = document.querySelector('.pinkBoxLeftText');
pinkBoxLeftText.innerText="Lorem ipsum dolor sit amet consectetur adipisicing \
elit. Sunt voluptate, accusantium enim quos fugit vel earum? \
Expedita voluptates, natus nostrum nihil impedit ad deserunt.";

const blackBox1 = document.getElementById('blackBox1');
blackBox1.innerText="Lorem ipsum dolor sit amet consectetur adipisicing \
elit. Maxime, adipisci. Enim fugiat temporibus explicabo doloremque \
debitis labore optio minima tenetur rerum modi, fuga consectetur \
magnam, officia magni sed facilis hic incidunt itaque repudiandae! \
Provident illum ipsam, soluta dignissimos alias voluptate dolorem \
consequatur aperiam aliquam ut, ipsa ratione fugit asperiores \
ipsum dolor sit amet consectetur adipisicing beatae?";

/*
const blackBox2 = document.getElementById('blackBox2');
blackBox2.innerText="Lorem ipsum dolor sit amet consectetur adipisicing \
elit. Maxime, adipisci. Enim fugiat temporibus explicabo doloremque \
debitis labore optio minima tenetur rerum modi, fuga consectetur \
magnam, officia magni sed facilis hic incidunt itaque repudiandae! \
Provident illum ipsam, soluta dignissimos alias voluptate dolorem \
consequatur aperiam aliquam ut, ipsa ratione fugit asperiores \
ipsum dolor sit amet consectetur adipisicing beatae?";
*/
const pinkBox1 = document.getElementById('pinkBox1');
pinkBox1.innerText="Lorem ipsum dolor sit amet consectetur adipisicing \
elit. Maxime, adipisci. Enim fugiat temporibus explicabo doloremque \
debitis labore optio minima tenetur rerum modi, fuga consectetur \
magnam, officia magni sed facilis hic incidunt itaque repudiandae! \
Provident illum ipsam, soluta dignissimos alias voluptate dolorem \
consequatur aperiam aliquam ut, ipsa ratione fugit asperiores \
ipsum dolor sit amet consectetur adipisicing beatae?";

/*
const mainText=document.querySelector('.main-text');
//mainText.innerText="Success";

const secondText=document.querySelector('.second-text');
//secondText.innerText="Success";

const thirdText=document.querySelector('.third-text');
//thirdText.innerText="Success";
*/