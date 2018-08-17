/*=======================================================================
// Here we will create and implement a queue using JavaScript. This is
// an abstract collection that will perform First-In First-Out
// procedure with passed-in data.
=======================================================================*/
class Queue {
    constructor() {
        this.collection = [];
    }

    // Enqueue will place elements at the beginning of the collection
    // array, making the first-in entity the next to be popped
    enqueue(entity) {
        console.log(`\n${entity} added to end of queue.`);
        this.collection.unshift(entity);
    }

    // Pop the last element in the collection array
    dequeue() {
        console.log(`\nPopping ${this.collection[this.collection.length - 1]} from beginning of queue.`);
        return this.collection.pop();
    }
}

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
queue1.enqueue(4);
queue1.enqueue(5);
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();
queue1.dequeue();