verifyNumberOfSubstringsAnagrams = (str) => {
  let stringSize = str.length;
  let growing = 1;
  let countingAnagrams = 0;
  let arrayOfSubstrings = [];
  let splited = str.split("");

  for (let i = 0; i < splited.length; i++) {
    arrayOfSubstrings.push(splited[i]);
  }

  while (growing < stringSize) {
    for (let j = 0; j < stringSize; j++) {
      if (
        str.substr(j, growing).length > 1 &&
        str.substr(j, growing).length === growing - j
      ) {
        arrayOfSubstrings.push(str.substr(j, growing));
      }
    }
    growing += 1;
  }
  console.log(arrayOfSubstrings);

  let count = 0;
  for (let k = 0; k < arrayOfSubstrings.length; k++) {
    for (let l = 0; l < arrayOfSubstrings.length; l++) {
      if (isAnagram(arrayOfSubstrings[k], arrayOfSubstrings[l]) && k !== l) {
        console.log(arrayOfSubstrings[k], arrayOfSubstrings[l]);
        count += 1;
      }
    }
  }
  console.log(count);
};
