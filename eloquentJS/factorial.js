function factorial(n) {
  let product = 1; 
  while (n > 1) {
    product *= n;
    n--
  }
  return product;
}

console.log(factorial(5));