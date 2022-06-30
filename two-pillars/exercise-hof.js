const multiplyBy = function(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

//arrow notation, cleaner
const multiplyByV2 = (num1) => (num2) => num1 * num2;


console.log(multiplyByV2(5)(10)) //50


//save as expression
const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(2)); // 4

console.log(multiplyByTwo()) // NaN, need to call again
/* 
since the function returns another function, 
you need to invoke what is returned, passing a parameter to it 
*/


console.log(multiplyByTwo(5)) // 10
