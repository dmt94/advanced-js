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

lizardFolk.__proto__ = dragon;

for (let prop in lizardFolk) {
  if (lizardFolk.hasOwnProperty(prop)) {
    console.log(prop);  
    //only log whatever lizardFolk has as its own property
    //declared properties
  }
}

/*
dont use .__proto__ there are diff ways we will inherit (later OOP)
we dont manually assign prototype chain
just for show

prototypes makes code and relationships between objects more efficient
saves space
main object has hasOwnProp property and only lives in one memory location
*/