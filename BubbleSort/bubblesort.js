/* Although sorting can be achieved simply by using JavaScript sort method,
in this file I will demonstrate a simple bubble sort with a passed in array of numbers. */
function sortArrOfNums(arr) {
  let swapped; // Will flip to true when a swap occurs during a pass. Resets during each pass.

  // Run the loop until no swaps occur during a pass.
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tempValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempValue;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Example outputs.
console.log(sortArrOfNums([7, 2, 15, 12, 8, 4, 5, 1, 3, 19]));
console.log(sortArrOfNums([3, 2, 1, 3, 2, 1]));
