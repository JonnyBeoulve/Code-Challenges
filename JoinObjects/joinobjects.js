/* In this challenge we will merge two objects, each containing several fields.
In this example we'll use SpaceX rockets and flights as our data source. One array of objects
contains a list of flights with mission_num as their unique key. The second array of objects
contains a list of boosters with their base booster number as the unique ID. One booster may 
be used for several flights, so here we will join booster objects to their related flights.*/
function joinObjects(arr1, arr2) {
  let newArr = []; // New array of objects that will contain the joined fields before being returned.

  /* Loop through each flight object in array. By default, push the next flight object into
    the array. If a match occurs, append its fields to the object. */
  for (i in arr1) {
    newArr.push(arr1[i]);
    const match = arr2.find(o => o.id === arr1[i].booster_id);

    if (match) {
      newArr[i].booster_name = match.booster;
      newArr[i].booster_family = match.family;
    }
  }

  return newArr;
}

// Define the two array of objects.
const flights = [
  {
    mission_num: 68,
    booster_id: 1048,
    mission: "Telstar 18V",
    launch_site: "Cape Canaveral Air Force Station Space Launch Complex 40",
    outcome: "Successful"
  },
  {
    mission_num: 69,
    booster_id: 1054,
    mission: "SAOCOM 1A",
    launch_site: "Vandenberg Air Force Base Space Launch Complex 4E",
    outcome: "Successful"
  },
  {
    mission_num: 70,
    booster_id: 1047,
    mission: "Es'hail 2",
    launch_site: "Kennedy Space Center Historic Launch Complex 39A",
    outcome: "Successful"
  },
  {
    mission_num: 71,
    booster_id: 1046,
    mission: "SSO-A",
    launch_site: "Vandenberg Air Force Base Space Launch Complex 4E",
    outcome: "Successful"
  },
  {
    mission_num: 72,
    booster_id: 1050,
    mission: "SpaceX CRS-16",
    launch_site: "Cape Canaveral Air Force Station Space Launch Complex 40",
    outcome: "Successful"
  },
  {
    mission_num: 73,
    booster_id: 1054,
    mission: "GPS IIIA-01",
    launch_site: "Cape Canaveral Air Force Station Space Launch Complex 40",
    outcome: "Successful"
  }
];

const boosters = [
  {
    id: 1046,
    booster: "B1046.3",
    family: "Falcon 9 B5"
  },
  {
    id: 1047,
    booster: "B1047.2",
    family: "Falcon 9 B5"
  },
  {
    id: 1048,
    booster: "B1048.2",
    family: "Falcon 9 B5"
  },
  {
    id: 1049,
    booster: "B1049.1",
    family: "Falcon 9 B5"
  },
  {
    id: 1050,
    booster: "B1050.1",
    family: "Falcon 9 B5"
  },
  {
    id: 1054,
    booster: "B1054.1",
    family: "Falcon 9 B5"
  }
];

// Sample execution using objects above.
console.log(joinObjects(flights, boosters));
