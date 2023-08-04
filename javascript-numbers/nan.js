//Failed arithmetic operations can produce NaN
const x = 10;
const y = '##';
const multiply = x * y;
console.log(multiply) // NaN

// Any operation involving NaN is NaN
const num = 10 / NaN;
console.log(num); // NaN

// NaN's are unique
console.log(NaN === NaN) // false

// The isNaN function is used to check if a value is not a number
console.log(isNaN(NaN)) // true
console.log(isNaN("RINGIM")) // true
console.log(isNaN(45)) // false