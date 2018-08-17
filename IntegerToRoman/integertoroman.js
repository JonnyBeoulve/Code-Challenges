/*=======================================================================
// Question: Given an integer, convert it to a roman numeral.
//
// We will implement this using recursion.
=======================================================================*/
// First, we define a mapping for all possible roman numerals with their
// equivalent integer value.
let integerToRomanTranslation = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

// Loop through each roman numeral in our array until a matching or lesser valued is found.
// For each match, decrement the value of our recursive num by each amount previously
// matched. Essentially, this will append the maximum roman numeral equivalent for the passed
// in num until we arrive at 0, at which our recursion will return a value to the function call.
function integerToRoman(num) {
  if (num < 0 ) return new Error('Integer to roman value must be a positive number.')
  else if (num === 0) return '';
  else {
    for (let i in integerToRomanTranslation) {
      if (num >= integerToRomanTranslation[i][0]) {
        return integerToRomanTranslation[i][1] + integerToRoman(num - integerToRomanTranslation[i][0]);
      }
    }
  }
}

console.log(integerToRoman(3));
console.log(integerToRoman(475));
console.log(integerToRoman(3999));