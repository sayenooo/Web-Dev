const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const arr = JSON.parse(input);

console.log(arr.col);