
const readline = require("readline-sync");

let wins = 0;

let trials = 3;

let wordBank = [
  'loyalty',
  'bravery',
  'self-love',
  'kindness',
  'love',
  'spirit',
  'life',
  'respect',
  'universe',
]

const WORD = wordBank[Math.floor(Math.random() * wordBank.length)];

let winningPoint = WORD.length;

let blank = WORD.split('').map(letter => '_');

function prompt(msg) {
  console.log(`✨${msg}✨`)
}

function grabLetter() {
  let alph = /^[a-zA-Z]+$/g;
  prompt('Type a letter');
  let userLetter = readline.question().toLowerCase();
  if (!(userLetter.match(alph))) {
    return 'invalid';
  } else {
    return userLetter;
  }
}

function guessLetter(choice, string) {
  console.log(trials);
  let found = 0;
  if (trials < 1 ) {
    return false;
  }
  if (!(string.includes(choice))) {
    trials -= 1;
    console.log(trials);
    console.log('letter not found');
  } else {
    string.split('').forEach((letter, index) => {
      if (letter === choice) {
        if (blank[index] !== choice) {
          wins += 1;
          found += 1; 
          blank[index] = choice;
        }
      }
    })
    return true;
  }
}

console.log(blank);
while (true) {
  if (trials < 1) {
    console.log('Sorry! You Lost!');
    return false;
  }
  if (wins === winningPoint) {
    console.log('You win!');
    return false;
  }
  let userLetterChoice = grabLetter();
  let check = guessLetter(userLetterChoice, WORD);

  console.log(blank);

  if (check === false) {
    return false;
  }
}

