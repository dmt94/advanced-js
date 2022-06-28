
const arr = ['like an angel', 'pretty bad', 'horrendous', 'good'];

let randomWord = arr[Math.floor(Math.random() * arr.length)];

console.log(sing(randomWord));
console.log(metal); // undefined
// console.log(crystal); 
// ReferenceError: cannot access before initialization for variables declared with 'let' or const'

function sing() {
  return `Hunkle sang ${randomWord}. 
  Tears came out of my eyes. 
  I was pretty surprised.`
}

var metal = 'titanium';

// let crystal = 'amethyst';