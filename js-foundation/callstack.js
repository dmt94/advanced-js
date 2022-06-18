const number = 720;
const string = 'love is real';
const human = { // allocate memory for an object... and its values
  first: 'Maries',
  last: 'Taylaran',
}

/* memory heap is free store that js engine provides for us
that is used to store arbitrary data in no order in memory
use diff variables to point to diff storage data

engine puts data in storage boxes for us
  */

function subtractTwo(num1, num2) {
  return num1 - num2;
}

function calculate() {
  sumTotal = 4 + 5; 
  return subtractTwo(sumTotal);
}
// this functions is allocated to memory 
// everytime code is run -> call stack is used

