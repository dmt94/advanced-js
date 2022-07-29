let readline = require('readline-sync');

const astroProfessions = {
  aries: [
    {engineers: 99}, 
    {comp_engineer: 8}, 
    {fashion: 34}, 
    {models: 245}, 
    {president: 72}, 
    {realestate: 9},
    {businesswoman: 39},
    {ceo: 57},
    {neuroscience: 4},
    {psychologist: 21},
    {billionaire: 17},
  ],
  taurus: [
    {engineers: 103}, 
    {compengineer: 15}, 
    {fashion: 28}, 
    {models: 264}, 
    {president: 86}, 
    {realestate: 9},
    {businesswoman: 23},
    {ceo: 65},
    {neuroscience: 11},
    {psychologist: 29},
    {billionaire: 18},
  ],
  gemini: [
    {engineers: 109}, 
    {compengineer: 9}, 
    {fashion: 24}, 
    {models: 241}, 
    {president: 71}, 
    {realestate: 5},
    {businesswoman: 29},
    {ceo: 62},
    {neuroscience: 3},
    {psychologist: 27},
    {billionaire: 19},
  ],
  cancer: [
    {engineers: 82}, 
    {compengineer: 9}, 
    {fashion: 37}, 
    {models: 245}, 
    {president: 71}, 
    {realestate: 12},
    {businesswoman: 41},
    {ceo: 67},
    {neuroscience: 5},
    {psychologist: 30},
    {billionaire: 22},
  ],
  leo: [
    {engineers: 115}, 
    {compengineer: 8}, 
    {fashion: 34}, 
    {models: 281}, 
    {president: 82}, 
    {realestate: 4},
    {businesswoman: 37},
    {ceo: 75},
    {neuroscience: 0},
    {psychologist: 29},
    {billionaire: 29},
  ],
  virgo: [
    {engineers: 109}, 
    {compengineer: 8}, 
    {fashion: 30}, 
    {models: 260}, 
    {president: 89}, 
    {realestate: 3},
    {businesswoman: 50},
    {ceo: 62},
    {neuroscience: 2},
    {psychologist: 23},
    {billionaire: 21},
  ],
  libra: [
    {engineers: 90}, 
    {compengineer: 9}, 
    {fashion: 38}, 
    {models: 301}, 
    {president: 86}, 
    {realestate: 10},
    {businesswoman: 42},
    {ceo: 61},
    {neuroscience: 3},
    {psychologist: 27},
    {billionaire: 19},
  ],
  scorpio: [
    {engineers: 75}, 
    {compengineer: 9}, 
    {fashion: 28}, 
    {models: 291}, 
    {president: 78}, 
    {realestate: 6},
    {businesswoman: 38},
    {ceo: 68},
    {neuroscience: 7},
    {psychologist: 24},
    {billionaire: 20},
  ],
  sagittarius: [
    {engineers: 88}, 
    {compengineer: 13}, 
    {fashion: 25}, 
    { models: 231}, 
    {president: 74}, 
    {realestate: 9},
    {businesswoman: 33},
    {ceo: 58},
    {neuroscience: 2},
    {psychologist: 22},
    {billionaire: 18},
  ],
  capricorn: [
    {engineers: 108}, 
    {compengineer: 8}, 
    {fashion: 29}, 
    {models: 254}, 
    {president: 85}, 
    {realestate: 7},
    {businesswoman: 39},
    {ceo: 49},
    {neuroscience: 3},
    {psychologist: 31},
    {billionaire: 12},
  ],
  aquarius: [
    {engineers: 84}, 
    {compengineer: 9}, 
    {fashion: 25}, 
    {models: 237}, 
    {president: 93}, 
    {realestate: 5},
    {businesswoman: 42},
    {ceo: 52},
    {neuroscience: 4},
    {psychologist: 26},
    {billionaire: 6},
  ],
  pisces: [
    {engineers: 85}, 
    {compengineer: 12}, 
    {fashion: 27}, 
    {models: 260}, 
    {president: 82}, 
    {realestate: 9},
    {businesswoman: 32},
    {ceo: 65},
    {neuroscience: 6},
    {psychologist: 33},
    {billionaire: 24},
  ],
};

const professions = (obj) => {
  let careers = obj['aries'].map((item) => {
    return Object.entries(item)[0][0];
  })
  return careers;
};

function displayCareerChoices(arr) {
  console.log("Career choices:\n");
  arr.forEach(career => console.log(`${career}`.toUpperCase()));
  console.log('\n');
};

displayCareerChoices(professions(astroProfessions));

function countTotal(obj, profession) {
  let totalListOfZodiacAmount = [];
  let totalSum = 0;

  for (let prop in obj) {
    let amountOfZodiac = obj[prop][professions(astroProfessions).indexOf(profession)][profession];
    totalSum += obj[prop][professions(astroProfessions).indexOf(profession)][profession];
    totalListOfZodiacAmount.push([prop, amountOfZodiac]);
  }

  return totalListOfZodiacAmount.map((arr, index) => {
    let percentage = (arr[1] / totalSum);
    return arr[index] = [`${arr[0]}`, `${percentage}`];
  })
};

const chosenData = (chosenProfession) => {
  return countTotal(astroProfessions, chosenProfession);
};

function inputTop(num, arr) {
  let theTop = arr.sort((a, b) => a[1] - b[1]);

  return theTop.reverse().slice(0, num).map((arr) => {
    return `${arr[0]} => ${(arr[1] * 100).toFixed(2)}%`;
  });
};

function displayTop(arr) {
  arr.forEach((data, index) => console.log(`#${index + 1}: ${data}`));
};

//input choices

const inputCareerChoice = () => {
  let inputChoice = readline.question(`=> Pick career choice\n=> `);
  if (!professions(astroProfessions).includes(inputChoice.toLowerCase())) {
    console.log("pick a valid profession");
    return inputCareerChoice();
  }
  return inputChoice.toLowerCase(); 
};

const inputNumberTop = () => {
  let inputChoice = readline.question(`=> Input top choice (1-12)\n=> `);
  if (Number.isNaN(Number(inputChoice)) || Number(inputChoice) <= 0 || Number(inputChoice) > 12) {
    console.log("pick a valid number");
    return inputNumberTop();
  }
  return Number(inputChoice);
};

const displayCareerZodiacTop = (career, number) => displayTop(inputTop(number, chosenData(career)));

displayCareerZodiacTop(inputCareerChoice(), inputNumberTop());