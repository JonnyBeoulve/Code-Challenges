/*=======================================================================
// In this example we demonstrate a first class function. Below we will
// define a simple object and two functions. The first function is
// a first class function that will be passed into the second function
// as an argument not dissimilar to passing in a variable.
=======================================================================*/
let flight66 = {
    flight_number: 66,
    mission_name: 'Iridium NEXT Mission 7',
    launch_year: '2018',
    mission_patch: 'https://images2.imgbox.com/90/b5/fS6LMNGd_o.png',
    ready_for_launch: true
}

// First class function
countdownLiftoff = () => {
    setTimeout(() => {
        console.log("\n10 seconds until liftoff.")
    }, 1000);

    setTimeout(() => {
        console.log("\n5 seconds until liftoff.")
    }, 5000);

    setTimeout(() => {
        console.log("\nWe have liftoff.")
    }, 10000);
}

// This function takes in an object and a first class function
beginLiftoffSequence = (flight, countdown) => {
    console.log("\nPerforming final check before liftoff sequence.")

    if (flight.ready_for_launch === true) countdown();
    else console.log("\nPre-flight check failed.")
}

// Call function
beginLiftoffSequence(flight66, countdownLiftoff);