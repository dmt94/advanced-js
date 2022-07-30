let readline = require('readline-sync');

const USER = {};

const LOTTER_WIN = Math.floor(Math.random() * 1000000000 + 1000);

const drawNumber = () => {
  let number = Math.floor(Math.random() * 100) + 1;
  if (number < 10) {
    number = '0' + number;
  }
  return number;
}

const WINNING_NUMBERS = [
  [drawNumber()], 
  [drawNumber()],
  [drawNumber()],
  [drawNumber()],
  [drawNumber()],
  [drawNumber()],
];

console.log(WINNING_NUMBERS.flat());

const yourDraw = () => {
  let first = drawNumber();
  let second = drawNumber();
  let third = drawNumber();
  let fourth = drawNumber();
  let fifth = drawNumber();
  let citrine = drawNumber();

  return [
    [first],
    [second],
    [third],
    [fourth],
    [fifth],
    [citrine],
  ];
}

const userDraw = () => {
  let theUserDraw = yourDraw();
  USER['userDrawingNumbers'] = theUserDraw;
  return theUserDraw;
}

const displayUserDraw = (arr) => {
  return arr.join('-');
}

function play() {
  console.log("Welcome to DMT Angel Lottery 2022!");
  console.log(`The jackpot win is $${LOTTER_WIN.toFixed(2)}`);
  let ready = readline.question("Are you ready for a chance to win?\n");
  let finalUserDraw = userDraw();

  if (ready.toLowerCase() === 'yes') {
    console.log(`Let's goooo~`);
    console.log(`Your draw is:\n`);
    console.log(displayUserDraw(finalUserDraw));

  } else if (ready.toLowerCase() === 'no') {
    console.log(`Thanks for visiting.\nRemember that no money in the world can ever\nbuy a peace of mind and a loving spirit :)`)
  }
}

function winningConditions(userNumbers, winningNumbers) {
  let winningPoint = 0;
  let citrinePoint = 0;
  let citrine = winningNumbers[winningNumbers.length - 1];

  if (citrine === userNumbers.splice(userNumbers.length - 1, userNumbers.length)) {
    citrinePoint += 1;
  }

  let finalWinningNumbers = winningNumbers.flat();
  userNumbers.flat().splice(0, userNumbers.length - 2).forEach((num) => {
    if (finalWinningNumbers.splice(0, finalWinningNumbers.length - 2).includes(num)) {
      winningPoint += 1;
    }
  });
}

play();
// console.log(USER);
// console.log(WINNING_NUMBERS);