/*
partial application
- process of producing fn with a smaller # of parameters
- uses closures to later be called w rest of args

similar to currying but
*/

const multiply = (a,b,c) => a * b * c;
// we wanna use part of args, then next call of fn, apply rest of args

//curried version
const curriedMult = (a) => (b) => (c) => a * b * c;

console.log(curriedMult(2)(2)(10)); // 40



//curried vs partial application, second call expects all other args
//use bind as a way to pass arg, as 5 applied
const partialMultBy5 = multiply.bind(null, 5);
console.log(partialMultBy5(4, 10)); // 200

