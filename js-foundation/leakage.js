
// function weird() {
//   height = 100;
//   return height;
// }

// weird();
/*
leakage of global variables example

height is not declared by var, let, or const
keywords tell us to put in variable environment
goes up to scope chain to global environment

since it is not defined in global environment, it will create it 

if 'use strict' is included, then referenceError will be thrown
*/

var heyhey = function doodle() {
  console.log('heyhhey');
}

doodle() 
/*
referenceError
doodle function is enclosed in its own scope
doodle gets added into its own execution context environment
*/

