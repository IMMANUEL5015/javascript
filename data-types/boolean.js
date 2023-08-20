// Booleans can be assigned

const validName = true;

// Booleans can result from a comparison
console.log(validName === 'Corvinus') // false

// Booleans can be used in control flow statements
if (validName) {
    console.log('Name is valid.');
} else {
    console.log('Name is invalid.')
}

// Conditionals convert values to booleans
let text = "";
if (!text) {
    console.log("Text is empty.");
}

if ({name: 'cat'}) {
    console.log('We have a cat in the house.');
}