// While Loop

/*
let counter = 0;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
*/

// Do-While Loop
/*
let num = 0
do {
    console.log(num);
    num++;
} while(num <= 5);
*/

// For Loop
/*
for(let i = 0; i <= 6; i+=2){
    console.log(i);
}
*/

// For In Loop
/*
const person = {
    name: 'Alexander Corvinus', 
    occupation: 'Vampire Hunter',
    age: 1000,
    children: 2,
    relationship: 'Widower'
}

Object.defineProperty(person, 'status', {
    value: 'dead',
    configurable: true,
    enumerable: false,
    writable: false
});

for (let prop in person) {
    console.log(`${prop} is ${person[prop]}`);
}
*/

// For Of Loop

// Iterating over an array
/*
const nums = [1, 2, 3, 3, 4, 4, 5];

for (let num of nums) {
    console.log(num);
}
*/

// Iterating over a set
/*
const nums = new Set([1, 2, 3, 3, 4, 4, 5]);
for (let num of nums) {
    console.log(num);
}
*/

// Iterating over a map
/*
const aMap = new Map();
aMap.set('a', -1);
aMap.set('a', -2);
aMap.set('a', 1);
aMap.set('b', -3);
aMap.set('b', 2);
aMap.set('c', 3);
aMap.set('d', 4);
aMap.set('e', 5);
aMap.set('f', 6);
aMap.set('g', 7);

for (let pair of aMap) {
    console.log(pair);
}
*/

// For await loop
async function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
  
(async function () {
    for await (const num of foo()) {
        console.log(num);
    }
})();