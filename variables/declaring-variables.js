// Using the var keyword
var name;
var age, occupation;
var country = 'Sweden';
var first_name = 'Alexander', last_name = 'Corvinus';

// without a variable keyword
son = 'Marcus';

// with let and const
let restaurant = 'La Mango';
const bestFood = ['Fried Rice', 'Moi Moi', 'Chicken', 'Salad'];

// Non Block Scoping
if (true) {
    var icecream = 'Vanilla';
}
console.log(icecream) // Vanilla

// Block Scoping
if (true) {
    const soap = 'Eva';
}
// console.log(soap) // ERROR!