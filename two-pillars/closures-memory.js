/*
Closures are memory efficient
Closures allow encapsulation
*/

function heavyDuty(index) {
  const bigArr = new Array(7000).fill('🥹');
  console.log('created and destroyed');
  return bigArr[index];
}

console.log(heavyDuty(100)); // every time we run this function, we CREATE memory and return then destroyed
console.log(heavyDuty(100));
console.log(heavyDuty(100));

/* way to create big array and since we are using it a lot, only create it once
and have it there instead of doing all the work

we creat the big array once and bc we are accessing it multiple times,
we maintain closure scope over it and call it without creation-destruction cycle
*/
const getHeavyDuty = heavyDuty2()
console.log(getHeavyDuty(1000));
console.log(getHeavyDuty(5000));

function heavyDuty2() {
  const bigArr = new Array(7000).fill('🥹');
  console.log('created')
  return function(index) {
    return bigArr[index]; // we created a closure bc we have a reference to bigArr
  }
}

