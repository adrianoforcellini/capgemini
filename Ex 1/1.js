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
    lines.push(line);
    console.log(line);
  }
  return lines;
};

module.exports = asteriskTriangle;
