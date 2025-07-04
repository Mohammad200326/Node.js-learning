const { sum, multiply, division, mod } = require("./my_modules/math");

const sumResult = sum(1, 5);
const multiplyResult = multiply(1, 5);
const divisionResult = division(6, 2);
const modResult = mod(101, 100);

console.log("sum: ", sumResult);
console.log("multiply: ", multiplyResult);
console.log("division: ", divisionResult);
console.log("mod: ", modResult);
