/*=======================================================================
// This function will perform factorial using recusion in JavaScript.
=======================================================================*/
factorial = (n) => {
    if (n < 0) return undefined;
    else if ((n % 1) != 0) return undefined;
    else if ((n === 1) || (n === 0)) return 1;
    else return n * factorial (n - 1);
}

// Perform factorial on various numbers and output their value for demonstration
let f10 = factorial(10);
console.log(f10);

let f5 = factorial(5);
console.log(f5);

let f1 = factorial(1);
console.log(f1);

let f0 = factorial(0);
console.log(f0);

let fNegative1 = factorial(-1);
console.log(fNegative1);