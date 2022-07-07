const elf = {
  name: 'Hunkerina',
  weapon: 'staff',
  attack() {
    return `attack with ` + this.weapon + '!!!';
  }
}

console.log(elf.attack());

//factory functions create objects

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
const kirei = createElf('Kirei', 'fiery blow');
console.log(hunkle.attack());
console.log(kirei.attack());

//