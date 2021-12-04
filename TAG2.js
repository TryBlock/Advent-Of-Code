const input = require("./input");
const lines = input.getLines("./tag2.txt");

input.part(1);

let forward = 0;
let down = 0;

lines.forEach((line) => {
  const step = line.split(" ");
  switch (step[0]) {
    case "forward":
      forward += Number(step[1]);
      break;
    case "down":
      down += Number(step[1]);
      break;
    case "up":
      down -= Number(step[1]);
      break;
  }
});
console.log("Result", forward * down);

input.part(2);

forward = 0;
down = 0;
let aim = 0;

lines.forEach((line) => {
  const step = line.split(" ");
  switch (step[0]) {
    case "forward":
      forward += Number(step[1]);
      down += Number(step[1]) * aim
      break;
    case "down":
      aim += Number(step[1]);
      break;
    case "up":
      aim -= Number(step[1]);
      break;
  }
});

console.log("Result", forward * down);
