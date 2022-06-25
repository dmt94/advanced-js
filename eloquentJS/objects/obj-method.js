/*
When a function is called as a method—looked up as a 
property and immediately called, as in object.method()—the binding 
called this in its body automatically points at the object 
that it was called on.
*/

let hunkle = {
  name: 'hunkle',
  birthdate: 'December 5, 1998',
  'sun sign': 'sagittarius',
  hobbies: [
    'baking',
    'playing games with brothers',
    'working out',
    'learning something new',
    'playing the piano',
  ],
}

const ACTIVITIES = [
  'go hiking',
  'watch anime in the theaters',
  'go to japan',
  'go to a spa retreat',
  'go to a food festival',
  'watch a broadway musical in NYC'
];

let saysBored = () => "I changed my mind. It's so boring";
let saysExcited = () =>  "Oh man. I feel so pumped!";
let saysGame = (game) => `Sorry Kirei, I'm playing ${game} right now...`;
let saysActivity = (arr) => arr[Math.floor(Math.random() * arr.length)];

hunkle.saysBored = saysBored;
hunkle.saysExcited = saysExcited;
hunkle.saysGame = saysGame;
hunkle.saysActivity = saysActivity;


console.log('Hunkle says:', hunkle.saysExcited());
console.log('Hunkle says:', hunkle.saysGame('Fall Guys'));
console.log('Hunkle says: I want to', hunkle.saysActivity(ACTIVITIES), 'with you');


