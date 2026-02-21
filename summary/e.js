const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const lines = input.split(/\r?\n/);

const line = lines[0];

const s = new Set();
let res = [];

for(let i of line){
    if(!s.has(i)){
        s.add(i);
        res.push(i);
    }    
}

console.log(res);