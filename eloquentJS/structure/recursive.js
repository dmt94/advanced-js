let factorial = (num) => {
  if (num <= 0) {
    return `Input a positive number`;
  }
  return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(-5));


let power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));

//loop version


let power2 = (b, e) => {
  let result = 1;
  for (let count = 0; count < e; count++) {
    result *= b;
  }
  return result;
}

console.log(power2(2, 5));