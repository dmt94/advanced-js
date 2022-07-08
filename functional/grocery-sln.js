/*
idea in functional programming
- small, pure, composable 
- immutability = fn that take input that take output
gives predictable program
 >> minimizes bugs = simple 
- combine functions together ++ complex 
- build on idea 

compose is right to left f(g(x, y, z)(n)) z(n) ---> x(n)

implement cart feature:
1. add items to cart
2. add 3% tax to item in cart
3. buy item: cart ==> purchases
4. empty cart
*/

const userObj = {
  name: 'kirei',
  active: true,
  cart: [],
  purchases: []
}

const purchaseHistory = [];

const compose = (f,g) => (...args) => f(g(...args));

//compose alllows add all parameters into purchaseItem to compose fn and act over received data


//remember to keep things immutable
const purchaseItem = (...fns) => fns.reduce(compose);

function addItemToCart(user, item) {
  purchaseHistory.push(user);
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart} );
}

function applyTaxToItems(user) {
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  purchaseHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  purchaseHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

//implement a cart feature


console.log(purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(userObj, {name: 'laptop', price: 200}));

console.log(purchaseHistory);



/*
Functional Programming review
- limit repetition
- reusable functions
- functional programming has diff concepts than OOP but same goal
- make code predictable
- good at 1:1 data transformation
  > we have data and actions acting upon it

move pieces of functions around based on problem

we build as much pure fn as possible, avoid side-effects as much as u can though unavoidable
*/

