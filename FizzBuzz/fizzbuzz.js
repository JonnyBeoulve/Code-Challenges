/*=======================================================================
// This quintessential coding challenge problem asks the user the 
// following:
// "Write a program that prints the numbers from 1 to 100. But for 
// multiples of three print “Fizz” instead of the number and for the 
// multiples of five print “Buzz”. For numbers which are multiples of 
// both three and five print “FizzBuzz”."
=======================================================================*/
function fizzBuzz() {
  console.log("==== Begin Fizz Buzz ====");
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log(`${i}. Fizz Buzz`);
    else if (i % 3 === 0) console.log(`${i}. Fizz`);
    else if (i % 5 === 0) console.log(`${i}. Buzz`);
    else console.log(`${i}.`);
  }
  console.log("=========================");
}

// Call fizzBuzz
fizzBuzz();
