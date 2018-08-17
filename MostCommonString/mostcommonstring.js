/*=======================================================================
// This function will take in an array of strings and evaulate them to
// determine what word recurs the most often within the array. This
// string will be returned from the function.
=======================================================================*/
function findMostCommonString(arrayOfStrings) {
    stringCountArray = []; // Array of objects that will store one of each word along with a counter
    winningStringIndex = 0; // The current winning index, used in the second for loop

    // Here we will loop through every word passed in the array. We will compare each word with words present
    // in our function-scoped array of objects, which stores one of each word along with a count. When no match
    // occurs, create a new object in the array with the word along with a default count of 1.
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let matched = false; 
        for (let j = 0; j < stringCountArray.length; j++) {
            if (arrayOfStrings[i] === stringCountArray[j].word) {
                stringCountArray[j].count++;
                matched = true;
                break;
            }
        }
        if (!matched) stringCountArray.push({ word: arrayOfStrings[i], count: 1}); // When no match occurs create new object in array
    }

    // Determine which word has the largest count
    for (let i = 0; i < stringCountArray.length; i++) {
        if (stringCountArray[i].count > stringCountArray[winningStringIndex].count) winningStringIndex = i;
    }

    return stringCountArray[winningStringIndex].word;
}

// Evaluate several arrays of strings to demonstate functionality
let array1 = ['exerciser', 'workout', 'endless', 'workout', 'determination', 'fight', 'barbell'];
let array2 = ['taco', 'sandwich', 'sandwich', 'spaghetti', 'dinner', 'fork', 'dinner', 'sandwich', 'turkey'];
let array3 = ['hope', 'dream', 'courage', 'commitment', 'honor', 'vigilance', 'determination', 'patience', 'thoughtfulness', 'dream'];
console.log(findMostCommonString(array1));
console.log(findMostCommonString(array2));
console.log(findMostCommonString(array3));