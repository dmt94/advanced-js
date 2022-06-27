let rabbit = {};

rabbit.type = 'mother';

rabbit.speak = function(line) {
  console.log(`The ${this.type} rabbit says: "${line}"`);
}

rabbit.speak("I know everything about carrots.");

// different Rabbit

//constructor
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says: "${line}"`);
}

let weirdRabbit = new Rabbit('weird');
weirdRabbit.speak(`I had a universe shaped carrot once.`);

console.log(Object.getPrototypeOf(weirdRabbit)); // Rabbit.prototype
console.log(Object.getPrototypeOf(Rabbit)); // {}

/* 
So JavaScript classes are constructor functions with a prototype property. 
That is how they work, and until 2015, 
that was how you had to write them. 
These days, we have a less awkward notation.
*/

class Bear {
  //basically a method
  //provides the actual constructor function, which will be bound to the name Bear
  constructor(type) {
    this.type = type;
  }
}

/* 
Like function, class can be used both in statements 
and in expressions. 
When used as an expression, 
it doesn’t define a binding but just 
produces the constructor as a value. 

let obj = new class { getWord() {return 'the day is always yours';}};
console.log(obj.getWord()); // should log ^^
*/

