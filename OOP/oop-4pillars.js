/*
encapsulation
- wrap related code into a box
- reusable and easier to maintain


abstraction
- hiding complexity from user 
- creating simpler interfaces 
  - i'll take care of class, then just take care of instantiation
- reduces complexity 


inheritance
- inheriting from other classes = avoid rewrite same code
- save memory space by having shared methods


polymorphism
- many forms 
- ability to call the same method on different objects - each object 
responds in a different way
- useful bc we can reuse functionality from superclass to adapt to specific needs/problem
*/
class Character {
  constructor(name, status, weapon) {
    this.name = name;
    this.status = status;
    this.weapon = weapon;
  }
  attack() {
    return `${this.status} ${this.name} attacks with ${this.weapon}!!!`;
  }
}

class Fae extends Character {
  constructor(name, status, weapon, type) {
    super(name, status, weapon);
    this.type = type;
  }
  //method overloading - adding extra parameters to method
  attack(cry) {
    return `${cry}!!! This is for my Summer Queen, Scarlet!! ${this.name}, the ${this.type} attacks with her ${this.weapon}!`;
  }
}

class Ogre extends Character {
  constructor(name, status, weapon, type) {
    super(name, status, weapon);
    this.type = type;
  }
  //method overwriting
  attack() {
    return `${this.name} attacks with their ${this.weapon}, while screaming to get off their property!`
  }
}

const juno = new Fae('Juno', 'Loyal Noble', 'Sun Wand', 'Summer Fae');
console.log(juno.attack('kreeee~'));

const shrek = new Ogre('Shrek', 'Peasant', 'Wooden Club', 'Swamp Ogre');
console.log(shrek.attack());

