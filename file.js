const fs = require("fs");

fs.writeFileSync("test.txt", "This is my first Node.js file!");

const data = fs.readFileSync("test.txt", "utf8");
console.log("File Content:", data);
