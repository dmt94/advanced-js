let dragon = {
  name: 'Targaryen',
  partner: 'Daenah',
  fire: true,
  special: 'ring of fiery dreams',
  royalty: true,
  type: 'golden scaled',
  fight() {
    return 45
  },
  special() {
    return 75
  },
  dance() {
    return `swish left swish right fly in a circle and bow`
  },
  battlecry() {
    if (this.fire) {
      return `🔥🔥🔥🔥🔥🔥🔥🔥\nI am ${this.partner}'s royal protector and eternal fighter.\nPrepare to bow in defeat.\n🔥🔥🔥🔥🔥🔥🔥`
    } else {
      return `I will fight for honor...with only the fire inside me.`;
    }
  }
}

console.log(dragon.battlecry());

let lizardFolk = {
  name: 'Kichi',
  partner: 'Hunk',
  fight() {
    return 4
  }
}

const lizardBattleCry = dragon.battlecry.bind(lizardFolk);
console.log(lizardBattleCry()); // `I will fight for honor...with only the fire inside me.`

lizardFolk.__proto__ = dragon;
console.log(lizardFolk.battlecry()); // since now lizardFolk fire is true , then return from dragon shows
console.log(lizardFolk.fight()); // overwrite the dragon's fight power, since this is already declared for lizardFolk
console.log(lizardFolk.dance()); // return dragon's dance

//isPrototypeOf(obj)
console.log(dragon.isPrototypeOf(lizardFolk)); 
//true dragon is a prototype of lizardFolk
// does LIZARDFOLK inherit from DRAGON?