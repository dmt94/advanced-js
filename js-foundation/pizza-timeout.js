function stillWaiting() {
  console.log('still wating for pizza...');
}

function gettingHungry() {
  console.log('getting REALLY hungry waiting for pizza...');
}

function pizzaHere() {
  console.log('Pizza is here! Enjoy! 🍕🍕🍕🍕')
}

console.log('wating for pizza...');
setTimeout(stillWaiting, 1200);
setTimeout(gettingHungry, 3000);
setTimeout(pizzaHere, 4000);