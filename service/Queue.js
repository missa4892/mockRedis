class Queue
{
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        console.log("array", this.items);
        // adding element to the queue
        this.items.push(element);
    }

    dequeue() {
        // removing element from the queue
        // returns underflow when called
        // on empty queue
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    printQueue() {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
}

const queue = new Queue();
exports.queue = queue;
exports.dequeue = queue.dequeue;
exports.enqueue = queue.enqueue;