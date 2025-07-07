const { opendir } = require("fs");

opendir("./", async (err, dir) => {
  for await (let direct of dir) {
    console.log(direct.name);
  }
});
