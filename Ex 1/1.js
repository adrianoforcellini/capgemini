// const readline = require("readline-sync");

const asteriskTriangle = (n) => {
  lines = [];
  for (let i = 0; i <= n; i++) {
    let line = " ";
    for (let j = n; j >= 0; j--) {
      if (j < i) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
    lines.push(line);
  }
  return lines;
};

// asteriskTriangle(readline.question("Digite um número:   "));

module.exports = asteriskTriangle;
