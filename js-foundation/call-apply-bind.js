function a() {
  console.log('hi');
}

//call and apply invoke functions
a.call(); // functions created have property call
a.apply(); 


const whiteSage = {
  name: 'Hermione',
  mana: 80,
  health: 70,
  heal(num1, num2) {
    return this.health += num1 + num2; //changes health status
  }
}
console.log(whiteSage.health);
console.log(whiteSage.heal(10, 20));
console.log(whiteSage.health);


const juggernaut = {
  name: 'Aerona',
  mana: 50,
  health: 20,
} 

//borrow heal method

/* 
CALL

first parameter of call should be what "this" should be bound to
calls is a method of an object, substituting 
another obj for the current obj

following parameters after the first depends on the parameters of the method called
*/
console.log('pre-healed', juggernaut);
whiteSage.heal.call(juggernaut, 50, 30);
console.log('healed', juggernaut);


/*
APPLY

takes array of parameters
*/

const timeFolk = {
  name: 'Ten',
  mana: 70,
  health: 40,
}

console.log(`${timeFolk.name}'s current health is ${timeFolk.health}`);
whiteSage.heal.apply(timeFolk, [20, 10]);
console.log(`After taking a sip of the white lotus drink, ${timeFolk.name}'s current health is now ${timeFolk.health}`);

/* 
BIND

bind returns new function with a certain context and parameters
usually used if we want function to be called later 
on with certain context and this

allows to store function for later use
*/

const Fae = {
  name: 'Luneria',
  mana: 1000,
  health: 50,
}

const healFae = whiteSage.heal.bind(Fae, 100, 30);

console.log(Fae.health);
healFae();
console.log(Fae.health);

/*
CALL AND APPLY useful for borrowing methods from an object
BIND useful to call functions later on, with a certain context (this)
*/


const array = [1,2,3];

//spread operator method
function getMaxNumber(arr){
  return Math.max(...arr);
}

//apply method
function getMaxNum(arr){
  return Math.max.apply(null, arr); //apply accepts array as parameter
}

console.log(getMaxNumber(array)) // should return 3
console.log(getMaxNum(array)) // should return 3