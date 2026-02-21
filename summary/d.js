const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const lines = input.split(/\r?\n/);

const line = lines[0].split(" ").map(Number);

let result = [];

for(let i  = 0; i<line.length; i++){
    result.push(i*line[i]);
}

console.log(result);