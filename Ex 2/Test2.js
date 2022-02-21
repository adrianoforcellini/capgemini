const readline = require("readline-sync");
const verifyPassword = require("./2.js");

verifyPassword(
  readline.question(
    `Digite  sua senha para saber quantos caracteres você precisará 
    adicionar á ela para que seja uma senha forte:   `
  )
);
