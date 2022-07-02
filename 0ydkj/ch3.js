
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

//Copying an array, combining an array
const fruits = ['🍏','🍊','🍌','🍉','🍍']
const moreFruits = [...fruits];
console.log(moreFruits) // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]
fruits[0] = '🍑'


//concatenate arrays
console.log(...[...fruits,'...',...moreFruits]) //  🍑 🍊 🍌 🍉 🍍 ... 🍏 🍊 🍌 🍉 🍍


//using Math functions
const numbers = [8, 11, 4, 22];
console.log(Math.max(...numbers)); //22


//using array as arguments
const fruitStand = ['🍏','🍊','🍌'];
const sellFruit = (f1, f2, f3) => { console.log(`Fruits for sale: ${f1}, ${f2}, ${f3}`) }
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍊, 🍌 passes each individual elements to respective parameters
fruitStand.pop()
fruitStand.pop()
fruitStand.push('🍉')
fruitStand.push('🍍')
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍉, 🍍
fruitStand.pop()
fruitStand.pop()
sellFruit(...fruitStand,'🍋') // Fruits for sale: 🍏, 🍋, undefined

// adding an item to a list
const fewFruit = ['🍏','🍊','🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]

// combining objects
const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂

//DOM manipulation (Document Object Model manipulation)
// - can convert NodeList and arguments objects to arrays
// like selecting HTML elements on the page
// [...document.querySelectorAll('div')]




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

/*
When a function (declaration or expression) is defined, a new scope is created. 
The positioning of scopes nested inside one another creates a
natural scope hierarchy throughout the program, called the scope chain. 

Each new scope offers a clean slate, a space to hold its own set of variables. 
When a variable name is repeated at different levels of the scope chain, 
shadowing occurs, which prevents access to the outer variable from that point inward.

 Scope chain determines the path along which variables can be accessed. 
 The chain is directed, meaning the lookup moves upward/outward only.
*/