/*
IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION

	- design pattern used by some libraries
idea is to use this pattern to "place" all library 
code inside local scope to avoid namespace collision
*/

var script1 = (function() {
  function a() {
    return 5;
  }
  return {
    a: a
  } //returns an object with the value a => invokes a()
})()


console.log(script1.a());
/* script1 is still global variable, that can pack multiple functions 
we are attaching data into function -> executes whatever we want to call

script1.a()
script1.b()
script1.c()
...
*/