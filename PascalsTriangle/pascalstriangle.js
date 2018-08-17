/*=======================================================================
// This function will allow a user to pass in the number of rows they
// would like to be returned from Pascal's Triangle. A Pascal's Triangle
// is a triangular array of binomial coefficients.
=======================================================================*/
function pascalsTriangle(numRows) {
    let pascalArray = []; // Array to store full pascal triangle

    for (let i = 0; i < numRows; i++) { // For each row
        pascalArray[i] = new Array(i + 1);

        for (let j = 0; j < (i + 1); j++) { // For each column
            if (j === i || j === 0) pascalArray[i][j] = 1; // For beginning and ending elements
            else pascalArray[i][j] = pascalArray[i - 1][j - 1] + pascalArray[i - 1][j];
        }
    }

    return pascalArray;
}

// Display psuedo 2D array in console.
function outputPascalsTriangle(pascalArr) {
    console.log('\n' + JSON.stringify(pascalArr) + '\n');
}

// Calculate triangles and then output them in console
let pasc5 = pascalsTriangle(5);
outputPascalsTriangle(pasc5);

let pasc10 = pascalsTriangle(10);
outputPascalsTriangle(pasc10);