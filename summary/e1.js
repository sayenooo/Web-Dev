const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const arr = JSON.parse(input);

const ss = new Set();
let res = [];

for(let i of arr){
    if(!ss.has(i)){
        ss.add(i);
        res.push(i);
    }
}

console.log(JSON.stringify(res));