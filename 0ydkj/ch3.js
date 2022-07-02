
const pokArr = [
  'pikachu',
  'torchick',
  'gyrados',
  'chikorita',
]

const pickPokemon = (arr) => arr[0];

console.log(pickPokemon(pokArr));

/*
spread operator
- spreads an array into separate arguments
- add items to arrays
- combining arrays or obj
- spreading an array out into a function's arguments
*/



/*
rest parameter
- allows representation of an indefinite number of arguments as an array 
- function can be called with any # of arguments, no matter how it was defined
*/


function sumOf(...input){
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}

console.log(sumOf(5, 4)) // 9
console.log(sumOf(5)) // 5
console.log(sumOf(5, 1, 1, 1)) // 8