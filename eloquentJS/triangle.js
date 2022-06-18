let rlSync = require('readline-sync');

let maxNum = rlSync.question("Pick a number that will represent the peak of the arrow:\n");
let char = rlSync.question("Pick a symbol that will represent the body of your arrow:\n");
let x = 1; 

function recursTriangle(max, min) {
  function top() {
  let one = char.repeat(x);
  console.log(one);
  x += 1;
  while (x <= max) {
    return top();
  }
  }
  function bottom() {
  let tip = char.repeat(max);
  console.log(tip);
  max -= 1;
  while (max >= min) {
    return bottom();
  }
  }
  top();
  bottom(); 
}

console.log("");
recursTriangle(maxNum, x);