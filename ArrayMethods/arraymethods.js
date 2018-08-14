/*======================================================================
// In this file I'll demonstrate the usage of the major array methods
// using an array of objects, a common scenario in coding.
======================================================================*/
let spaceXFlights = [
    { 
        flight_number: 1,
        mission_name: "DemoSat",
        launch_year: "2007",
        mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png'
    }, 
    { 
        flight_number: 2,
        mission_name: "FalconSat",
        launch_year: "2006",
        mission_patch: 'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png'
    }, 
    { 
        flight_number: 3,
        mission_name: "Trailblrazer",
        launch_year: "2008",
        mission_patch: 'https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png'
    }, 
    { 
        flight_number: 4,
        mission_name: "RatSat",
        launch_year: "2008",
        mission_patch: 'https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png'
    }, 
    { 
        flight_number: 5,
        mission_name: "RazakSat",
        launch_year: "2009",
        mission_patch: 'https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png'
    }, 
]

// This function will print out all values within an array for demo purposes
printArrayValues = (array) => {
    console.log("=== PRINTING ARRAY VALUES ===")
    for (let i = 0; i < array.length; i++) console.log(array[i]);
    console.log("=============================")
}

// Map: Create a new aray containing only the mission patch URLs for each flight
const flightMissionPatches = spaceXFlights.map((flight) => { return flight.mission_patch;});
printArrayValues(flightMissionPatches);

// Sort: Create a new array containing all flights alphabetically by mission name
const flightMissionNamesAlpha = spaceXFlights.sort((a, b) => {
    if (a.mission_name < b.mission_name) return -1;
    else if (a.mission_name > b.mission_name) return 1;
    else return 0;
});
printArrayValues(flightMissionNamesAlpha);

// Filter: Create a new array containing all flights that occurred in 2008
const flightMissionsIn2008 = spaceXFlights.filter((flight) => {
    if (flight.launch_year === '2008') return true;
    else return false;
})
printArrayValues(flightMissionsIn2008);