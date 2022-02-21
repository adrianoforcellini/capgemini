const readline = require("readline-sync");
const verifyNumberOfSubstringsAnagrams = require("./3.js");

verifyNumberOfSubstringsAnagrams(
  readline.question(
    `Digite a palavra desejada para saber quantas 
      da mesma são anagramas entre sí:    `
  )
);
