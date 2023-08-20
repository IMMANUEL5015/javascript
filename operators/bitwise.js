// Bitwise AND

// 00000101 - 5 in binary
// 00001000 - 8 in binary
// 00000011 - 3 in binary
// 00000111 - 7 in binary

console.log(5 & 8); // 0
console.log(5 & 8 & 3); // 0
console.log(5 & 7); // 5

// Bitwise OR
console.log(5 | 8); // 13
console.log(5 | 8 | 3); // 15
console.log(5 | 7); // 7

// Bitwise XOR
console.log(5 ^ 8); // 13
console.log(5 ^ 8 ^ 3); // 14
console.log(5 ^ 7); // 2

// Bitwise NOT
console.log(~5); // -6
console.log(~8); // -9
console.log(~3); // -4