const isAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

const verifyNumberOfSubstringsAnagrams = (str) => {
  const stringSize = str.length;
  let growing = 1;
  let countingAnagrams = 0;
  const arrayOfSubstrings = [];

  while (growing < stringSize) {
    for (let j = 0; j < stringSize; j++) {
      if (str.substr(j, growing).length === growing) {
        arrayOfSubstrings.push(str.substr(j, growing));
      }
    }
    growing += 1;
  }

  for (let k = 0; k < arrayOfSubstrings.length; k++) {
    for (let l = 0; l < arrayOfSubstrings.length; l++) {
      if (isAnagram(arrayOfSubstrings[k], arrayOfSubstrings[l]) && k !== l) {
        countingAnagrams += 1;
      }
    }
  }
  console.log(countingAnagrams / 2);
  return countingAnagrams / 2;
};

module.exports = verifyNumberOfSubstringsAnagrams;
