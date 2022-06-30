function multiply(a,b) {
  return a*b;
}

/* currying = effective use of partial parameter */

let multiplyByTwo = multiply.bind(this, 2); //first parameter is 2

console.log(multiplyByTwo(4));

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(4));
