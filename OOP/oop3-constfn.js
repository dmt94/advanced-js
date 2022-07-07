
// Constructor Functions

function Elf(name, weapon, tool) {
  this.name = name;
  this.weapon = weapon;
  this.tool = tool;
}

const kichan = new Elf('Kirei', 'Magical Love', 'Creation Gloves');
/*
new = automatically returns object 
and creates the elf constructor 
runs the code, constructs, and gives access to the properties

any function envoked using new keyword is called a 
CONSTRUCTOR FUNCTION
- must start with capital letter
*/

//using prototype to add functionality
Elf.prototype.attack = function() {
  return `Attack with ` + this.weapon;
}
Elf.prototype.build = function() {
  return `Making something with ` + this.tool;
}

console.log(kichan.attack());
console.log(kichan.build());




//using Fn Constructor
// Fn Constructors allow us to use 'new' keyword and create these objects for us
const Elf1 = new Function('name', 'weapon', `this.name = name;
this.weapon = weapon;`);

const kireiSan = new Elf1('Kirei-San', 'Firebow');

console.log(kireiSan);
//anonymous { name: 'Kirei-San', weapon: 'Firebow' }



