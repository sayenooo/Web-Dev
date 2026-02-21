const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const lines = input.split(/\r?\n/);

const num = Number(lines[0]);
const nums = lines[1].split(" ").map(Number);

let count = 0;
for(let n of nums){
    if(n==num){
        count++;
    }
}

console.log(count);