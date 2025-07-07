const { stat } = require("fs");

stat("./readFile.js", (err, stat) => {
  console.log(stat);
});
