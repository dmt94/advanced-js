function two() {
  var isValid;
  console.log(isValid); //undefined
}

function one() {
  var isValid = true; //local environment
  two(); //new execution context is created
}

var isValid = false;
one();


//stack
/*
two()     isValid = undefined
one()     isValid = true, only cares abt local scope
global()  isValid = false
*/


//global variable
var x = 'x';

function findName() {
  // logB(); // => undefined bc the variable b is declared using 'var' and comes after 

  console.log(x);
  //checks parent environment (global in this case, to look for x)
  var b = 'b';
  logB();
  function logB() {
    console.log(b);
  }
  return printName();
}

function printName() {
  var c = 'c';
  return 'Kirei Chan';
}

function sayMyName() {
  var a = 'a';
  return findName()
}

sayMyName();



/* How to invoke a function returned by another function? */

function myFaveColor() {
  var color = 'lavender';
  return function myFaveWarmColor() {
    var color2 = 'mandarin';
    return function myFaveCoolColor() {
      var color3 = 'electric blue';
      return `#3EA1FD and ${color2}`;
    }
  }
}

//returns [Function: myFaveWarmColor];
console.log(myFaveColor());

//returns [Function: myFaveCoolColor];
console.log(myFaveColor()());

//returns '#3EA1FD and __'
//innermost scope has access to outer scopes
//outermost scope = global scope
console.log(myFaveColor()()());

