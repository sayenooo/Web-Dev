const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const words = input.split(" "); 
let result = [];

let s = words[0];
let new_s = "";

for(let i = 0; i<s.length; i++){
    if(i==0){
        new_s+=s[i].toUpperCase();
    }else{
        new_s+=s[i];
    }
}
result.push(new_s);

for(let i = 1; i<words.length; i++){
    result.push(words[i]);
}

console.log(result.join(" "));