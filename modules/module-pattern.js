/*
modules: group variables and functions together

Global Scope 
  Module Scope - can be used to share variables between diff functions as well
    Function Scope 
      Block Scope - let and const 

Module Scope Pattern 
> before, closures and encapsulations create module scopes

IIFE : immediately invoked function expression
wrapped in bracket = not a function expression

write code in function scope, also ability to access variables outside
it is essentially a function and module


 */
//Module Pattern allows us to assign to the fightModule, the return of the function

//Module is self contained, less pollution of memory space
//techically, fightModule is still polluting global namespace
// we minimized, but we can still have name clashes
var fightModule = (function() {
  //variables here are function scoped 

  //private variables, can access also via adding to the return value 
  var harry = 'potter';
  var draco = 'malfoy';

  //function inside main function that will be returned as an object
  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins!` : `${char2} wins!`;
  }
  //return value of function
  return {
    fight: fight,
    harryPotter: harry,
    dracoMalfoy: draco,
  }
})()


/*
Back then, since we didn't know the dependencies,
we have to make sure order of script tag is correct
*/
