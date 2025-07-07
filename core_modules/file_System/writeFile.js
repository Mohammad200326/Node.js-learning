const { open, writeFile } = require("fs");

open("./data/data.txt", "a+", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  writeFile(fd, "Hello, This is a new Text", (err) => {
    if (err) {
      console.log(err);
    }
  });
});
