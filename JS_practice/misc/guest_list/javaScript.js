// javaSctipt.js for guest_list directory

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for(let person in people) {
    if(person == "Phil" || person == "Lola") {
        //stuff happens
        // refused.textContent += ;
    }
    else {
        //other stuff happens
        // admitted.textContent += ;
    }
}


