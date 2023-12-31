// If Else Conditionals
const weight = 84;

// If Condition with a single statement
if (weight <= 60)
    console.log('Weight is small');

// If condition with multiple statements
if (weight <= 60) {
    console.log('Weight is small');
    console.log('Weight is not in the middle range');
    console.log('Weight is not heavy');
}

// If-Else statement
if (weight <= 60) {
    console.log('Weight is small');
} else {
    console.log('Weight is not small');
}

// Multiple If-Else Statements
if (weight <= 60) {
    console.log('Weight is small');
} else if (weight > 60 && weight <= 90) {
    console.log('Weight is in the middle range');
} else {
    console.log('Weight is quite heavy.');
}

// Switch Statements
const password = 'qwerty';

switch (password) {
    case password === true:
        console.log('Password is incorrect');
        console.log('The value passed is false');
        break;

    case 'qwerty':
        console.log('Password is correct');
        console.log('The value passed is qwerty');
        break;
    
    default:
        console.log('Password is incorrect');
        console.log('We do not know the passed value');
}