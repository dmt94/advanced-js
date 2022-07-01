const obj = {
  pokemon: 'milotic'
}

console.log(obj.hasOwnProperty('pokemon')); //true
console.log(obj.hasOwnProperty('hasOwnProperty')); //false
/*
obj itself doesnt have hasOwnProp it has hasOwnProp as its property
UP the prototype chain

functions prop __proto__ link up to a special callable object function (base function)
it has its own code and own prop
has a prop called prototype: {call, apply, bind.., __proto__}
that the __proto__ links to

__proto__ is a POINTER that points to the function.prototype
*/

function multiply() {}

multiply.__proto__ //points to Function.prototype


const arr = [];

arr.__proto__ //points to Array.prototype


