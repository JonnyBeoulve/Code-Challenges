/*=======================================================================
// This function will return a reference to a function that contains
// a closure used for outputting a concatenated first and last name.
=======================================================================*/
function fullName(fName, lName) {
    // Concatenate passed-in names
    let fullName = `${fName} ${lName}`;
    
    // This closure accesses a variable outside its block scope
    let outputFullName = () => console.log(fullName);

    return outputFullName;
}

// Create instance and then call it
let jonny = fullName('Jonny', 'Beoulve');
jonny();