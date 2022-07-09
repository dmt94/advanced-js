/*
js is single-threaded programming language
web browser or node.js allows async:
- interact with things outside of JS
- async functions are fn we can execute later

*/

//1
setTimeout(()=>{console.log('1', 'gives focus and direction')}, 0);
setTimeout(()=>{console.log('2', 'helps advancement and connection')}, 10);

//2
Promise.resolve('hello').then((data) => console.log('2', data));

//3
console.log('3', 'is a crowd');

/*
Once JS sees async
==> sent to Web API
- DOM
- fetch()
- setTimeOut()

EVENT LOOP
- monitors callstack and callback queue

==> callback queue
- check if callstack is empty
- once empty, push to callstack

ORDER:
3 is a crowd
2 hello
(set timeout)
1 ...
2 ...
*/

//stack overflow example
/*
function foo() {
  foo()
}

foo() -- keeps looking over and over and it keeps getting added to the call stack
recursion: functions that calls itself
*/

setTimeout(() => {
  console.log('another surprise! 🚗  A new car for you 💕')
}, 6000);


setTimeout(() => {
  console.log('a surprise! 🎁')
}, 5000);


setTimeout(() => {
  console.log('surprise is coming...?')
}, 2000);

setTimeout(() => {
  console.log('still have to check if surprise is coming?')
}, 0);


