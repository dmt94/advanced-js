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
  console.log(`You are part of the ${randomClass} here in Goose Town.`);
  // if (randomClass === 'royal goose family') {
  //   console.log(`Thank all your lucky stars for being part of the royal family. Must be nice...`);
  // }
  return randomClass;
}

let count = 0;
const counter = () => {
  let classCheck = yourClass();
  count += 1;
  if (classCheck !== 'royal goose family') {
    console.log(`Life: ${count}. Not a royal in this life...\n`)
    counter();
  }
  if (classCheck === 'royal goose family') {
    console.log('Life:', count, 'Yay! You are part of the royal family in this lifetime...finally.\n');
    if (count < 5) {
      console.log(`Life: ${count}. Consider yourself lucky! Didn't take too long to be a royal.\n`)
    }
  }
}

yourName('Kirei','Tee');
counter();
