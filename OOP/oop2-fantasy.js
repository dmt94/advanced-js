const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

function createElf(name, weapon) {
  return {
    // name: name, 
    // weapon: weapon,
    //if prop and value is same u can:
    name,
    weapon,
    attack() {
      return 'attack with ' + weapon + '!!!'
    }
  }
}

const hunkle = createElf('Hunkerina', 'electric bow');
hunkle.attack = elfFunctions.attack;
const kirei = createElf('Kirei', 'fiery blow');
kirei.attack = elfFunctions.attack;

//who is calling? kirei object
console.log(kirei.attack());







//Object.create() cleaner code, creates a link via prototypal inheritance
// not the most updated way to do this, but idea is to showcase connection and possibilities
// with prototypal inheritance

const elfFunctions2 = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

function createNewElf(name, weapon) {
  //all new elves will share the attack method/methods in the elfFn2
  let newElf = Object.create(elfFunctions2);

  console.log(newElf.__proto__); // { attack: [Function: attack] }

  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const luneria = createNewElf('Aeronna', 'The Sun Wand');
console.log(luneria.attack());
