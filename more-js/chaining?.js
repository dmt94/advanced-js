let kirei_pokemon = {
  alcremie: {
    type: 'fairy',
    legendary: false,
    cp: 1900,
    moves: [
      'tackle',
      'dazzling gleam'
    ]
  }
}

let hunkle_pokemon = {
  arceus: {
    type: 'electric',
    legendary: true,
    cp: 4200,
    moves: [
      'shadow claw',
      'outrage',
      'iron tail'
    ]
  }
}

let alcremieMoves = hunkle_pokemon?.alcremie?.moves;

console.log(alcremieMoves); //undefined bc hunkle_pokemon does not have alcremie


//Nullish Coalescing Operator ??

let isLegendary = kirei_pokemon?.alcremie?.legendary || 'Not legendary';
console.log(isLegendary); //No legendary