
const countries = [
  'japan',
  's. korea',
  'philippines',
  'italy',
  'france',
  'brazil',
  'fiji',
  'austria',
  'greece',
  'iceland',
  'malaysia',
  'netherlands',
  'india',
  'canada',
  'sweden',
  'poland',
  'thailand',
  'united kingdom',
];

let warmCountries = [
  'philippines',
  'india',
  'ecuador',
  'costa rica',
  'fiji',
  'spain'
]

//Function Expression
var travel = function(array) {
  let finalStatement = (place) => `Hunkle and I will travel to ${place} someday.`;
  return finalStatement(grabRandomElement(array));
}

//Function Declaration
function grabRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)].toUpperCase();
}

function someday() {
  console.log('I know I will be able to travel the world safely one day :)');
}

let travelWarm = travel(warmCountries);
let travelAll = travel(countries);

function says(person, travel) {
  console.log(`${person} says: ${travel}`);
}

//Function Invocation/Call/Execution
someday();
says('kirei', travelAll);
says('kichan', travelWarm);



//marriage
function marry(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments)); //creates array from arguments
  return `${person1} is now married to ${person2} ❤️🌲`;
}

console.log(marry('hunkle', 'kirei'));


function marry2(...args) {
  console.log('arguments', args); //you can avoid arguments now, not really necessary
  return `${args[0]} is now married to ${args[1]} ❤️🌲`;
}

console.log(marry2('kirei goose', 'hunkle goose'));


// empty arguments

function india() {
  console.log(arguments) // {} empty object
}