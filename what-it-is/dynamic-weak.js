// JavaScript is dynamically typed - Take a look at the function below.

const addTwoNumbers = (numOne, numTwo) => {
    return numOne + numTwo;
}

// Now calling the functions
console.log(addTwoNumbers(1, 2)) // 3
console.log(addTwoNumbers(1, "2")) // "12"

/* 
    Notice that there is no actual specification of the input types for the function. This is why 
    you can pass a number value or a string value to the function. Also, notice that there is no 
    specified type for the function's return value, which is why it can return a number and can 
    also return a string..
*/


// JavaScript is weakly typed - consider the expression below

console.log(1 == 1) // true
console.log(1 == "1") // true - JavaScript converts the Number 1 to a String 1 and does the comparison.
console.log(1 + "2") // "12" - JavaScript converts the Number 1 to a String "1" and performs concatenation instead of addition.

/* 
    As you can see, JavaScript performs what is known as type coercion when an operation
    involving multiple values of different types is being performed. Type coercion is the process
    of converting a value of one type to the same value of a different type in order to complete an operation.
*/