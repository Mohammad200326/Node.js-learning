const http = require("http");

const port = 5050;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(`
        <html>
            <head>
                <title>My First App</title>
            </head>
            <body>
                <h1>Hello!!</h1>
            </body>
        </html>
    `);
      break;
    case "/user":
      res.end(`
        <html>
            <head>
                <title>My First App</title>
            </head>
            <body>
                <h1>Hello User!!</h1>
            </body>
        </html>
    `);
      break;
    default:
      res.end(`
        <html>
            <head>
                <title>My First App</title>
            </head>
            <body>
                <h1>Undefined page!</h1>
            </body>
        </html>
    `);
      break;
  }
});

server.listen(port, () => {
  console.log("Hello Man!");
});
