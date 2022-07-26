class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`You caught ${this.name}!`);
  }
  fight() {
    console.log(`${this.name} is ready to attack!`);
  }
}

class Fairy extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  dazzle() {
    console.log(`${this.name} uses dazzle! ~~-（。ˇ ⊖ˇ）♡`);
  }
}

//instantiation uses new 
const sylveon = new Fairy('Sylveon', 'Fairy');
const alcremie = new Fairy('Alcremie', 'Fairy');

console.log(sylveon.dazzle());
console.log(alcremie.dazzle());


const trimTrial = '    helllo';

console.log(trimTrial.trim());


console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991