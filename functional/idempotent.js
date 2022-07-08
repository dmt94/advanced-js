/*
idempotence:
- always returns what we expect it to do
- call itself over and over and gives same result
*/

function notGood() {
  return Math.floor(Math.random() * 100);
}

console.log(notGood());


function alwaysSame(num) {
  console.log(num) 
  //still idempotent because it always returns the expected value = same result
  //not pure bc it communicates with "external"
}

Math.abs(-50); //always returns positive val;
//calling this function over and over again

Math.abs(Math.abs(-50)) //invoking function repeatedly over itself also produces same result