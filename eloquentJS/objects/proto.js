let protoRobo = {
  number: 0000,
  speak(line) {
    console.log(`...${line}`);
  }
}

let UnoRobo = Object.create(protoRobo);
UnoRobo.number = 1;
UnoRobo.type = 'Osmium';
UnoRobo.name = 'Uno';
let UnoRoboPhrases = [
  'I am the RoboLeader. All robots of all kinds fall under my tutelage.',
  'You must be equally important to have gotten a meeting with me...',
  'My favorite drink is the new Z-oil, Electrified',
  'All the knowledge in the world and I\'m stuck here...',
];
let grabRandomPhrase = (arr) =>  arr[Math.floor((Math.random() * arr.length))];
UnoRobo.speak(grabRandomPhrase(UnoRoboPhrases));


console.log(UnoRobo.speak());

