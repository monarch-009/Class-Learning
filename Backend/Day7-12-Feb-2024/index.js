const http = require("http"); // Importing http module

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>We are Learning Node.js</h1>");
// });

console.log(req.url);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
