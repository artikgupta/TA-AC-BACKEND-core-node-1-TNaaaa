const { fstat } = require("fs");
var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");

    fs.createReadStream("./about.html").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("server listening on port of 5555");
});
