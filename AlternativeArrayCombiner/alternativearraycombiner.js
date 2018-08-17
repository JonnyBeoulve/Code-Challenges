/*======================================================================
// This function will take in two arrays as arguments and combine them
// alternatively, placing one element from each into a new array
// at a time until an equal amount of elements from each have evenly
// populated a new array. Any leftover elements from the larger array
// will then be pushed to the end.
======================================================================*/
function alternativelyCombineArrays(arr1, arr2) {
    let combinedArray = []; // Array that stores combination of both passed-in arrays
    let currentIndex = 0; // Begin function-scoped index at 0

    // Alternative pushing in elements to combinedArray
    for (currentIndex; arr1[currentIndex] && arr2[currentIndex]; null) {
        combinedArray.push(arr1[currentIndex]);
        combinedArray.push(arr2[currentIndex]);
        currentIndex++;
    }

    // If any elements leftover in either array, push those in, too
    if (arr1[currentIndex]) {
        for (currentIndex; currentIndex < arr1.length; currentIndex++) {
            combinedArray.push(arr1[currentIndex]);
        }
    } else if (arr2[currentIndex]) {
        for (currentIndex; currentIndex < arr2.length; currentIndex++) {
            combinedArray.push(arr2[currentIndex]);
        }
    }

    return combinedArray;
}

// This function will print all values within an array
logArrayValues = (arr) => {
    console.log("=== VALUES IN ARRAY ===");
    for (let i = 0; i < arr.length; i++) console.log(`${i + 1}. ${arr[i]}`);
    console.log("=======================");
}

// Create a combined array and then print it
let combo1 = alternativelyCombineArrays(['a', 'b', 'c'], ['1', '2', '3']);
logArrayValues(combo1);

// Create an combined array out of two asymmetric arrays and then print it
let combo2 = alternativelyCombineArrays(['d', 'e', 'f', 'g', 'h', 'i'], ['4', '5']);
logArrayValues(combo2);