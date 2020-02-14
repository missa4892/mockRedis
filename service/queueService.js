var queue = require("./Queue").queue;

class QueueService {
    constructor() {
        this.queue = queue;
        // enqueue an item
        this.queue.enqueue(1000001);
        this.queue.enqueue(1000002);
        this.queue.enqueue(1000003);
    }

    getNext() {
        return this.queue.dequeue();
    }
}

const queueService = new QueueService();
exports.queueService = queueService;