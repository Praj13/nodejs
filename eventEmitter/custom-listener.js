const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "hello";
    }
    greet(name) {
        this.emit("greeting", `${this.greeting}, ${name}`);
    }
}

const myCustomerEmitter = new MyCustomEmitter();

myCustomerEmitter.on("greeting", (input) => {
    console.log(`Greeting event`, input);
});

myCustomerEmitter.greet("Prajwol Rajbansi");

// Inheritance: MyCustomEmitter extends EventEmitter to get event capabilities

// Custom Methods: We added our own greet method that uses event emission

// Event Emission: emit() sends events with optional data

// Event Listening: on() sets up handlers for specific events

// Encapsulation: Our class maintains its own state (greeting property)