var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  //   console.log(req.headers, req.method, req.url);
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/html");
  res.end("<h2>Welcome</h2>");
}

server.listen(4444, () => {
  console.log("server listening on port of 4444");
});
