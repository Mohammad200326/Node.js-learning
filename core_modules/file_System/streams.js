const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./data/data.txt");

const writeStream = createWriteStream("./data/output.txt");

readStream.pipe(writeStream);
