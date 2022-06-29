
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