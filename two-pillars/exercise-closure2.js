// const arr = [1,2,3,4,5];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + i)
//   }, 3000);
// }

/*
for the code above, by the time setTimeout returned,
for loop has already gone through everything and i is now 5
*/

const arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function(){
    console.log('I am at ' + arr[i])
  }, 3000);
}

// let allows us to use block scoping
// which allows {} creates scope for each i
// so that "i" is scoped within block

//using Closures if have to use (var)

const vowels = [
  'a',
  'e',
  'i',
  'o',
  'u',
  'y',
];

for (var i = 0; i < vowels.length; i++) {
  (function(closureI) {
    setTimeout(function() {
      console.log('I am at ' + vowels[closureI]) // as long as we reference i, it wont be removed
    }, 3000);
  })(i) // we are passing the i as an argument to the function

}
/*
created function that gave access to i variable that is kept in closure
by passing it as parameter , receiving it, and using it in callback function



CLOSURES IS A COMBINATION OF FUNCTION AND LEXICAL ENVIRONMENT FROM
WHICH IT WAS DECLARED 
> we can do this bc functions are first class citizens
> we have lexical scope in JS

CLOSURES allow functions to arrow variables from enclosing scope or outer scope environment
even after it leaves the scope it was declared
*/