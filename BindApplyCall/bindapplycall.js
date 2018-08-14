/*=======================================================================
// In this example we will demonstrate how call and apply work by
// defining a class with a method, and then calling it using both call
// and apply.
=======================================================================*/
class Mission {
    constructor(number, name) {
        this.number = number,
        this.name = name
    }
    
    // Class method
    getMissionTitle() {
        return `Mission #${this.number} - ${this.name}`;
    }
};

// Define a function that will include a reference to this. Call and apply will ensure this refers to the mission65 object.
let missionLaunchInfo = function(launchDate, launchSite) {
    console.log(this.getMissionTitle() + ` launched on ${launchDate} at ${launchSite}.`);
};

// Instantiate an instance of mission
let mission65 = new Mission(65, 'Telstar 19 Vantage');

// Call and apply to output Mission attributes along with passed in strings. Note that call uses explicit strings
// while apply uses a passed in array.
missionLaunchInfo.call(mission65, 'July 22, 2018', 'Cape Canaveral Air Force Station Space Launch Complex 40');
missionLaunchInfo.apply(mission65, ['July 22, 2018', 'Cape Canaveral Air Force Station Space Launch Complex 40']);