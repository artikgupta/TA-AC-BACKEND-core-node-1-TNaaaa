var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  //   res.statusCode = 400;
  //   res.setHeader("Content-Type", "text/html");
  //   res.end("<h2>Welcome</h2>");

  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && req.url === "/about") {
    res.setHeader("Content-Type", "application/json");
    res.end("{message: this is a post request}");
  }
}

server.listen(5000, () => {
  console.log("server listening on port of 5000");
});
