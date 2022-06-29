
const countries = [
  'japan',
  's. korea',
  'philippines',
  'italy',
  'france',
]

//Function Expression
var japan = function() {
  console.log(`I will visit ${countries[Math.floor(Math.random() * countries.length)]} with Hunkle someday.`);
}

japan();

//Function Declaration