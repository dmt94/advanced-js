/*
- reads in 10 whole numbers 
  (10 expected input)
- outputs
  - the sum of all the numbers greater than zero
  - sum of all numbers less than zero (neg or zero)
  - sum of all numbers, whether positive, neg, or zero
*/

function sumOfPositives(one, two, three, four, five, six, seven, eight, nine, ten) {
  let allNums = [one, two, three, four, five, six, seven, eight, nine, ten];
  let greaterThanZero = [];
  let lessThanZero = [];

  for (let i = 0; i < allNums.length; i++) {
    allNums[i] > 0 ? greaterThanZero.push(allNums[i]) : lessThanZero.push(allNums[i]);
  }

  function sumOf(arr) {
    return arr.reduce((prev, curr) => (prev + curr), 0);
  }
  console.log('Negative sum =', sumOf( lessThanZero));
  console.log('Positive sum =', sumOf( greaterThanZero));
  console.log('Total sum =', sumOf(allNums));
}

sumOfPositives(1, -1, 2, -2, 3, -3, 4, -4, 5, -5);