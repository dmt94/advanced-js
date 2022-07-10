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

function rollSign() {
  let sun = yourSign('sun', randomAstroSign(ASTRO_SIGNS));
  let moon = yourSign('moon', randomAstroSign(ASTRO_SIGNS));
  let rising = yourSign('rising', randomAstroSign(ASTRO_SIGNS));
  let venus = yourSign('venus', randomAstroSign(ASTRO_SIGNS));
  let mercury = yourSign('mercury', randomAstroSign(ASTRO_SIGNS));
  let mars = yourSign('mars', randomAstroSign(ASTRO_SIGNS));
  let jupiter = yourSign('jupiter', randomAstroSign(ASTRO_SIGNS));
  let saturn = yourSign('saturn', randomAstroSign(ASTRO_SIGNS));

  console.log(sun, moon, rising, venus, mercury, mars, jupiter, saturn);
}

rollSign();