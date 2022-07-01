// let view;
// function initialize() {
//   view = '💕';
//   console.log('view has been set!');
// }
/* Make it so that you can only run this once */

//using closures
let view;
let initializeCount = 0;
function initialize() {
  let called = 0; //people dont know
  initializeCount++;
  if (initializeCount > 1) {
    return;
  } else {
    return function() {
      if (called > 0) {
        return;
      } else {
        view = '💕';
        called++;
        console.log(`view ${view} has been set!`);
      }
    } 
  }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce(); 
// doesnt matter how many times it is called, it will only initialize once
console.log(view);




