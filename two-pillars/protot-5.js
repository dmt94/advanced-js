let human = {
  mortal: true,
}

/*
create prototypal inheritance this way

creates a new object, using an existing object as the
prototype of the newly created object
*/

let student = Object.create(human);

student.age = 28;

console.log(student.mortal);

console.log(human.isPrototypeOf(student));

/*
every function has a prototype property

mutliply.prototype is not really used 
although they are a property...
they are only really used when 
we use construction function


CONSTRUCTION FUNCTIONS contain the actual 
blueprint prototype that we use
*/

function add() {

}

// add.prototype => constructor object, mostly empty
// Function.prototype => f() {[native code]}
// add.__proto__ => f() {[native code]}

// add.__proto__.__proto__ => constructor object
// Object.prototype => constructor object

/*
Program stores data and we use functions to manipulate the data
*/

const obj = {} //underneath hood JS creates obj using Object constructor
obj.prototype //undefined

const arr = []
arr.prototype //undefined

//only functions have their own prototype

/*
TAKEAWAY: every function has a prototype property that references 
to the OBJECT used to attach properties that will be inherited
by objects DOWN THE PROTOTYPE CHAIN
*/


Object.prototype // BASE OBJECT, the very last object we can look for properties on before we point to null

String.prototype // string constructor has bunch of properties


/*
EVERYTHING IN JS IS AN OBJECT
arrays and functions are objects
- they inherit through prototype chain from base object

you can go up the prototype chain looking for properties
on the prototype property

prototype property has the __proto__ prop that links up to the higher 
prototype chain

__proto__ always points to prototype

only functions have prototype property
*/

