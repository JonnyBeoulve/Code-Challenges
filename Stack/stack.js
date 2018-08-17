/*=======================================================================
// Here we will create and implement a stack using JavaScript. This is
// an abstract collection that will perform Last-In First-Out
// procedure with passed-in data. Unlike queue, it also includes the
// peek method, which allows the system to view the entity at the end
// of the stack to determine its content before modifying the stack.
=======================================================================*/
class Stack {
    constructor() {
        this.collection = [];
    }

    // Push entity to end of stack
    push(entity) {
        console.log(`\n${entity} added to end of stack.`);
        this.collection.push(entity);
    }

    // View entity at end of stack without modification
    peek() {
        return this.collection[this.collection.length - 1]
    }

    // Pop the item at the end of the stack
    pop() {
        console.log(`\nPopping ${this.collection[this.collection.length - 1]} from end of stack.`);
        return this.collection.pop();
    }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.pop();
stack1.push(4);
stack1.push(5);
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();