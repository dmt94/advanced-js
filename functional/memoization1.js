/*
memoization == caching

caching stores vals to use again later
"backpack" analogy
- storage space that holds items needed later

caching speeds programs and holds data in easily accessible box
memoization is specific form of caching
- used often in dynamic programming
*/

function addTo80(n) {
  return n + 80;
}

//run the same
console.log(addTo80(4)); // 84
console.log(addTo80(4)); // 84

let cache = {};

function memoizedAddTo80(n) {
  //checks if property exists in an obj, same as cache.in
  if (n in cache) {
    return cache[n];
  } else {
    console.log("adding in...long time...")
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(memoizedAddTo80(5)); // 85
console.log(memoizedAddTo80(5)); // 85; wont include "long time bc it already exists from invoking above func"
//adds new key-val pair, returns existing one if args is a key

/*
memoization is a form of caching that involves caching the return val of fn
based on its [parameters] 

if parameter of fn doesnt change, then it's memoized, it uses the cache
-- the cached version of fn

memoization is a way of remembering a sln, so dont have to calculate again
*/
