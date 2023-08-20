// Write a program for calculating the square root of any positive integer.

// Declarative way
function findSquareRootDeclarative(num) {
    return Math.sqrt(num).toFixed(3);
}

console.log(findSquareRootDeclarative(15));
/*
    Notice that you did not tell the computer the exact steps to follow to find the square root.
    All you did was to tell an inbuilt JavaScript method that you would like to know the square
    root of a specific number.
*/

function findSquareRootImperative(num) {
    let x0 = num / 2;
    let xn = (x0 + num / x0) / 2;
    
    while (x0 - xn > 0.4) {
        x0 = xn;
        xn = (x0 + num / x0) / 2;
    }

    return xn;
}

console.log(findSquareRootImperative(15)); //3.873812
/*
    Notice the step by step instructions of what the computer must execute to 
    find the square root of a given number.
*/