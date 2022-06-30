const character = {
  name: 'Sherbert',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter();

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW); //this should return 'Simon' bud doesn't





/* USING BIND */

const funnyCharacter = {
  name: 'Kichan',
  getCharacter() {
    return this.name;
  }
};

const giveMeFunny = funnyCharacter.getCharacter.bind(funnyCharacter);

console.log('Ladies and gentlemen, please welcome the comedian: ' + giveMeFunny());