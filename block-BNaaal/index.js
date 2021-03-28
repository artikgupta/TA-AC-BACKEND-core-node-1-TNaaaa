const http = require("http");

http
  .createServer((request, respone) => {
    console.log(request, respone);
    respone.end("welcome to Node js");
  })
  .listen(4000, "localhost");
