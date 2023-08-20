// Global scope

const fullName = 'Alexander Corvinus';
age = 10000;

function printNameAndAge() {
    console.log(`${fullName} is ${age} years old.`);
}

printNameAndAge(); // Alexander Corvinus is 1000 years old.

// Local Scope

function addNum(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}

addNum(2, 4) //6
// console.log(num1) // Error
// console.log(sum) // Error

// Block Scope

if (true) {
    const fullName = 'Marcus Aurelius';
    console.log(fullName) // Marcus Aurelius
    var dateOfBirth = '121-04-26';
    console.log(dateOfBirth) // 121-04-26
}
console.log(fullName) // Alexander Corvinus
console.log(dateOfBirth) // 121-04-26