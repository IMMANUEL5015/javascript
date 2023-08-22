const nums = [1, 2, 3];

const sum = function (x, y, z) {
    return x + y + z;
}

console.log(sum(...nums)) // 6

const moreNums = [...nums, 4, 5, 6];
console.log(moreNums) // [1, 2, 3, 4, 5, 6];

const houseForRent = {
    rooms: 2,
    parlor: 1,
    bathrooms: 3,
    kitchen: 1
}

const tomsHouseForRent = {
    nameOfTenant: 'Tom Hardy',
    ...houseForRent
}

console.log(tomsHouseForRent); // {nameOfTenant: 'Tom Hardy',rooms: 2, parlor: 1, bathrooms: 3, kitchen: 1}