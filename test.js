const asteriskTriangle = require("./Ex 1/1.js");

const verifyPassword = require("./Ex 2/2.js");
console.log(verifyPassword);

test("asteriskTriangle cria o triângulo desejado", () => {
  let arr = ["     ", "    *", "   **", "  ***"];
  expect(asteriskTriangle(3)[0]).toBe(arr[0]);
  expect(asteriskTriangle(3)[1]).toBe(arr[1]);
  expect(asteriskTriangle(3)[2]).toBe(arr[2]);
  expect(asteriskTriangle(3)[3]).toBe(arr[3]);
});

test("verifyPassword retorna o valor desejado", () => {
  expect(verifyPassword("Ya3")).toBe(3);
});
