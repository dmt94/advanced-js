/*
HOF - higher order functions
- math and CS 
- function that does one of 2 things
  - takes one or more funcs as arguments
  OR
  - returns functions as result (callback)

closure
*/


// HOF
const hof = () => () => 5;

console.log(hof()) //returns func
console.log(hof()());

const hof2 = (fn) => fn(5);

const multiplyBy2 = (x) => x * 7;

console.log(hof2(function a(x) {return x * 2 })); // 10
console.log(hof2(multiplyBy2)); // 35


// Closure
const closure = function() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  }
}

// we are modifying state outside of function
// increment() is touching data that belongs to other function closure()
// we can still use closures for functional programming as long as we dont modify or mutate external data


const incrementFn = closure(); 
//even though it is "done", bc of closure, increment function remembers variable in outer scope
console.log(incrementFn()); //1
console.log(incrementFn()); //2
console.log(incrementFn()); //3


// we can use closures to enable data privacy
const closurePrivacy = function() {
  let privateVar = 28;
  return function getVar() {
    return privateVar;
  }
}