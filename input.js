const fs = require("fs");

const getLines = (file) => {
  try {
    const data = fs.readFileSync(file, "UTF-8");
    return data.split(/\r?\n/);
  } catch (err) {
    console.error(err);
  }
  return [];
};

const part = (p) => {
  console.log("--------", "Part", p, "--------")
}

module.exports = {
 getLines,
 part
}