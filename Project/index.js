const { createServer } = require("http");
const app = require("./app");

const server = createServer(app);

server.listen(5000, () => {
  console.log("Server is running now!");
});
