let rlSync = require('readline-sync');

const RESTAURANT_NAME = "The Sea Goose";

const APPETIZERS = [
  ['gulf shrimp', 20],
  ['summer watermelon salad', 20],
  ['hunkle\'s homely salad', 15],
  ['persephone\'s spring salad', 15],
  ['braised kobe beef tacos', 25],
  ['sautéed crab cake', 18],
  ['lobster latke cake', 22],
];

const MAIN_COURSE = [
  ['grilled filet mignon', 30],
  ['herb crusted chilean seabass', 28],
  ['lavender infused kobe beef sandwich', 28],
  ['lobster pasta', 32],
  ['queen\'s bone-in ribeye', 105],
  ['grilled branzino salsa verde', 28],
  ['smoked lavender brisket', 27],
  ['seaking cacio e pepe', 22],
  ['stuffed chicken breast', 22],
  ['seared habanero scallops with basil risotto', 24],
];

const DESSERTS = [
  ['lovers raspberry cheesecake', 18],
  ['mango & pineapple sorbet', 12],
  ['sea-salt chocolate torta', 12],
  ['classic tiramisu', 12],
  ['rose tiramisu', 12],
  ['lavender crème brûlée', 12],
  ['creamy rose panna cotta', 12],
  ['floral cream tart', 12],
  ['ube molten cake', 12],
];

const DRINKS = [
  ['lavender elderberry mojito', 15],
  ['mint rose-lime mojito', 15],
  ['classic piña colada', 15],
  ['violet vodka curtain', 15],
  ['miami vice', 15],
  ['lavender lemonade', 8],
  ['water', 0],
  ['iced elderberry tea', 8],
  ['lemon-rosemary sun tea', 8],
  ['matcha green tea', 8],
  ['iced ginger tea', 8],
  ['rose matcha latte', 8],
  ['frozen salted espresso martini', 15],
  ['frozen aperol spritzes', 15],
  ['ranch rosé', 15],
  ['moet & chandon, brut "Imperial"', 100],
  ['moet & chandon, rose "Imperial"', 108],
  ['pinot noir, lavender pyramid valley', 115]
];

//functions grab random meals
let grabRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

let grabMealName = (arr) => {
  return arr[0].split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

let grabMealPrice = (arr) => {
  return arr[1];
}

// first person
let person1Appetizer = grabRandom(APPETIZERS);
let person1AppetizerName = grabMealName(person1Appetizer);
let person1AppetizerPrice = grabMealPrice(person1Appetizer);

let person1Meal = grabRandom(MAIN_COURSE);
let person1MealName = grabMealName(person1Meal);
let person1MealPrice = grabMealPrice(person1Meal);

let person1Dessert = grabRandom(DESSERTS);
let person1DessertName = grabMealName(person1Dessert);
let person1DessertPrice = grabMealPrice(person1Dessert);

let person1Drink = grabRandom(DRINKS);
let person1DrinkName = grabMealName(person1Drink);
let person1DrinkPrice = grabMealPrice(person1Drink);

//second person
let person2Appetizer = grabRandom(APPETIZERS);
let person2AppetizerName = grabMealName(person2Appetizer);
let person2AppetizerPrice = grabMealPrice(person2Appetizer);

let person2Meal = grabRandom(MAIN_COURSE);
let person2MealName = grabMealName(person2Meal);
let person2MealPrice = grabMealPrice(person2Meal);

let person2Dessert = grabRandom(DESSERTS);
let person2DessertName = grabMealName(person2Dessert);
let person2DessertPrice = grabMealPrice(person2Dessert);

let person2Drink = grabRandom(DRINKS);
let person2DrinkName = grabMealName(person2Drink);
let person2DrinkPrice = grabMealPrice(person2Drink);

//total price 
let grabPrice = (app, main, dess, drink) => {
  return app + main + dess + drink;
}

let person1Total = grabPrice(person1AppetizerPrice, person1MealPrice, person1DessertPrice, person1DrinkPrice);
let person2Total = grabPrice(person2AppetizerPrice, person2MealPrice, person2DessertPrice, person2DrinkPrice);

let grabFinalAmount = (person1Total, person2Total, tip) => {
  let total = person1Total + person2Total;
  return (total + (total * tip)).toFixed(2);
};

//Dinner quality
const VIBE_LIST = ['amazing', 'stellar', 'romantic', 'fun', 'beautiful'];
const PARTNER_DESC = ['lover', 'sweetheart', 'best friend', 'partner', 'bestie', 'soulmate'];
const SERVICE_QUALITY = ['phenomenal', 'amazing', 'spectacular', 'good', 'not terrible', 'okay', 'not what both of you expected'];

let theVibe = grabRandom(VIBE_LIST);
let mealPartner = grabRandom(PARTNER_DESC);

function grabPartnersName() {
  let yourPartnerName = rlSync.question(`What is your ${mealPartner}'s name? `);
  return yourPartnerName;
}

function tipChoice() {
  let whatTip = rlSync.question("How much do you want to pay in tips? (10%, 20%, 30%...?) ");
  while (Number.isNaN(Number(whatTip)) && (typeof Number(whatTip) !== 'number')) {
    console.log('Type a valid numeric whole number tip percentage.');
    tipChoice();
  }
  return Number(whatTip)/100;
}

console.log(`~-~ Welcome to ${RESTAURANT_NAME} ~-~\n`)
console.log(`You are having ${['a','e','i','o','u'].includes(theVibe[0]) ? 'an' : 'a'} ${theVibe} meal with your ${mealPartner}.\n`);

let mealPartnerName = grabPartnersName();

console.log(`\n${mealPartnerName} had ${person2AppetizerName}, ${person2MealName}, and ${person2DrinkName}.`);
console.log(`You had ${person1AppetizerName}, ${person1MealName}, and ${person1DrinkName}.\n`);

console.log(`For dessert, ${mealPartnerName} had ${person2DessertName}. You ${person2Dessert === person1Dessert ? 'also got' : 'got'} a delicious ${person1DessertName}.\n`);
console.log(`The whole meal costs $${person1Total + person2Total}.00`);

let service = grabRandom(SERVICE_QUALITY);

console.log(`The service was ${service}...`);

let yourTip = tipChoice();
let finalAmountTotal = grabFinalAmount(person1Total, person2Total, yourTip);

console.log(`The total meal cost (with tips) is $${finalAmountTotal}`);