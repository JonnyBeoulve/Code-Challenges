/*=======================================================================
// In this example we'll clarify what a callback is using a simple
// array of strings. Our strings will be SpaceX mission names.
=======================================================================*/
let missions = [
  "Hispasat 30W-6",
  "Iridium NEXT Mission 5",
  "CRS-14",
  "TESS",
  "Bangabandhu-1",
  "Iridium NEXT Mission 6",
  "SES-12",
  "CRS-15",
  "Telstar 19V",
  "Iridium NEXT Mission 7"
];

// For every mission in the missions array, perform a callback function
// outputting the name of the mission. Note that in this instance ForEach is
// the higher order function, while the console.log is the callback function.
missions.forEach((mission, index) => {
  console.log(`\n${index + 1}. ${mission}`);
});
