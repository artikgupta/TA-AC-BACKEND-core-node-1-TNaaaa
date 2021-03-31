const http = require("http");

http
  .createServer((request, respone) => {
    console.log(request, respone);
    respone.end("welcome to Node js");
  })
  .listen(5000, "localhost");

/***************************************/

var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end("My first server in NodeJS");
}

server.listen(5100, "localhost");

/****************************************/

var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end("My first server in NodeJS");
}

server.listen(5100, "localhost");

/**********************************/

var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
}

server.listen(5566, "localhost");

/*****************************/

var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  res.end("Welcome");
}

server.listen(7000, () => {
  console.log("server listening on port of 7000");
});

/****************************/

var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/html");
  res.end("<h3>Welcome to altcampus</h3>");
}

server.listen(4444, () => {
  console.log("server listening on port of 4444");
});

/******************************/

var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to homepage");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h2>Page Not Found </h2>");
  }
}

server.listen(2345, () => {
  console.log("server listening on port of 2345");
});

