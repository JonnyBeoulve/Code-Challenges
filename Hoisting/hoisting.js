/*=======================================================================
// Below we will look at hoisting and how it affects JavaScript in
// ES5 versus ES6.
=======================================================================*/
// In the below example we call the hoistingFunction() function before it 
// is declared. However, JavaScript reads the declaration first, allowing 
// this backwards order of operations to work
hoistingFunction();

function hoistingFunction() { console.log("\nhoistingFunction was called before being declared."); };

// Arrow functions work differently. If you call an arrow function before
// it is declared, you will receive the error: '[FUNCTIONNAME] is not
// defined.' Therefore, you will want to place all arrow function
// declarations before their respective calls, as seen below.
hoistingArrowFunction = () => { console.log("\nhoistingArrowFunction() was called after being declared."); };

hoistingArrowFunction();

// Now we will look at how JavaScript hoisting affects variables. Note
// below how we assign the value of 5 to x before it is ever declared.
// In addition, we call upon its value within console.log before it
// is ever declared. Then, at the bottom of the function scope we 
// declare the variable. Yet, it works, and the console.log will
// indeed output the value of 5.
hoistingVarVariables = () => {
    x = 5;

    console.log(`\nThe variable x declared using var equals ${x}.`);

    var x;
}

hoistingVarVariables();

// The hoisting encountered above doesn't translate to the let keyword
// introduced in ES6. Thus, we will need to place our declarations
// before assignments or calls when using let. Below is the correct
// order of operations.
hoistingLetVariables = () => {
    let y;

    y = 5;
    
    console.log(`\nThe variable y declared using let equals ${y}.`);
}

hoistingLetVariables();