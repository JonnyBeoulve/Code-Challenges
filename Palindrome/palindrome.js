/*=======================================================================
// This function will test to determine if a passed-in string is
// a palindrome (same backwards as forward). We will use a second
// function that performs recursion on the string to reverse it.
=======================================================================*/
// Perform recursion to reverse string.
function reverseString(s) {
    if (s === '') return '';
    else return reverseString(s.substr(1)) + s.charAt(0);
}

function palindrome(str) {
    let reverseStr = reverseString(str); // Reverse string

    // Evaluate regular string vs reversed string
    if (str === reverseStr) return console.log(`\nTrue. ${str} is a palindrome.`);
    else return console.log(`\nFalse. ${str} is not a palindrome.`);
}

palindrome('abba');
palindrome('abbza');
palindrome('ababa');