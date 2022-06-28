function achieveNirvana() {
  console.log('You are enlightened');
}

function c() {
  setTimeout(achieveNirvana, 0);
}
/* After timer finishes, it goes to callback queue
event loop checks if callback is empty
if so , then function achieveNirvana is pushed to call stack 


no matter how fast the setTimeout, 
it will still need to go back to event loop
*/

function b() {
  c();
}

function a() {
  b();
}

a();