let output = document.querySelector('.output');
output.innerHTML = '';
for(let i = 10; i > -1; i--) {
    const para = document.createElement('p');
    if(i != 0) {
        para.textContent = `Countdown: ${i}`;
        output.appendChild(para);
    }
    else {
        para.textContent = "Blast Off!";
        output.appendChild(para);
    }
}