const input = require("./input");
const lines = input.getLines("./tag3.txt");

function part1() {
  let gama = ``;
  let epsilon = ``;

  for (let x = 0; x < lines[0].length; x++) {
    let zero = 0;
    let one = 0;

    lines.forEach((line) => {
      if (line[x] === "1") one++;
      else zero++;
    });

    gama += zero > one ? "0" : "1";
    epsilon += zero > one ? "1" : "0";
  }

  return parseInt(gama, 2) * parseInt(epsilon, 2);
}

function getOxygen(arr = lines, bitIndex = 0) {
  if (arr.length === 1) return arr[0];

  let zero = 0;
  let one = 0;

  arr.forEach((line) => {
    if (line[bitIndex] === "1") one++;
    else zero++;
  });

  if (one > zero || one === zero) {
    return getOxygen(
      (arr = arr.filter((binary) => binary[bitIndex] === "1")),
      (bitIndex += 1)
    );
  } else {
    return getOxygen(
      (arr = arr.filter((binary) => binary[bitIndex] === "0")),
      (bitIndex += 1)
    );
  }
  return -1;
}

function getCO2(arr = lines, bitIndex = 0) {
 if (arr.length === 1) return arr[0];

 let zero = 0;
 let one = 0;

 arr.forEach((line) => {
   if (line[bitIndex] === "1") one++;
   else zero++;
 });

 if (one > zero || one === zero) {
   return getCO2(
     (arr = arr.filter((binary) => binary[bitIndex] === "0")),
     (bitIndex += 1)
   );
 } else {
   return getCO2(
     (arr = arr.filter((binary) => binary[bitIndex] === "1")),
     (bitIndex += 1)
   );
 }
 return -1;
}

function part2() {
 const oxygen = parseInt(getOxygen(), 2)
 const co2 = parseInt(getCO2(), 2)

 return oxygen * co2
}

input.part(1);
console.log(part1());

input.part(2);
console.log(part2());
