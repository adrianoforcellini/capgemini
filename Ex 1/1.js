var readline = require("readline-sync");

const asteriskTriangle = (n) => {
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
  }
};

asteriskTriangle(readline.question("Digite um número:   "));
