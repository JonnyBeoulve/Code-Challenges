/*=======================================================================
// Below we will look at the difference between imperative and 
// declarative programming using JavaScript.
=======================================================================*/
// Imperative: Below we will create a class that has two properties.
// One of these properties can be altered using methods included in
// the class. This style of code is imperative because it tells the 
// computer how to do things with a clear structure. Common things to
// look for in imperative programming include conditional statements,
// class inheritance, and loops.
class RedboxMachine {
    constructor(uid) {
        this.unitID = uid;
        this.inventory = 0;
    }

    addStock(additionalInventory) {
        if (additionalInventory < 1) console.log(`Additional inventory for ${this.unitID} must be 1 or greater.`)
        else  {
            this.inventory = this.inventory + additionalInventory;
            console.log(`Redbox #${this.unitID} inventory is now ${this.inventory}.`);
        }
    }

    subStock(lessInventory) {
        if (lessInventory < 1) console.log(`inventory reduce for ${this.unitID} must be 1 or greater.`)
        else  {
            this.inventory = this.inventory - lessInventory;
            console.log(`Redbox #${this.unitID} inventory is now ${this.inventory}.`);
        }
    }
}

const redbox1 = new RedboxMachine('90210');
redbox1.addStock(5);
redbox1.subStock(2);

// Declarative: Below we create a simple one line arrow function that
// passes in three arguments. Note that we don't describe its flow
// or how things work. It's a simple expression without the clear
// structure seen in the previous imperative example. Thus, it is
// declarative.
let inventory = (a, b, c) => {
    return a + b - c;
}

console.log(inventory(0, 5, 2));