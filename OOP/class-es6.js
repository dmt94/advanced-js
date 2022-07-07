// ES6 Class
// we keep all of the properties inside a contained environment
// pseudoclassical inheritance
class Elf {
  constructor(name, weapon) {
    this.name  = name;
    this.weapon = weapon;
  }
  attack() {
    return `attack with ${this.weapon}!!`;
  }
  build() {
    return `${this.name} built a castle!`;
  }
}

const kirei = new Elf('Kirei', 'lightning arrows'); //needs new

console.log(kirei instanceof Elf); //true, we created an instance of class Elf

console.log(kirei.attack());
console.log(kirei.build());

//instance happens we call this class and create an object out of this class