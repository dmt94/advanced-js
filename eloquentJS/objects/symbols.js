let sym = Symbol("name");
console.log(sym === Symbol("name")); //false

console.log(sym); // Symbol(name)

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
}
//this.length points to the length of the array

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());