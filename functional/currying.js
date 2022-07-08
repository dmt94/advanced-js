/*
currying:
technique of translating evaluation of function that takes multiple args
and modifying it into a fn tht takes one parameter at a time
*/

const multiply = (a, b) => a * b;

multiply(3, 4); //12

//curry technique
const curriedMultiply = (a) => (b) => a * b; // bc we have closures, we can access 'a' var

console.log(curriedMultiply(5)(3)); //15

//currying is useful bc you can make multiple utility functions out of it like so:
const multBy5 = curriedMultiply(5);
console.log(multBy5(4)); // 20

const multBy2 = curriedMultiply(2);
console.log(multBy2(10)) // 20

/*
currying can save on memory
*/