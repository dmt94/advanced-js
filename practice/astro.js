const ASTRO_SIGNS = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];

const randomAstroSign = (arr) => arr[Math.floor(Math.random() * arr.length)];

function yourSign(signType, sign) {
  return `\n${signType} => ${sign}\n`;
}

function signCutOff(sunSign, arr) {
  let indexOfSunSign = arr.indexOf(sunSign);
  let arrOptions;
  let firstTwo;
  let lastTwo;
  //edge cases
  if (sunSign === 'aries') {
    firstTwo = arr.slice(indexOfSunSign, 3);
    lastTwo = arr.slice(indexOfSunSign - 2);
    // return firstTwo.concat(lastTwo);
  } else if (sunSign === 'taurus') {
    firstTwo = arr.slice(indexOfSunSign, 3);
    lastTwo = arr.slice(indexOfSunSign - 1, indexOfSunSign);
    lastTwo.push(arr[arr.length - 1], arr[arr.length - 2]);
  } else if (sunSign === 'aquarius') {
    firstTwo = arr.slice(indexOfSunSign, indexOfSunSign + 2);
    firstTwo.push(arr[0]);
    lastTwo = arr.slice(indexOfSunSign - 2, indexOfSunSign);
  } else if (sunSign === 'pisces') {
    firstTwo = arr.slice(0, 2);
    lastTwo = arr.slice(indexOfSunSign - 2, arr.length);
  } else {
    arrOptions = arr.slice(indexOfSunSign - 2, indexOfSunSign + 3);
    return randomAstroSign(arrOptions);
  }

  arrOptions = firstTwo.concat(lastTwo);
  return randomAstroSign(arrOptions);
}

function rollSign() {
  let sunSign = randomAstroSign(ASTRO_SIGNS);
  let sun = yourSign('sun', sunSign);

  let moon = yourSign('moon', signCutOff(sunSign, ASTRO_SIGNS));

  let rising = yourSign('rising', randomAstroSign(ASTRO_SIGNS));

  let venus = yourSign('venus', signCutOff(sunSign, ASTRO_SIGNS));

  let mercury = yourSign('mercury', signCutOff(sunSign, ASTRO_SIGNS));

  let mars = yourSign('mars', signCutOff(sunSign, ASTRO_SIGNS));


  console.log(sun, moon, rising, venus, mercury, mars);
}


rollSign();

