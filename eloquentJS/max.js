// const max = (...numbers) => {
//   let result = 0;
//   for (let number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//     return result;
//   }
// }

let nums = [13, 31214, 342, 23, 1000, 90, 34];



function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));

console.log(max(5, 9, 10, 2, 3));
console.log(max(...nums)); //have to use dot notation on array
console.log(max(nums));

/*
Math.max computes the maximum 
of all the arguments it is given

[5, 1, 7] => ...numbers
- spreads out the array into the function call,
passing its elements as separate arguments
 */

let newWords = ["happiness", "creation"];

let original = ["peace", "connection", ...newWords, "trust"];

console.log(original);



const COMPLIMENTS = [
  'You are gorgeous',
  'You have a lovely soul',
  'You are harmonious',
  'You will contribute beautifully to the world',
  'You know how to inspire people to be the best they can be',
  'Never underestimate your sense of self and how you can enrich other people\'s lives'
]

const randomCompliment = (arr) => arr[Math.floor(Math.random() * arr.length)];

console.log(randomCompliment(COMPLIMENTS));