// Let us create a class that allows us to validate inputs as positive integers

class ValidateNums{
    constructor(numOne, numTwo) {
        this.numOne = numOne;
        this.numTwo = numTwo;
    }

    validate(){
        if (typeof this.numOne !== "number" || typeof this.numTwo !== "number") {
            return false;
        }
    
        if (this.numOne <= 0 || this.numTwo <= 0) {
            return false;
        }
    
        if (String(this.numOne).includes(".") || String(this.numTwo).includes(".")) {
            return false;
        }
        return true;
    }
}

console.log(new ValidateNums(5, 6).validate()) // true
// console.log(new ValidateNums(5, 6.9).validate()) // false

// Now, let us create a class for adding validated numbers

class Addition extends ValidateNums {
    constructor(numOne, numTwo) {
        super(numOne, numTwo);
        this.numOne = numOne;
        this.numTwo = numTwo
    }

    add() {
        if (this.validate()){
            return this.numOne + this.numTwo;
        } else {
            return false;
        }
    }
}

console.log(new Addition(2, 5).add());
// console.log(new Addition(2, 5.9).add()); // false

/* 
    Notice that the addition function inherits the capabilities of the validation class.
    Behind the scenes, this ability to inherit functionality is based on a feature that
    JavaScript has, called prototypal inheritance.
*/

// Now you can even create a class to perform division operations and still use the validation

class Division extends ValidateNums {
    constructor(numOne, numTwo) {
        super(numOne, numTwo);
        this.numOne = numOne;
        this.numTwo = numTwo
    }

    divide() {
        if (this.validate()){
            return this.numTwo / this.numOne;
        } else {
            return false;
        }
    }
}

console.log(new Division(2, 10).divide());
// console.log(new Division(2, 5.9).add()); // false