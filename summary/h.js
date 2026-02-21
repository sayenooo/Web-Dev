const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trimEnd();

const lines = input.split(/\r?\n/);

const line = lines[0].split(" ").map(Number);


let matrix = [];
for(let line of lines){
    matrix.push(line.split(" ").map(Number));
    
}

for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
        matrix[i][j] = matrix[i][j]**2;
    }
}

console.log(matrix);