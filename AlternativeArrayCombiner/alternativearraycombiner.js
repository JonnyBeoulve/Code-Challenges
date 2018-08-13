/*======================================================================
// This function will take in two arrays as arguments and combine them
// alternatively, placing one element from each into a new array
// at a time until an equal amount of elements from each have evenly
// populated a new array.
======================================================================*/
alternativelyCombineArrays = (arr1, arr2) => {
    let combinedArray = [];

    for (let i = 0; arr1[i] && arr2[i]; i++) {
        combinedArray.push(arr1[i]);
        combinedArray.push(arr2[i]);
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
let combo = alternativelyCombineArrays(['a', 'b', 'c'], ['1', '2', '3']);
logArrayValues(combo);