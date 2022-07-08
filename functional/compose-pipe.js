// compose and pipe

/*
compose = every data should be "obvious"

data ==> fn ==> data ==> fn ==> data (in new form) and so on

composability is a system design principle that deals with relationship between components
highly composable system provides components that can be selected and assembled in various combination
- easy to move pieces around based on users requirements

Math.abs(-50 * 3)
2 processes

//build compose func that allows multiply and take abs
*/

// two functions as parameters
// compose(fn1, fn2, fn3)(n)  fn3 apply to n FIRST, then apply fn2 to it, then fn1 
// pipe(fn1, fn2, fn3)(n)     fn1 apply to n FIRST, then fn2, then fn3
const compose = (f, g) => (dataVal) => f(g(dataVal));

const multBy3 = (num) => num * 3;

const makePositive = (num) => Math.abs(num);

const multBy3Absolute = compose(multBy3, makePositive);

console.log(multBy3Absolute(-50)); // 150



// pipe: first param runs first, then second runs the returning val from first
const pipe = (f, g) => (data) => g(f(data));


/*
arity = number of args a fn takes

fewer 3 of par = easier usage of fn
makes fn more flexible 
techniques:
- curried
- compose & pipe 
*/
