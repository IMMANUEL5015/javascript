// charAt
const firstName = 'Alexander';
console.log(firstName.charAt(3)); // x
console.log(firstName.charAt(-2)); // ""
console.log(firstName.charAt(-19)); // ""

//indexOf
console.log(firstName.indexOf('and')); // 4
console.log(firstName.indexOf('and', 0)); // 4

// lastIndexOf
console.log(firstName.lastIndexOf('and')); // 4

//localeCompare
const animalOne = 'Dogs';
const animalTwo = 'Cats';
console.log(animalOne.localeCompare(animalTwo)) // 1 - because D comes after C.
console.log(animalTwo.localeCompare(animalOne)) // -1 (because C comes before D).
console.log(animalTwo.localeCompare(animalTwo)) // 0 (because they are thesame).

// concat
console.log(animalOne.concat(' and ', animalTwo, ' are enemies.'));

// slice
console.log(animalTwo.slice(1, 3)); // at
console.log(firstName.slice(3)); // xander
console.log(animalOne.slice(-3, -1)); // og

// substring
console.log(animalTwo.substring(1, 3)); // at
console.log(firstName.substring(3)); // xander
console.log(animalOne.substring(-3, 3)); // Dog

// lowercase
console.log(animalOne.toLowerCase()) // dogs
console.log(animalOne.toUpperCase()) // DOGS

// trim
console.log('   Leonardo Davinci   '.trim()); // Leonardo Davinci

// replace
const tvShow = 'The Afrow';
const correctShow = tvShow.replace('f', 'r');
console.log(correctShow); // The Arrow

const birthday = '1994-10-23';
const birthYearAndMonth = birthday.split('-', 2);
console.log(birthYearAndMonth); // ['1994', '10']