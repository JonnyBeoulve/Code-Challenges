/*======================================================================
// Below we will debug several commonly encountered issues in
// JavaScript to clarify concepts.
======================================================================*/
// In this function we pass in an object with one value. When we do a
// direct comparison we return false. This is because during the
// evaluation the references for the objects are compared, not the 
// values. In JavaScript all objects have their own reference, even
// if their values are identical.
function checkIfFalconHeavy(rocket) {
    if (rocket == { type: 'Falcon Heavy' }) return console.log('\nFalcon Heavy confirmed.');
    else return console.log('\nRocket isn\'t Falcon Heavy.');
}

checkIfFalconHeavy({ type: 'Falcon Heavy' });

// Below is how we avoid the problem above
function checkIfFalconHeavyDebugged(rocket) {
    if (rocket.type === 'Falcon Heavy' ) return console.log('\nFalcon Heavy confirmed.');
    else return console.log('\nRocket isn\'t Falcon Heavy.');
}

checkIfFalconHeavyDebugged({ type: 'Falcon Heavy' });

// In this function we test if an object is empty with no properties.
// However, once we pass in an empty object it passes as true.
// The reason for this is empty objects (and arrays) pass as true.
// For reference, here are examples of many things tha would similarly
// evaluate as truthy: true, {}, [], 7, -7 'rocket. In contrast, these are
// values that will evaluate as falsy: false, null, undefined, 0, NaN,
// ''.
function checkIfEmptyObject(object) {
    if (!object) return console.log('\nObject is empty.');
    else if (object) return console.log('\nObject is not empty.');
}

let emptyObject = {};
checkIfEmptyObject(emptyObject);