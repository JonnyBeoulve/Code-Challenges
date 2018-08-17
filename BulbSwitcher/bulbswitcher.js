/*=======================================================================
// The question is as follows: There are n bulbs that are initially off
// You first turn on all the bulbs. Then, you turn off every second
// bulb. On the third round, you toggle every third bulb (on -> off and
// off -> on). On the nth round, you only toggle the last bulb. Find out
// how many bulbs are on after n rounds.
=======================================================================*/
function bulbSwitcher(n) {
    let bulbArray = []; // Empty array for bulbs
    let round = 1; // Determine which round
    let bulbOnCount = 0; // Counter for bulbs on

    // Prevent anything less than 1 from being passed in
    if (n < 1) return undefined;

    // Fill array with false values (false = bulbs off)
    for (let i = 0; i < n; i++) bulbArray.push(false);

    // Perform loop and switch n times
    for (let i = 0; i < n; i++) {

        // Switch moves from 1 -> 2 -> 3 -> 1 etc..
        // Case 1: Set all bulbs to true
        // Case 2: Set every 2nd bulb to false
        // Case 3: Set every 3rd bulb to the opposite of its value
        switch (round) {
            case 1:
                for (let j = 0; j < n; j++) bulbArray[j] = true;
                round = 2;
                break;
            case 2:
                for (let j = 1; j <= n; j++) {
                    if (j % 2 === 0) bulbArray[j - 1] = false;
                }
                round = 3;
                break;
            case 3:
                for (let j = 1; j <= n; j++) {
                    if (j % 3 === 0) bulbArray[j - 1] = !bulbArray[j - 1];
                }
                round = 1;
                break;
        }
    }

    // Count and output total bulbs that are on
    for (let i = 0; i < n; i++) {
        if (bulbArray[i] === true) bulbOnCount++;
    }

    // Output array for visual inspection
    console.log('\n' + JSON.stringify(bulbArray));
    console.log(`\nThere are ${bulbOnCount} bulbs on out of ${bulbArray.length}.`);

    return bulbOnCount;
}

// Call bulbSwitcher for testing
bulbSwitcher(6);
bulbSwitcher(20);