




/* 
console.log(userIs()); 

CAN call the function before function declaration BUT if you bind a function to a new variable,
you cannot call that variable before declaring it. 
Example: 
console.log(userCreature) CANNOT COME BEFORE the declaratino of userCreature:
let userCreature = userIs())
*/

console.log(`A GOBLIN would reside at:\n${residence('goblin')}\n`); 
/* can call an existing function before its declaration
Function declarations are NOT part of the regular top-to-bottom flow out of control. 
They are conceptually moved to the TOP of their scope and can be used by all the code in that scope
*/

let userCreature = userIs(); //using functions as VALUES 
let userResidence = residence(userCreature);

console.log(`You are a ${userCreature.toUpperCase()} !\nSo you live in:\n${userResidence}`);

function userIs() {
  let creatureList = ['mermaid', 'vampire', 'fairy', 'human', 'mage', 'goblin'];
  let randInt = Math.floor(Math.random() * creatureList.length);
  return creatureList[randInt];
}

function residence(creature) {
  if (creature === 'mermaid') {
    return 'Mermaid Cove';
  }
  else if (creature === 'vampire') {
    return 'Brasov Castle';
  }
  else if (creature === 'fairy') {
    return 'Titania\'s Forest';
  }
  else if (creature === 'mage') {
    return 'The Wizarding Tower for Young Witches & Warlocks'
  }
  else if (creature === 'human') {
    return 'The Mortal Realm';
  }
  else {
    return 'Halloweentown';
  }
}

// let userResidence;