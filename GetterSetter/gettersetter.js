/*=======================================================================
// In this example of getter and setter we create a class for video games
// within a fictional database. The price element of the class will be
// set with default behavior, but when the price is grabbed, the
// returned string's content will depend on whether or not the game
// has subscription set to true.
=======================================================================*/
class Game {
    constructor(_title, _release, _price, _subscription) {
        this.title = _title;
        this.releaseDate = _release;
        this.price = _price;
        this.subscription = _subscription;
    }

    // Getter will check if the game requires a subscription. If so, append
    // such to the end of the returned string
    get price() {
        if (this.subscription === true) return `${this._price} + subscription`;
        else return this._price;
    }

    // Setter will perform default behavior
    set price(value) {
        this._price = value;
    }
}

// Create instance of Game with subscription set to true
let worldOfWarcraft = new Game('World of Warcraft', '12/16/2014', '19.99', true);

// Get price value, which will be handled by the getter
console.log(worldOfWarcraft.price);