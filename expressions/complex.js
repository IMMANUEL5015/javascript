// Function Expression
const sum = function (x, y) {
    return x + y;
}

// Object Initializer Expression
const houseForRent = {
    rooms: 2,
    parlor: 1,
    bathrooms: 3,
    kitchen: 1
}

// Object Creation Expression
const data = new Object();
const tomsHouseForRent = Object.create(houseForRent);

// Array Initializer Expression
const names = ['Tommy', 'Oliver', 'Lancel'];

// Property Access Expression
houseForRent.rooms; // 2
houseForRent['parlor']; // 1
names[0]; // Tommy

// Invocation Expression
sum(2, 3);

// Parent Object reference
class AppError extends Error{
    constructor(message, statusCode, status) {
        super(message); // This refers to the parent(Error) Class
        this.statusCode = statusCode;
        this.status = status;
    }
}