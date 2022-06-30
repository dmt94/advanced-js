/*
Closures
- allow function access variables from enclosing scopes or environment
even after it leaves the scope in which it was declared
*/

function a() {
  let gramps = 'grandpa';
  return function b() {
    let father = 'dad';
    return function c() {
      let son = 'son';
      return `${gramps} > ${father} > ${son}`;
    }
  }
}

console.log(a());   // [Function: b]
console.log(a()()); // [Function: c]
console.log(a()()()); // grandpa > dad > child

const one = a();
/*
Question since a() returns b() and so forth, 
shouldn't it be removed from the stack and gramps removed from memory?

somehow c() still has access to dad and gramps


a() -> pushed to stack: create variable environment
- has gramps as variable
- context execution has gramps as variable
- also have parameters with argument keyword, but no given parameters in this example

once a() is removed -> gone, but gramps still remains
- variable goes up to closure
- why? 
  - box is where memory heap is, usually removed once no longer needed
  - but if in this special closure box- garbage collector does not remove
  BECAUSE there is something inside that is referencing it

if variable is referenced inside it, it puts in closure box

_________
JS engine makes sure function has access to all the variables outside the function
with closure

> bc c() is inside b() and a()
- all the variables outside c() will be kept if c() uses it

_________
Closures are also called lexical scoping
- lexical: WHERE it is written
- scoping: what variable we have ACCESS to

Works bc the values are not on the callstack, they are on the memory heap
memory heap gets cleaned up by garbage collector usually

function() + lexical scope (where we write function matters)
*/

function boo(str) {
  return function(name) {
    return function(name2) {
      console.log(`BOO! ${str} ${name} wanted to scare ${name2}`)
    }
  }
}

const bootwo = (str) => (name) => (name2) => console.log(`Booo! ${str}! ${name} sends you to ${name2} to be bullied...`);

const halloweenSeason = bootwo('Happy Halloween')('Kirei')('Hunkle');

const halloweenMsg = halloweenSeason(); 

