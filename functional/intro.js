/*
Functional programming is about separation of concern (also OOP)
Separate code into separate chunks 

Functional programming
- doesnt combine data with function
- generally, emphasis on simplicity 

Functions operate on well defined data structures (arrays and obj)
rather than BELONGING to that data structure (as a method in obj)

Goals: 
Clear + Understandable
Easy to Extend
Easy to Maintain
Memory Efficient
DRY

PURE FUNCTIONS
- separation between data of program and behavior of program
- all objects created in functional programming are immutable

>> once something is created, it cant be changed
  - avoid shared state
  - adhere to "pure functions idea"
 */

  //Amazon shopping
  const user = {
    name: 'Kirei',
    active: true,
    cart: [],
    purchases: [],
    purchaseHistory: []
  }

  item = {
    name: 'item',
    price: 30,
  }

  /*
  Implement a cart feature: 
  1. add items to cart
  2. add 3% tax to item in cart
  3. buy item: cart => purchases
  4. empty cart

  Bonus: 
  - accept refunds
  - track user history
  */


  let arr = ['fruit', 'apple'];


  console.log(arr.find(element => element.includes('strawberry')));


  /*
  pure functions
  - function always returns same output given same input
  - cant modify outside of itself (no side effects)

  side effects
  - does function modify anything outside of itself
  - using a shared state that can interact with anything
  */

  const array = [1,2,3,4];


  function removeLastItem(arr) {
    let arrayCopy = [...arr];
    arrayCopy.pop();
    return arrayCopy;
  }

  function mutateArray2(arr) {
    let newArray = [...arr]
    newArray.forEach(item => {
      newArray.push(1); //adds to end of the array, depending on how much elements there are, we added number 1
    })
    return newArray;
  }

  const arr2 = removeLastItem(array);
  const arr3 = mutateArray2(array);
  const arr4 = multiplyBy2(array);

  function multiplyBy2(arr) {
    return arr.map(item => item * 2);
  }

  function greet() {
    console.log('helllooo'); //console.log() is window specific, it logs something to browser, it affects external environment => output
  }

  //always returns the same output
  function sum(num1, num2) {
    return num1 + num2;
  }
  
  sum(5,3);
  // REFERENTIAL TRANSPARENCY

  function multiply(num) {
    return function(anotherNum) {
      return num * anotherNum;
    }
  }

  const multiplyBy10 = multiply(sum(5,3))(10);

  console.log(multiplyBy10);

  /*
  The biggest thing in functional programming
  -- idea is that functions are very easy to test, compose, and avoid bugs
  -- no mutations, shared states = predictability = less bugs

  Can you have 100% pure functions? 
  - side effects are inevitable
  - need interaction with websites (make fetch calls, etc)
  - goal of functions is to MINIMIZE SIDE EFFECTS
  - purity is confidence level != 100%
  - at the end of the day, we need some global state 

  essence of functional programming
  - we wanna build reusable functions


  GOAL:
  - one task , testable
  - have return statement
  - "pure", less side effect
  - no shared state
  - immutable state (avoid mutating global state)
  - composable 
  - predictable = 100% certainty
  */