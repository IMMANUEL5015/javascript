// Symbols are created using the symbol factory function

const mySymbol = Symbol('mySymbol');
console.log(mySymbol); // Symbol(mySymbol)

// Symbols are unique
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 === symbol2) // false

// Symbols are used to create unique property keys
const name1 = Symbol('name');
const name2 = Symbol('name');
const name3 = Symbol('name');

const fruits = {
    [name1]: 'Apple',
    [name2]: 'Mango',
    [name3]: 'Orange',
};

console.log(fruits[name2]); // Mango