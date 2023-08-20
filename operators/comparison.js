// Equality
const x = 3;
const y = 0;
console.log(x == 3); // true
console.log(x == '3'); // true
console.log(x == 3.1); // false
console.log(y == false); // true

// Strict Equality
console.log(x === 3); // true
console.log(x === '3'); // false
console.log(x === 3.1); // false
console.log(y === false); // false

// Inequality
const z = 4;
console.log(z != 4); // false
console.log(z != '4'); // false
console.log(z != 5); // true
console.log(y != false); // false
console.log(y != true); // true

// Strict Inequality
console.log(z !== 4); // false
console.log(z !== '4'); // true
console.log(z !== 5); // true
console.log(y !== false); // true
console.log(y !== true); // true

// Less Than
console.log(z < 5); // true
console.log(z < '5'); // true
console.log(z < 4); // false
console.log(z < 3); // false

// Less Than or Equal 
console.log(z <= 5); // true
console.log(z <= '5'); // true
console.log(z <= 4); // true
console.log(z <= 3); // false

// Greater Than
console.log(z > 5); // false
console.log(z > '5'); // false
console.log(z > 4); // false
console.log(z > 3); // true

// Greater Than or Equal 
console.log(z >= 5); // false
console.log(z >= '5'); // false
console.log(z >= 4); // true
console.log(z >= 3); // true

