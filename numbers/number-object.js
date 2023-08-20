// Some Number Object Properties
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Number Methods
console.log(Number.parseInt("5.895")); // 5
console.log(Number.parseFloat("8.5758")); // 8.5758
console.log(Number.isNaN("HELLO")) // false
console.log(Number.isNaN(NaN)) // true
console.log(Number.isSafeInteger(18)) // true;

// Number Prototype Methods
console.log(5.6789.toFixed()); // 6
console.log(5.2789.toFixed()); // 5
console.log(5.6789.toFixed(1)); // 5.7
console.log(5.6789.toFixed(2)); // 5.68

console.log(5.6789.toPrecision()); // 5.6789
console.log(5.2789.toPrecision()); // 5.2789
console.log(5.6789.toPrecision(1)); // 6 (1 significant digit)
console.log(5.6789.toPrecision(2)); // 5.7 (2 significant digits)
console.log(5.6789.toPrecision(3)); // 5.68 (3 significant digits)


