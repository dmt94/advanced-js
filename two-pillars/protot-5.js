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

