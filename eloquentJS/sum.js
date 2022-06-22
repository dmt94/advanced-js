
// range : creates an array that contains numbers between the arguments (inclusive)

const range = (first, sec) => {
  let resultingRange = [first];
  while (first < sec) {
    first += 1;
    resultingRange.push(first);
  }
  return resultingRange;
}

console.log(range(4, 10));

const sum = (numbers) => numbers.reduce((prev, curr) => prev + curr, 0);

console.log(sum(range(1, 10))); // 55

const stepRange = (first, sec, step) => {
  let resultingRange = [];
  step = step || 1;

  if (first < sec) {
    while (first <= sec) {
      resultingRange.push(first);
      first += step;
    }
  } else if (first > sec) {
    while (first >= sec) {
      resultingRange.push(first);
      first += step;
    }
  }
  return resultingRange;
}

console.log(stepRange(1, 10));
console.log(stepRange(1, 10, 2));
console.log(stepRange(5, 2, -1));