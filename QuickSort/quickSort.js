/*
 * QuickSort is a sorting algorithm that uses a divide
 * and conquer approach for efficient performance. In this
 * file we will implement QuickSort using JavaScript ES6.
 *
 * Runtime: O(n log(n)) Worst Case: O(n^2) Memory: O(log(n))
 */
const quicksort = arr => {
    // Base case
    if (!arr.length) {
      return arr
    }
  
    // We select the first element in the passed-in array as the pivot.
    // When sorting we will move elements of lower value than the pivot
    // to its left, and elements larger to the right. Note that since
    // the pivot is not guaranteed to be the median, worst case is
    // O(n^2), and can occur when the pivot is a lowest or highest value.
    let pivot = arr[0]
    // Array for housing "smaller" elements during sort
    let left = []
    // Array for housing "larger" elements during sort
    let right = []
  
    // We start at index 1 since 0 is the pivot element. If the element is
    // is less than pivot, push to left. If larger, push to right.
    for (let i = 1; i < arr.length; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
  
    // QuickSort most often uses recursion, as we demonstrate here. The code 
    // below concatenates the left (smaller), pivot, and right (larger) elements
    // on every pass until sort is achieved.
    return quicksort(left).concat(pivot, quicksort(right))
  }
  
  const arr = [31, 54, 12, 32, 2, 67, 25, 11, 75]
  const sortedArr = quicksort(arr)
  
  console.log('Pre-sorted array: ', arr)
  console.log('Post-sorted array: ', sortedArr)