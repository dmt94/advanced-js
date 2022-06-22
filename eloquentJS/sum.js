
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