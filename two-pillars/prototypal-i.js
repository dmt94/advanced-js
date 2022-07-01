/*
Prototypal Inheritance

Inheritance is an object getting access to the properties and methods
of OTHER OBJECTS


Array and Functions are objects
Array object gets access to props and methods of Object in JS
same w Functions

object gets access to the properties and methods of 
another object through the PROTOTYPE CHAIN
*/

const arr = []; //new array is created from constructor
//array created arr variable

console.log(arr.__proto__); // this goes up the prototype chain and get into Array


const appleArr = ['appletini'];
const fruitsArr = ['white peach', 'blueberries', 'dragonfruit'];

console.log(appleArr.toString());  // "appletini"
console.log(fruitsArr.toString()); // "white peach,blueberries,dragonfruit"


// function

function kirei() {}

kirei.__proto__ // f () { [native code] }
/* this is the BASE FUNCTION where all functions
are created FROM
*/

kirei.__proto__.__proto__ // goes up the prototype chain again
/* this goes UP to the BASE OBJECT where all objects
come FROM
*/


// literal object

const love = {};

love.__proto__ // goes up to BASE OBJECT