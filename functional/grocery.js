let rlSync = require('readline-sync');

const GROCERY_ITEMS = [
  {fruits: 
    [
      {item: 'white peach', price: 1.98},
      {item: 'strawberries', price: 4.14},
      {item: 'pineapple', price: 5.99},
      {item: 'blueberries', price: 4.98},
      {item: '6 dekopon citrus', price: 80},
      {item: '3 dragonfruits', price: 30}
    ]
  },
  {
    frozen: [
      {item: 'coconut bread shrimp', price: 16.99},
      {item: 'fresh wild alaskan salmon fillets', price: 179.99},
      {item: 'sea scallops', price: 48.99},
      {item: 'chicken wings', price: 42.49},
      {item: 'taquitos', price: 15.79},
    ]
  },
  {
    meats: [
      {item: 'angus beef cowboy steaks', price: 299.99},
      {item: 'boneless black angus prime rib roast', price: 189.99},
      {item: 'wagyu new york strip steaks A5 Grade', price: 469.99},
      {item: 'ground beef patties', price: 39.99},
      {item: 'farmers thick cut bacon', price: 27.19},
      {item: 'uncured turkey bacon, hickory smoked', price: 17.49},
    ]
  },
  {
    dessert: [
      {item: 'keto chocolate chips', price: 9.97},
      {item: 'mango & strawberry cheesecake', price: 54.99},
      {item: '12 chocolate blueberry muffins', price: 15.55},
      {item: '12 banana nut muffin and cinnamon bun', price: 9.19},
      {item: 'hunkles bucket of mango ice cream', price: 8.50},
      {item: 'chocolate croissants pack', price: 7.49},
    ]
  },
  {
    dairy: [
      {item: 'greek yogurt variety pack', price: 17.69},
      {item: 'queso fresco, 4lbs', price: 17.99},
      {item: 'kireimook cheddar snacking cheese', price: 15.99},
      {item: 'breaded mozzarella sticks', price: 12.19},
      {item: 'fresh mozzarella cheese slices', price: 10.50},
      {item: 'pure hunkle butter, unsalted', price: 14.09},
      {item: 'sunset signature almond milk', price: 14.99},
      {item: 'hunkle organic oat milk', price: 14.09},
      {item: 'k reduced fat chocolate milk', price: 19.12},
    ]
  },
  {
    drinks: [
      {item: 'clementine & peach sparkling drink', price: 21.99},
      {item: 'lakris sparkling variety pack', price: 14.99},
      {item: 'kirei loose leaf tea summer variety', price: 30.99},
      {item: '12 lavender green tea', price: 15.19},
      {item: 'happy kombucha variety pack', price: 30.20},
      {item: 'matcha green tea powder', price: 44.44},
      {item: 'classic hot cocoa mix, 30 oz 2 pack', price: 34.99},
      {item: 'dr kirei clear mind kombucha pack', price: 19.44},
      {item: 'k reduced fat chocolate milk', price: 19.12},
      {item: 'dark roasted whole bean coffee, 5 lb', price: 40.02},
    ]
  },
  {
    grains: [
      {item: 'organic quinoa, 4.5 lbs', price: 11.99},
      {item: 'organic amarantha grain, 4 pack', price: 44.99},
      {item: 'premium sushi rice, 2 pack', price: 22.99},
      {item: 'k jasmine white rice, 5 lbs', price: 15.19},
      {item: 'soft taco flour tortillas, 2 pack', price: 11.19},
      {item: 'loves whole grains and seeds organic bread', price: 5.19},
      {item: 'artisan sourdough loaf', price: 4.14},
      {item: 'sweet baguette, 2 pack', price: 4.99},
      {item: 'simple penne pasta, 4 pack', price: 14.99},
      {item: 'kirei pasta variety pack, 7 pack', price: 27.99},
    ]
  },
  {
    health: [
      {item: 'fish oil pills, 1400 mg 130 count', price: 18.99},
      {item: 'beauty collagen, 120 count', price: 14.99},
      {item: 'tylenol, 225 count', price: 15.99},
      {item: 'melatonin sleep aid, 250 count', price: 15.19},
      {item: 'dairy relief caplets', price: 15.55},
      {item: 'premium turmeric capsules', price: 31.44},
      {item: 'lubricant eye drops', price: 19.99},
      {item: 'k advanced grip tampons, 100 count', price: 12.44},
      {item: 'salonpas pain relieving patch, 140 count', price: 15.24},
      {item: 'icyhot roll-on', price: 17.24},
      {item: 'day and night cold & flu relief, 100 count', price: 22.24},
      {item: 'kirei-san hand sanitizer, lavender', price: 22.22},
    ]
  },
];

const user = {
  name: '',
  userMoney: null,
  money() {
    return Math.floor(Math.random() * 700);
  },
  cart: [],
  purchased: [],
  purchaseHistory: [],
}

function getUser() {
  let name = rlSync.question("What is your name?\n");
  user.name = name;
  user.userMoney = user.money();
  console.log(`Welcome to K+H Mart, ${name}! You have $${user.userMoney}.00 to spend!`);
}

//user options to add to cart
const yesOrNo = (question) => {
  console.log(`\n${question}`);
  return rlSync.question("YES or NO ?\n>>> ")
};

const addItemToCart = () => rlSync.question("\nWhat would you like to add to your cart?\n>>> ");

function calculateItems(arr) {
  let totalPrice = [];
  arr.forEach(obj => totalPrice.push(obj['price']));
  return totalPrice.reduce((prev, curr) => (prev + curr), 0).toFixed(2);
}

function subtractAmount(totalCost) {
  if (totalCost > user.userMoney) {
    console.log(totalCost);
    console.log(user.userMoney);
    console.log("You don't have enough funds for this transaction");
  } else {
    let userMoneyLeft = user.userMoney - totalCost;
    user.cart.forEach(itemObj => user.purchased.push(itemObj))
    console.log(`Your total purchase was $${totalCost} and you had $${user.userMoney} to spend.`)
    console.log(`You now have $${userMoneyLeft.toFixed(2)}`);
    return review();
  }
}

function review() {
  console.log("These are your purchases:");
  let userPurchases = user.purchased;
  userPurchases.forEach(itemObj => console.log(`${itemObj['item']} ($${itemObj['price']})`));
}

function showItems() {
  console.log("\nAISLE:\n\nfruits\nmeats\nfrozen\ndessert\ndairy\ndrinks\ngrains\nhealth?\n");
  let categoryPick = rlSync.question("What aisle do you want to view?\n>>> ");

  if (!['fruits', 'meats', 'frozen', 'dessert', 'dairy', 'drinks', 'grains', 'health'].includes(categoryPick)) {
    console.log('input appropriate aisle');
    return showItems();
  } 

  for (let category in GROCERY_ITEMS) {
    for (let items in GROCERY_ITEMS[category]) {
      let aisleCategory = items;

      if (categoryPick === aisleCategory) {
        return function() {
          let arrOfAisleItems = GROCERY_ITEMS[category][categoryPick];
          console.log(`\nAvailable ${categoryPick}:\n`);
          arrOfAisleItems.forEach(item => console.log('- ' + item['item'] + ' : ' + item['price']));

          return function addAisle() {
            let addToCart = yesOrNo("Would you like to add anything from this aisle to your cart?");
            if (addToCart.toLowerCase() === 'no') {
              return showItems()()()();
            } else {

              return function addItem() {
                let addToCart = addItemToCart();

                //check if chosen item input is an existing item in the aisle
                let itemsInAisle = [];
                arrOfAisleItems.forEach(item => itemsInAisle.push(item.item));
                
                if (itemsInAisle.find(itemName => itemName.includes(addToCart)) === undefined) {
                  console.log('Item not found');
                  return addAisle()();
                }
  
                arrOfAisleItems.forEach(item => {
                  if (item['item'].includes(addToCart) && addToCart.length >= 4) {
                    user.cart.push(item);
                    console.log(`${item['item']} ($${item['price']}) has been added to your cart.'`);
                    let addMore = yesOrNo("Would you like to add more items to your cart?");
                    if (addMore.toLowerCase() === 'yes') {
                      return addItem();
                    } else if (addMore.toLowerCase() === 'no') {
                      let finishPurchase = yesOrNo("Are you done with your grocery purchase? YES done or NO look at other aisles");
                      if (finishPurchase.toLowerCase() === 'yes') {
                        
                        return subtractAmount(calculateItems(user.cart));

                      } else if (finishPurchase.toLowerCase() === 'no') {
                        return showItems()()()();
                      }
                    } else {
                      console.log("Please type a valid answer.");
                      return addAisle();
                    }
                     
                  }
                });
              }
          }
          }
        }
        
      }
    }
  }
  return review()
}

getUser();
console.log(showItems()()()());

