/*=======================================================================
// This function will allow a user to pass in two arguments indicating
// beginning and ending fibonacci numbers. The function will determine
// all fibonacci numbers between and included the passed in numbers.
=======================================================================*/
function findFibonacciRange(beginningNum, endingNum) {
    let fibRangeArray = []; // An array that stores all fibonacci numbers found in the range
    let currentNum = 1; // The current number being evaluated
    let previousNum = 0; // The previous number to be evaluated

    // Confirm that beginning number is smaller than ending number before proceeding
    if (beginningNum > endingNum) {
        console.log('Error: Beginning number must be smaller than ending number.');
        return;
    }

    if ((beginningNum < 1) || (endingNum < 1)) {
        console.log('Error: Values must be positive.');
        return;
    }

    // Loop through each fibonacci number, determining if the current value falls within the
    // range of the user's input numbers.
    for (let i = 1; i <= endingNum; i++) {
        let tempCurrentNum = currentNum;

        if ((currentNum >= beginningNum) && (currentNum <= endingNum)) {
            fibRangeArray.push(currentNum);
        }

        currentNum = currentNum + previousNum;
        previousNum = tempCurrentNum;
    }

    return fibRangeArray;
}

/*=======================================================================
// This function will print out the range for the user to see.
=======================================================================*/
function printFibonacciRange(fibonacciRange) {
    for (let i = 0; i < fibonacciRange.length; i++) {
        if (i === 0) console.log("\n=== ALL NUMBERS IN FIBONACCI RANGE ===\n");
        console.log(`\t\t${fibonacciRange[i]}\n`);
        if (i === fibonacciRange.length - 1) console.log("======================================\n");
    }
}

let fib3to8 = findFibonacciRange(3, 8);
printFibonacciRange(fib3to8);

let fib21to144 = findFibonacciRange(21, 144);
printFibonacciRange(fib21to144);