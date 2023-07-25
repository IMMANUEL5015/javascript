const numOne = 10
const numTwo = 20;
// Notice the two valid statements above. Only the second one ends with a sem-colon.

function divide(numOne, numTwo){
    return numTwo / numOne;
}

if (false) {
    console.log(numOne + numTwo);
    console.log("Two statements are grouped in a code block");
} else {
    console.log(numOne * numTwo);
    console.log("Two statements are grouped in a code block");
}
// You can group multiple statements together using a code block.

divide(10, 20);
// Though the function was declared at the top, it is not executed till the bottom