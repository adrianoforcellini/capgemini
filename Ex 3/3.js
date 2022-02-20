const verifyNumberOfSubstringsAnagrams = (str) => {
  let stringSize = str.length;
  let growing = 0;
  let countingAnagrams = 0;
  let arrayOfSubstrings = [];
  let splited = str.split("");

  for (let i = 0; i < splited.length; i++) {
    arrayOfSubstrings.push(splited[i]);
  }

  while (growing < stringSize) {
    for (let j = 0; j < stringSize; j++) {
      if (str.substring(j, growing).length > 1) {
        arrayOfSubstrings.push(str.substring(j, growing));
      }
    }
    growing += 1;
  }
  console.log(arrayOfSubstrings);

  let count = 0;
  for (let k = 0; k < arrayOfSubstrings.length; k++) {
    for (let l = 0; l < arrayOfSubstrings.length; l++) {
      if (arrayOfSubstrings[k] === arrayOfSubstrings[l] && k !== l) {
        count += 1;
      }
    }
  }
  console.log(count / 2);
};
