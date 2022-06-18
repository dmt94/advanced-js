const multiply = (first, sec) => console.log(first * sec);

const yourName = (firstName, surname) => {
  let gooseTownFirstName = firstName.replace(firstName[0], 'K');
  let gooseTownSurname = surname + '-Goose';
  console.log(`Your new name is ${gooseTownFirstName} ${gooseTownSurname}. Welcome!`);
}

const classArray = [
  'royal goose family',
  'aristocrat circle',
  'upper-class',
  'middle-class',
  'lower-class'
]

const yourClass = () => {
  let randomClass = classArray[Math.floor(Math.random() * classArray.length)];
  return randomClass;
}

let count = 0;
const counter = () => {
  let classCheck = yourClass();
  count += 1;
  if (classCheck !== 'royal goose family') {
    counter()
  }
  return count;
}

const yourJourney = () => {
  let reincarnationCycles = counter();

  console.log(`Reincarnation cycle: ${reincarnationCycles}`);

  if (reincarnationCycles < 5) {
    return `Wow! It didn't take too long for you to be part of the royal lineage.`;
  } else if (reincarnationCycles > 10) {
    return `Took you a while to get here, but you are now part of the royal family in this lifetime!`;
  } else {
    return `You are royalty in this lifetime!`;
  }
}


yourName('Kirei','Tee');
// console.log(yourJourney());

while(yourJourney() !== `Took you a while to get here, but you are now part of the royal family in this lifetime!`) {
  yourJourney();
}


