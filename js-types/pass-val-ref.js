let a = 5 //primitive val
// a has an address of where val 5 is sits in memory, etc.
let b = 10 //primitive val - pass by val
let c = b; 

/*
Pass by value 
c has reference to value b
copied value and store in a DIFFERENT memory space - no relation
*/



/*
objects are pass by reference
we don't copy values like pass by value
*/
let obj1 = {
  name: 'Yoru',
  password: '3424'
};

let obj2 = obj1; //points to the address of memory

/* 
great bc we are nor copying and loading memory - we save memory
we are not "copying"
*/

obj2.password = 'easypeazy';

console.log(obj1);
console.log(obj2);

//copy array

//concat
let pokemons = [
  'jigglypuff',
  'gyrados',
  'primarina',
  'diancie',
];

let pokemons2 = [
  'sylveon',
  'alolan vulpix',
  'dragonair',
  'sprigatito',
  ['pikachu', 'ninetails'],
  [['mew'], [['jirachi']]]
];

let allPokemons = [].concat(pokemons, pokemons2);

console.log(allPokemons);


//objects

let obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: {
    deep: 'try and copy this hahah'
  }
}

let clone = Object.assign({}, obj); //creates a new object, does not point to the same object

let anotherClone = {...obj};

let superClone = JSON.parse(JSON.stringify(obj)) //turn obj to string and then parse it back to object
/*
Deep clone = other ways to clone, could take long in real life application
*/

obj.d.deep = 'copied';

console.log(obj);
console.log(clone);
console.log(anotherClone);
console.log(superClone);

