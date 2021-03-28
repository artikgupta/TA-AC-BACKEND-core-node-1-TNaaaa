const path = require("path");

filepath = path.join(__dirname, "index.md");

const fs = require("fs");

fs.readFile(filepath, (err, file) => {
  console.log(file);
  console.log(file.toString());
});

console.log("Execute me first");

console.time("task1");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("task1");

console.log("execute me last");

console.time("task1");
setTimeout(() => {
  console.log("time executed");
  console.timeEnd("task1");
}, 1000);

var buff1 = Buffer.alloc(10);

buff1.write("Welcome to Node.js");

console.log(buff1.toString());
