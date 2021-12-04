const input = require("./input");
const lines = input.getLines("./tag1.txt");

// Part One
let count = 0;
for (let i = 1; i < lines.length; i++) {
  if (Number(lines[i - 1]) < Number(lines[i])) count++;
}
console.log("Count", count);

console.log("-----", "PART TWO", "-----");

// Part two
const result = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i + 1] !== undefined && lines[i + 2] !== undefined) {
    result.push(Number(lines[i]) + Number(lines[i + 1]) + Number(lines[i + 2]));
  }
}

count = 0;
for (let i = 1; i < result.length; i++) {
  if (Number(result[i - 1]) < Number(result[i])) count++;
}
console.log("Count", count);
