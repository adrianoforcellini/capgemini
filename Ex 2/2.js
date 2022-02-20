const readline = require("readline-sync");

const isEspecialCharacter = (letter) => {
  if (
    letter.includes("!") ||
    letter.includes("@") ||
    letter.includes("#") ||
    letter.includes("$") ||
    letter.includes("%") ||
    letter.includes("^") ||
    letter.includes("*") ||
    letter.includes("&") ||
    letter.includes("(") ||
    letter.includes(")") ||
    letter.includes("-") ||
    letter.includes("+")
  ) {
    return true;
  }
  return false;
};

const verifyPassword = (str) => {
  let hasDigit = false;
  let hasLowercase = false;
  let hasUppercase = false;
  let hasSpecialCharacter = false;
  const minLenght = 6;

  for (let i = 0; i < str.length; i++) {
    if (str[i] * 0 === 0) {
      hasDigit = true;
    }
    if (
      str[i].toLowerCase() === str[i] &&
      isEspecialCharacter(str[i]) === false &&
      str[i] * 0 !== 0
    ) {
      hasLowercase = true;
    }
    if (
      str[i].toLowerCase() !== str[i] &&
      isEspecialCharacter(str[i]) === false &&
      str[i] * 0 !== 0
    ) {
      hasUppercase = true;
    }
    if (isEspecialCharacter(str[i]) === true) {
      hasSpecialCharacter = true;
    }
  }
  let count = 0;
  if (hasDigit !== true) {
    count += 1;
  }
  if (hasLowercase !== true) {
    count += 1;
  }
  if (hasUppercase !== true) {
    count += 1;
  }
  if (hasSpecialCharacter !== true) {
    count += 1;
  }
  if (str.length + count < minLenght) {
    console.log(minLenght - str.length);
  } else {
    console.log(count);
  }
};

verifyPassword(
  readline.question(
    `Digite  sua senha para saber quantos caracteres você precisará 
    adicionar á ela para que seja uma senha forte:   `
  )
);
