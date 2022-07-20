const arr = [1,2,3,4,5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(sum(...arr)); // 15


const animals = {
  tiger: 23,
  lion: 3,
  monkey: 2,
  bird: 40,
}

function objSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest} = animals;

objSpread(tiger, lion, rest);