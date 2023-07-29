console.log(fullName); //undefined - no error is thrown

var fullName = 'Alexander Corvinus';
console.log(fullName) // Alexander Corvinus

function printName() {
    console.log(fullName);

    var fullName = 'Marcus Aurelius';
    console.log(fullName);
}

printName(); 
//1. undefined
//2. Marcus Aurelius

// console.log(age); // Error
let age = 90;
console.log(age) // 90
