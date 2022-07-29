const astroProfessions = {
  aries: [
    {engineers: 99}, 
    {compEngineer: 8}, 
    {fashion: 34}, 
    {models: 245}, 
    {president: 72}, 
    {realEstate: 9},
    {businessWoman: 39},
    {ceo: 57},
    {neuroscience: 4},
    {psychologist: 21},
    {billionaire: 17},
  ],
  taurus: [
    {engineers: 103}, 
    {compEngineer: 15}, 
    {fashion: 28}, 
    {models: 264}, 
    {president: 86}, 
    {realEstate: 9},
    {businessWoman: 23},
    {ceo: 65},
    {neuroscience: 11},
    {psychologist: 29},
    {billionaire: 18},
  ],
  gemini: [
    {engineers: 109}, 
    {compEngineer: 9}, 
    {fashion: 24}, 
    {models: 241}, 
    {president: 71}, 
    {realEstate: 5},
    {businessWoman: 29},
    {ceo: 62},
    {neuroscience: 3},
    {psychologist: 27},
    {billionaire: 19},
  ],
  cancer: [
    {engineers: 82}, 
    {compEngineer: 9}, 
    {fashion: 37}, 
    {models: 245}, 
    {president: 71}, 
    {realEstate: 12},
    {businessWoman: 41},
    {ceo: 67},
    {neuroscience: 5},
    {psychologist: 30},
    {billionaire: 22},
  ],
  leo: [
    {engineers: 115}, 
    {compEngineer: 8}, 
    {fashion: 34}, 
    {models: 281}, 
    {president: 82}, 
    {realEstate: 4},
    {businessWoman: 37},
    {ceo: 75},
    {neuroscience: 0},
    {psychologist: 29},
    {billionaire: 29},
  ],
  virgo: [
    {engineers: 109}, 
    {compEngineer: 8}, 
    {fashion: 30}, 
    {models: 260}, 
    {president: 89}, 
    {realEstate: 3},
    {businessWoman: 50},
    {ceo: 62},
    {neuroscience: 2},
    {psychologist: 23},
    {billionaire: 21},
  ],
  libra: [
    {engineers: 90}, 
    {compEngineer: 9}, 
    {fashion: 38}, 
    {models: 301}, 
    {president: 86}, 
    {realEstate: 10},
    {businessWoman: 42},
    {ceo: 61},
    {neuroscience: 3},
    {psychologist: 27},
    {billionaire: 19},
  ],
  scorpio: [
    {engineers: 75}, 
    {compEngineer: 9}, 
    {fashion: 28}, 
    {models: 291}, 
    {president: 78}, 
    {realEstate: 6},
    {businessWoman: 38},
    {ceo: 68},
    {neuroscience: 7},
    {psychologist: 24},
    {billionaire: 20},
  ],
  sagittarius: [
    {engineers: 88}, 
    {compEngineer: 13}, 
    {fashion: 25}, 
    { models: 231}, 
    {president: 74}, 
    {realEstate: 9},
    {businessWoman: 33},
    {ceo: 58},
    {neuroscience: 2},
    {psychologist: 22},
    {billionaire: 18},
  ],
  capricorn: [
    {engineers: 108}, 
    {compEngineer: 8}, 
    {fashion: 29}, 
    {models: 254}, 
    {president: 85}, 
    {realEstate: 7},
    {businessWoman: 39},
    {ceo: 49},
    {neuroscience: 3},
    {psychologist: 31},
    {billionaire: 12},
  ],
  aquarius: [
    {engineers: 84}, 
    {compEngineer: 9}, 
    {fashion: 25}, 
    {models: 237}, 
    {president: 93}, 
    {realEstate: 5},
    {businessWoman: 42},
    {ceo: 52},
    {neuroscience: 4},
    {psychologist: 26},
    {billionaire: 6},
  ],
  pisces: [
    {engineers: 85}, 
    {compEngineer: 12}, 
    {fashion: 27}, 
    {models: 260}, 
    {president: 82}, 
    {realEstate: 9},
    {businessWoman: 32},
    {ceo: 65},
    {neuroscience: 6},
    {psychologist: 33},
    {billionaire: 24},
  ],
}

const professions = [
  'engineers', 
  'compEngineer', 
  'fashion', 
  'models', 
  'president',
  'realEstate',
  'businessWoman',
  'ceo',
  'neuroscience',
  'psychologist',
  'billionaire',
];

function countTotal(obj, profession) {
  let total = [];
  let totalSum = 0;
  let top3 = [];

  for (let prop in obj) {
    total.push([prop, obj[prop][professions.indexOf(profession)][profession]])
    totalSum += obj[prop][professions.indexOf(profession)][profession];
  }
  console.log(`___________________\n${profession.toUpperCase()}\n`);
  
  total.forEach(arr => {
    top3.push([arr[0], (((arr[1]/totalSum) * 100)).toFixed(2)]);
    console.log(`${arr[0]}: ${(((arr[1]/totalSum) * 100)).toFixed(3)}%`);
  })
  
  console.log(`Total ${profession}: ${totalSum}`);
  console.log(`\n`);
  console.log(`Top 5 signs in profession => ${profession}:`);

  top3.sort((a, b) => a[1] - b[1]);
  top3.reverse().slice(0,5).forEach((arr, index) => {
    console.log(`#${index + 1} ${arr[0]}: ${arr[1]}%`);
  });
  console.log(`\n`);
}

const engineerData = countTotal(astroProfessions, 'engineers');
const compEngineerData = countTotal(astroProfessions, 'compEngineer');
const fashionData = countTotal(astroProfessions, 'fashion');
const modelData = countTotal(astroProfessions, 'models');
const presidentData = countTotal(astroProfessions, 'president');
const realEstate = countTotal(astroProfessions, 'realEstate');
const businessWoman = countTotal(astroProfessions, 'businessWoman');
const ceo = countTotal(astroProfessions, 'ceo');
const neuroscience = countTotal(astroProfessions, 'neuroscience');
const psychologist = countTotal(astroProfessions, 'psychologist');
const billionaire = countTotal(astroProfessions, 'billionaire');

console.log(engineerData);
console.log(compEngineerData);
console.log(fashionData);
console.log(modelData);
console.log(presidentData);
console.log(realEstate);
console.log(businessWoman);
console.log(ceo);
console.log(neuroscience);
console.log(psychologist);
console.log(billionaire);

