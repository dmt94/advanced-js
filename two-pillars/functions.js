const obj = {
  two() {
    return 2;
  }
}

console.log(obj.two());

function three() {
  return 3;
}

console.log(three.call()); // 3

//function expression

const four = () => 4;

console.log(four()); // 4



// Function Constructor
/*
JS comes with Built in JS Objects 
*/

const five = new Function('return 5');
//parameter = what we want to return
//we can also add parameters

console.log(five());


const greetings = new Function('username', 'return username');

console.log(greetings('Kirei'));


//adding properties to function

function introduction() {
  console.log("Pleased to meet everyone");
}

introduction.yell = 'BOOO';
/* 
Underneath the hood: JS makes a special object

can be represented like so:
yell: 'BOO'm
name: 'introduction',
(): console.log('pleased to meet everyone")
*/

//FUNCTIONS ARE FIRST CLASS CITIZENS IN JS

/*
	- functions can be assigned to variables and properties of an object
		○ var stuff = function(){}
	- can pass functions as arguments 
we can return functions as values from other functions
*/

let luggage = [];

const pack = function(item) {
  luggage.push(item);
}

pack('pink sweater');
pack('blanket');
console.log(luggage);


const unpack = function(arr) {
  while (arr.length-1 > 0) {
    arr.pop();
  }
  return function() {
    console.log(`all done unpacking! Left ${arr[0]} behind`);
  }
}

let fullLuggage = [
  'yellow bikini',
  'sunblock',
  'long white cardigan',
  'undergarments',
  'lavender sundress',
  'skincare bag'
]

console.log(fullLuggage);

unpack(fullLuggage)(); //all done...

console.log(fullLuggage) // ['yellow bikini']



//pass FUNCTION as ARGUMENT

let fullbag = [
  'wallet',
  'sunscreen',
  'sunglasses',
  'coin purse',
  'makeup bag',
  'iphone',
  'hand sanitizer',
  'face mask',
];

function removeItem(choice, arr) {
  let removedItem = '';
  arr.forEach((item, index) => {
    if (choice === item) {
      removedItem += arr.splice(index, 1)[0];
    }
  })
  return removedItem;
}

function giveTo(item) {
  console.log(`Here is my ${item}! Take care of it for me.`);
}

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

giveTo(removeItem((randomItem(fullbag)), fullbag));
console.log(fullbag);


//counter

const colors = [
  'red',
  'red',
  'red',
  'red',
  'orange',
  'orange',
  'blue',
  'lavender',
  'pink',
  'indigo'
];

function countDuplicate(arr, colorChoice) {
  let count = {}
  arr.forEach(color => {
    if (color === colorChoice) {
      count[color] = (count[color] || 0) + 1;
    }
  })
  return count;
}

console.log(countDuplicate(colors, 'pink'));
console.log(countDuplicate(colors, 'red'));

//find all counts 
const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);