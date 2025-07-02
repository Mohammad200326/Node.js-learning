const http = require("http");

const port = 5050;

const server = http.createServer((req, res) => {
  res.end("Welcome to page!");
});

server.listen(port, () => {
  console.log("Hello Man!");
});
