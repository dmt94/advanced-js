class Elf {
  constructor(name, status, weapon) {
    this.name = name;
    this.status = status;
    this.weapon = weapon;
  }
  attack() {
    return `${this.status} ${this.name} attacks with ${this.weapon}`;
  }
}

const fiona = new Elf('Fiona', 'Princess', 'Charming Flute'); //Elf instance
const ogre = {...fiona};
ogre.__proto__ //empty object
fiona.__proto__ //Elf

// console.log(ogre.attack()); //TypeError



//better
class Character {
  #age = 1000; //part of state that we can use in other areas, #private variable
  //cant access in instances
  constructor(name, status, weapon) {
    this.name = name;
    this.status = status;
    this.weapon = weapon;
  }
  attack() {
    return `${this.status} ${this.name} attacks with ${this.weapon}`;
  }
  ageOf() {
    return `${this.#age}`;
  }
}


//sub-classing
//we have a base class (a super class) and a sub-class
// we want to inherit from super class all its props and methods and create something new from it
class Fairy extends Character {
  constructor(name, status, weapon, type) {
    super(name, status, weapon); //this calls constructor of super class (Character) so that its other properties are used
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, status, weapon, color) {
    super(name, status, weapon);
    this.color = color;
  }
  makeFort() {
    return `${this.name} has the strongest fort in Western FaeLand!`;
  }
}

//inheriting from higher class(superclass) Character
class Magician extends Character {
  constructor(name, status, weapon, spell) {
    super(name, status, weapon);
    this.spell = spell;
  }
  makeMagic() {
    return `${this.name} is currently casting ${this.spell} on you...`;
  }
  travel() {
    return `${this.name} is flying high with their new Jupiter's Broom 22!'`
  }
}

//instances
const felicity = new Fairy('Felicity', 'Maiden', 'Starwand', 'Enchantress');
const kresh = new Ogre('Kresh', 'Noble', 'club', 'green');
const kira = new Magician('Kira', 'Wizarding Student', 'Crystal Oak Wand', 'Fiery Protection');

console.log(kira.makeMagic());
console.log(kira.travel());

console.log(Ogre.isPrototypeOf(kresh)); //false, Ogre is a construction function
console.log(Ogre.prototype.isPrototypeOf(kresh)); //true

console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); //true

console.log(kira instanceof Magician); //true
console.log(kira instanceof Ogre); //false
console.log(kira instanceof Character); //true


console.log(kira.attack());
/*
Instance is creating a version of a Class
Inheritance (extends) is inheriting something from a higher class (the superclass)
*/


