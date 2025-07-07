const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("welcoming", () => {
  console.log("Welcome to my application!");
});

myEmitter.on("welcoming", (name) => {
  console.log(`Welcome to my application ${name}!`);
});

myEmitter.emit("welcoming", "Mohammad");
