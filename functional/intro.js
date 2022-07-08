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