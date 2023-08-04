// Use null to initialize variables that will hold values later on.
let animal = null;

if (animal === null) {
    animal = {
        name: 'Cat',
        age: 6
    }
}

console.log(animal);

let amount = null;
const paidSalary = true;

if (paidSalary) {
    amount = '2000 dollars';
}

console.log(amount);

// Null and Undefined are similar but different
console.log(null == undefined); // true
console.log(null === undefined); // false