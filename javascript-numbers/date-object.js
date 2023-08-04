// Creating dates

console.log(new Date()); // Returns the current date
console.log(new Date(1691118800327)); // 2023-08-04T03:13:20.327Z
console.log(new Date('2023-08-04')); // 2023-08-04T00:00:00.000Z
console.log(new Date('2023', '00', '04', '18', '15', '30', '500')); // 2023-01-04T17:15:30.500Z

// Some Date Methods
const aDate = new Date(1691032400327);
console.log(aDate.getTime()) // 1691032400327
console.log(aDate.getMilliseconds()) // 327
console.log(aDate.getSeconds()) // 20
console.log(aDate.getMinutes()) // 13
console.log(aDate.getHours()) // 4 (subtract 1 from the return value to get the actual hour)
console.log(aDate.getFullYear()) // 2023
console.log(aDate.getMonth()) // 7 (add 1 to the return value to get the actual month)
console.log(aDate.getDay()) // 4 (subtract 1 from the return value to get the actual day of the week)
console.log(aDate.getDate()) // 3

