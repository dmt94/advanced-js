let rlSync = require('readline-sync');

function fizzyBuzzy(max) {
  for (let number = 1; number <= max; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
      continue;
    }
    else if (number % 3 === 0) {
      console.log('Fizz');
      continue;
    }
    else if (number % 5 === 0) {
      console.log('Buzz');
      continue;
    }
    console.log(number);
  }
}

fizzyBuzzy(100);