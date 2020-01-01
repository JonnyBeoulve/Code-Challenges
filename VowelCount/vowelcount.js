/*=======================================================================
// Here we will create and implement a stack using JavaScript. This is
// an abstract collection that will perform Last-In First-Out
// procedure with passed-in data. Unlike queue, it also includes the
// peek method, which allows the system to view the entity at the end
// of the stack to determine its content before modifying the stack.
=======================================================================*/
function vowelCounter(str) {
  const vowels = ["a", "e", "i", "o", "u"]; // Array of vowels for evaluation
  let count = 0; // Increment per vowel found

  // Loop through each letter of string and check if equal to vowel
  for (let letter of str) {
    if (vowels.indexOf(letter) > -1) count++;
  }

  return console.log(`\nThere are ${count} vowels in '${str}'.`);
}

vowelCounter("Vowels!");
vowelCounter("Mississippi");
vowelCounter("Real estate");
