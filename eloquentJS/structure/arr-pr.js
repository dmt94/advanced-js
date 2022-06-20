let random = [
  'angelfish',
  'octopus',
  'humpback whale',
  'puff fish',
  'jellyfish',
  'narwhal',
  'blue whale',
  'fin whale',
];

let seaCritters = random.map(creature => creature = 'a creature');

//can't reassigns
random.forEach(creature => creature = 'a creature');

console.log(seaCritters);

for (let i = 0; i < random.length; i++) {
  if (random[i].includes('whal')) {
    continue;
  }
  console.log(random[i]);
}

