// new binding this

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Kirei', 55);
console.log(person1.name); //Kirei


// implicit binding
const personK = {
  name: 'Kichi',
  age: 28,
  intro() {
    console.log(`Nice to meet ypu. my name is ${this.name}`);
  }
}

//explicit binding
// const personH = {
//   name: 'Hunkle',
//   age: 23,
//   intro: function() {
//     console.log('hi' + this.setTimeout) //this refers to window object
//   }.bind(window)
// }
//this explicitly binds to window


//arrow functions


const person4 = {
  name: 'Kichan',
  age: 23,
  intro: function() {
    let inner = () => {
      console.log('hi! ' + this.name + ' is my name.');
    } //this refers to this object , in regular function, this would be window obj
    return inner();
  }
}

console.log(person4.intro()); // hi! kichan is my name.