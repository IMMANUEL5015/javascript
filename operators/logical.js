// AND

const x = true, y = 'Mike', z = false;
console.log(x && y); // Mike
console.log(y && x); // true
console.log(z && y); // false
console.log(x && z == false && 1); // 1

// OR
console.log(x || y); // true
console.log(y || x); // Mike
console.log(z || y); // Mike
console.log(x || z == false || 1); // true

// NOT
console.log(!x); // false
console.log(!y); // false
console.log(!z); // true
console.log(!(x || z == false || 1)); // false