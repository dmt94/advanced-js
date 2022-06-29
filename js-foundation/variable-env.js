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
  var b = 'b';
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