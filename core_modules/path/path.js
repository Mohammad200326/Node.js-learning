const path = require("path");

console.log(__filename);

console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join("../file_System", "data", "data.txt"));

const { readFile } = require("fs");

readFile(
  path.join("../file_System", "data", "data.txt"),
  "utf8",
  (err, data) => {
    console.log(data);
  }
);
