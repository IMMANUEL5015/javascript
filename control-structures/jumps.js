// Breaks

// Break in a loop
/*
function testBreak(x) {
    let i = 0;

    do {
        if (i === 3) {
            break;
        }
        i++;
    } while(i < 6);

  return i * x;
}

console.log(testBreak(5)); // 15
*/

// Break in switch statements
/*
const food = 'Pizza';

switch (food) {
    case 'Sushi':
        console.log('Sushi is originally from Japan.');
        break;
    
    case 'Pizza':
        console.log('Pizza is originally from Italy.');
        break;

    default:
        console.log('I have never heard of that dish.');
}
*/

// Break in block statements
/*
outerBlock: {
    innerBlock: {
      console.log("1");
      break outerBlock; // breaks out of both innerBlock and outerBlock
      console.log(":-("); // skipped
    }
    console.log("2"); // skipped
  }
*/

// Continue

// Continue in a loop
/*
let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}

console.log(n); // 12
*/

// Continue with a label
/*
let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkIAndJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}

//i: 0
//j: 8
//7 is odd.
//j: 7
//i: 1
//j: 6
//5 id odd.
//j: 5
//i: 2
//i = 3
//j = 4
//i: 3
//i = 4
//j = 4
*/

outerLabel: {
    console.log("Outer Label Start");
    innerLabel: for (let i = 0; i < 10; i++) {
        if (i === 0) {
            console.log("Inner Label Start");
        }

        if (i > 1) {
            continue innerLabel;
        }
        console.log("Inner Label Again");
    }
    console.log("Outer Label End");
}