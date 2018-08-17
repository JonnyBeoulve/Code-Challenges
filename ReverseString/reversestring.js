/*=======================================================================
// This function will simply reverse a string in JavaScript.
=======================================================================*/
function reverseString(str) {
    let reversedString = '';

    if (str.length < 2) return undefined;

    for (let i = str.length - 1; i >= 0; i--) reversedString = reversedString + str[i];

    return reversedString;
}

// Execute reverseString and log the returned string
console.log(reverseString('Hello World!'));

// Test disallowed string length
console.log(reverseString('H'));
