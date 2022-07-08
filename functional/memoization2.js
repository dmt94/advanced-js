


// what is wrong with this pic is [cache] will reset each time fn is invoked
//use closures
function memoizedAddTo80(n) {
  let cache = {};
  //checks if property exists in an obj, same as cache.in
  if (n in cache) {
    return cache[n];
  } else {
    console.log("adding in...long time...")
    cache[n] = n + 80;
    return cache[n];
  }
}

// console.log(memoizedAddTo80(5)); // 85


//version 2, with closure, can access cache inside return func
//helps avoid global scope, less pollution of global environment
function memoizedAddTo80V2(n) {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("adding in...long time...")
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoized = memoizedAddTo80V2();
//since we want to check for different args

//5 as argument
console.log('1', memoized(5));
console.log('2', memoized(5));

//10 as argument
console.log('1', memoized(10));

//11 as argument
console.log('1', memoized(11));
console.log('2', memoized(11));
console.log('3', memoized(11));