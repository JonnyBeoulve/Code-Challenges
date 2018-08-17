/*=======================================================================
// Here we will crate and implement a queue using JavaScript. This is
// an abstract collection that will perform First-In First-Out
// procedure with passed-in data.
=======================================================================*/
class Queue {
    constructor() {
        this.collection = [];
    }

    add(entity) {
        console.log(`\n${entity} added to end of queue.`);
        this.collection.unshift(entity);
    }

    remove() {
        console.log(`\nRemoving ${this.collection[this.collection.length - 1]} from beginning of queue.`);
        return this.collection.pop();
    }
}

const queue1 = new Queue();
queue1.add(1);
queue1.add(2);
queue1.add(3);
queue1.remove();
queue1.add(4);
queue1.add(5);
queue1.remove();
queue1.remove();
queue1.remove();
queue1.remove();