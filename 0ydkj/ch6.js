/*
MINIMIZE SCOPE EXPOSURE !!!

Rather than defining a new and uniquely named function 
each time one of those scope-only-for-the-purpose-of-hiding-a-variable situations occurs, 
a perhaps better solution is to use a function expression:
*/

var factorial = (function hideTheCache() {
  var cache = {};

  function factorial(x) {
      if (x < 2) return 1;
      if (!(x in cache)) {
          cache[x] = x * factorial(x - 1);
      }
      return cache[x];
  }

  return factorial;
})();

factorial(6);
// 720

factorial(7);
// 5040

/*
This is still using a function to create the scope for hiding cache, 
and in this case, the function is still named hideTheCache, 
so how does that solve anything?

Since hideTheCache(..) is defined as a function expression 
instead of a function declaration, 
its name is in its own scope—essentially the same scope as cache—rather 
than in the outer/global scope.

In fact, we could just leave off the name entirely—thus defining an "anonymous function expression" instead. 
But more importance on leaving the name in later (maybe best for clarification)


So, in other words, we're defining a function expression 
that's then immediately invoked. 
This common pattern has a (very creative!) name: 
Immediately Invoked Function Expression (IIFE).

An IIFE is useful when we want to create a scope to hide variables/functions. 
And it can be standalone or, as before, 
part of another statement—hideTheCache() 
returns the factorial() function reference 
which is then = assigned to the variable factorial.
*/