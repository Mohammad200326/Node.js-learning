const { readFile, readFileSync } = require("fs");

readFile("./data/data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Async", data);
});

const data = readFileSync("./data/data.txt", "utf8");
console.log("Sync", data);
