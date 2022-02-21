const readline = require("readline-sync");

const isAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

const verifyNumberOfSubstringsAnagrams = (str) => {
  let stringSize = str.length;
  let growing = 1;
  let countingAnagrams = 0;
  let arrayOfSubstrings = [];

  while (growing < stringSize) {
    for (let j = 0; j < stringSize; j++) {
      if (str.substr(j, growing).length === growing) {
        arrayOfSubstrings.push(str.substr(j, growing));
      }
    }
    growing += 1;
  }

  let count = 0;
  for (let k = 0; k < arrayOfSubstrings.length; k++) {
    for (let l = 0; l < arrayOfSubstrings.length; l++) {
      if (isAnagram(arrayOfSubstrings[k], arrayOfSubstrings[l]) && k !== l) {
        count += 1;
      }
    }
  }
  console.log(count / 2);
};

verifyNumberOfSubstringsAnagrams(
  readline.question(
    `Digite a palavra desejada para saber quantas 
      da mesma são anagramas entre sí:    `
  )
);
