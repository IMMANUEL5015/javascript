// Error

/*
 const error = new Error('An error occured.');
 throw error;
*/

// ReferenceError
/*console.log(book);*/

// SyntaxError
/*
if (true) {
    console.log('There is no problem up to this point.');
} el {
    console.log('There must have been a problem before getting to this point.');
}
*/

// RangeError
/*new Array(100000000000000000000000000000000000000000);*/
/*
function causeAnInternalError() {
    causeAnInternalError();
}
causeAnInternalError();
*/

// TypeError
/*
const sum = function(...numbers) {
    for (let num of numbers) {
        if (typeof num !== 'number') {
            throw new TypeError('All arguments must be numbers.');
        }
    }
    return numbers.reduce((prev, next) => prev + next, 0);
}
console.log(sum(1, 2, 3, 'Touche'));
*/

// Custom Exception

// 1. Extending the Error Class
/*
class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = String(statusCode).startsWith('2') ? 'success' : 'fail';
    }
}

const error = new AppError('Bad request.', 400);
console.log(error.status, error.message, error.statusCode);
*/

// 2. Creating an Independent Custom Exception
/*
function GeneralException(message) {
    this.name = 'GeneralException';
    this.message = message;
}

const exception = new GeneralException('An error occured.');
console.log(exception);
*/