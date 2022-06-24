// flatten using reduce and concat
// combine inner arrays into one single array
let arrays = [[1, 2, 3], [4, 5], [6]];

let newA = arrays.flat();

console.log(newA);

let newest = arrays.reduce((prev, curr) => {
  return prev.concat(curr);
});

//own loop

let loopCondition = (x) => x > 0;

let loopUpdate = (x) => x - 1;

let functionPass = (x) => {
  console.log(x);
}

function loop(num, condition, update, func) {
  for (let i = num; condition(i); update(i)) {
    func(i);
    i = update(i);
  }
}

loop(5, n => n > 0, n => n-1, console.log);
loop(10, loopCondition, loopUpdate, functionPass);

/*
Implement every as a function that takes an array
and a predicate function as parameters 
*/

let names = [
  'kirei',
  'kk',
  'kristoffer',
  'kilig',
  'kirei-chan',
];

let names2 = [
  // 'kirei',
  // 'kk',
  // 'hunkle',
  // 'kristoffer',
  // 'kilig',
  // 'kirei-chan',
];

let predicateFunc = (arr) => arr.filter(el => el[0] !== 'k');
//if empty array = pure , expect that every is true
// nonempty array = not pure

function every(array, test) {
  return test(array)[0] === undefined; //tests if array is pure, bc it would mean undefined
}

console.log(every(names2, predicateFunc));