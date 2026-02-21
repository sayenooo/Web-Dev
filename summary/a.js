const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const lines = input.split(/\r?\n/);

// word
const s = input;

// несколько строк
// 4
// wefw woerfwe wepo
const n = lines[0];
const arr = lines[1].split(" ");

// числа через пробел
// 1 2 3 4 5
const nums = input.split(" ").map(Number);


// несколько строк
// 4
// 1 2 3 4
const m = Number(lines[0]);
const arr_nums = lines[1].split(" ").map(Number);

