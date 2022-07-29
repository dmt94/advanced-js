const { start } = require('prompt');
let readline = require('readline-sync');

const POKEMON_TRAINER = {
  name: '',
  startingPokemon: '',
}

function grabRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const grabRandomNumber = () => Math.floor(Math.random() * 1000);

function shinyOrNot() {
  let shinyProbability = grabRandomNumber();
  return shinyProbability < 10 ? true : false;
}

const STARTER_POKEMON = [
  {
    name: 'litten',
    type: ['fire'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'popplio',
    type: ['water'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'sprigatito',
    type: ['grass'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'diancie',
    type: ['rock', 'fairy'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'eevee',
    type: ['normal'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'alolan vulpix',
    type: ['ice'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'dratini',
    type: ['dragon'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'scorbunny',
    type: ['fire'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
  {
    name: 'petilil',
    type: ['grass'],
    cp: grabRandomNumber(),
    shiny: shinyOrNot()
  },
];

function getName() {
  let yourName = readline.question("What is your name, trainer?\n");
  if (yourName.length < 2) {
    console.log("Enter more characters");
    getName();
  }
  POKEMON_TRAINER['name'] = yourName;
  return yourName;
}

function greeting(trainerName) {
  console.log(`Welcome to your pokemon journey, ${trainerName}!
  The road to becoming a Pokemon Master will be full of 
  hardships and rewards. Every challenge from this point on
  will test your resolve and push you to places
  you never dreamed possible...\n`);

  setTimeout(() => {
    console.log(`Luckily, you won't be alone starting out your journey!
    You have a starting buddy pokemon to help you get a head start.
    Meet your partner...\n`);

    setTimeout(() => {
      let startingPokemon = grabRandom(STARTER_POKEMON);
      let pokemonName = startingPokemon['name'];

      console.log('>>', pokemonName.toUpperCase(), 'has joined you!');
      console.log('>> Your', pokemonName.toUpperCase(), 'has a starting CP of:', startingPokemon['cp']);

      if (startingPokemon['shiny'] === true) {
        console.log('\n');
        console.log(`Wow! Your pokemon buddy is a rare\n✨SHINY✨✨${pokemonName.toUpperCase()}✨`);
        console.log('\n');
      }

      POKEMON_TRAINER['startingPokemon'] = startingPokemon; 

      giveNickname();
      startJourney();
      
    }, "2000");
  }, "4000")
}

function giveNickname() {
  let pokemonName = readline.question("What name would you like to give your new pokemon?\n");
  POKEMON_TRAINER['startingPokemon']['nickname'] = pokemonName;
  return pokemonName;
}

function startJourney() {
  setTimeout(() => {
    setTimeout(() => {
      console.log('ପ(๑•ᴗ•๑)ଓ ❤️');
    }, "1000");
    setTimeout(() => {
      console.log('(づ˶•༝•˶)づ♡');
    }, "2000");
    setTimeout(() => {
      console.log('( ๑ ˃̵ᴗ˂̵)و ♡');
    }, "3000");
    setTimeout(() => {
      console.log("🌞🌳🛵🌳🌳");
      console.log("Now is the time to start your journey with", POKEMON_TRAINER['startingPokemon']['nickname']);
    }, "4000");
    
    setTimeout(() => {
      console.log("Have fun, keep growing, and catch them all,", POKEMON_TRAINER['name'], '!');
    }, "5000")
  }, "500")
}

const pokemonTrainerName = getName();
greeting(pokemonTrainerName);


