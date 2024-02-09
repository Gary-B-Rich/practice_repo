// script.js for arrayMethods
// tutorial video: https://www.youtube.com/watch?v=R8rmfD9Y5-c

const array = [1, 2, 3, 4, 5];
const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 200 },
    { name: 'Album',    price: 10  },
    { name: 'Book',     price: 5   },
    { name: 'Phone',    price: 500 },
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25  }
];

// original array
console.log(items);
// use .filter() method to create a new array of items with prices
// less than or equal to 100
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
// the new filtered array
console.log(filteredItems);
//******************************************* 

// .map() method for new array of items by name
const itemNames = items.map((item) => {
    return item.name;
})
// mapped array
console.log(itemNames);
//*******************************************

// .filter() for specific item name
const foundItem = items.filter((item) => {
    return item.name === 'Book';
})
// filtered array
console.log(foundItem);
//*******************************************

// .some() checks entire object for one case of param, 
// returns true or false
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
})
console.log(hasInexpensiveItems);
//*******************************************

// .every() checks ALL object cases match
const allInexpensiveItems = items.every((item) => {
return item.price <= 100;
}) 
console.log(allInexpensiveItems);
//*******************************************

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0) // the zero is for the starting point of the reduce function
console.log(total);
//*******************************************

// includes() checks to see if an array has a value
const includesTwo = array.includes(2);

console.log(includesTwo);
//*******************************************

