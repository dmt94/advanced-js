
const arr = ['like an angel', 'pretty bad', 'horrendous', 'good'];

let randomWord = arr[Math.floor(Math.random() * arr.length)];

console.log(sing(randomWord));
console.log(metal); // undefined
// console.log(crystal); 
// ReferenceError: cannot access before initialization for variables declared with 'let' or const'

//function declaration
function sing() {
  return `Hunkle sang ${randomWord}. 
  Tears came out of my eyes. 
  I was pretty surprised.`
}

var metal = 'titanium';


//function expression
/* 
During creation phase: sing2 variable gets hoisted 
with a value of undefined
*/
var sing2 = function() {
  console.log('always have compassion');
}

sing2();


var faveFood = 'pizza';

var foodStatement = function () {
  console.log("Original fave food: "  + faveFood);

  var faveFood = 'hunkle sandwich'; // gets hoisted in this lexical 
  console.log("New favourite food: " + faveFood);
}

foodStatement();
// gives new execution context


/* 
Hoisted positions
faveFood = 'undefined'
foodstatement = 'undefined'
*/


/* non-hoisted variables */
let faveDrink = 'happiness brew dr';

let foodDrinkStatement = function () {
  console.log("Original fave drink: "  + faveDrink);

  faveDrink = 'lavender lemonade'; // gets hoisted in this lexical 
  console.log("New favourite drink: " + faveDrink);
}

foodDrinkStatement();


/* Hoisting Exercise */

function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

console.log(bigBrother());