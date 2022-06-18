/* JS Engine - v8 -> google chrome

js file -> engine -> computer
js engine understands js
- lots of js engines
  - ECMAScript engines
- v8 is made using C++

Brendan Eich (made first js engine)
*/

function jsengine(code) {
  return code.split(/\s+/);
}
console.log(jsengine(' let a = 5'));


//interpreter vs compiler
function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 10; i++) {
  console.log(someCalculation(5,4));
}