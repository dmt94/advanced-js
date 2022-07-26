
let array = [2,5,1,2,3,5,1,2,4];
let array2 = [2,1,1,2,3,5,1,2,4];
let array3 = [2,3,4,5];

function firstRecurring(arr) {
  let duplicates = [];
  arr.forEach((item, index) => {
    
    if (arr.indexOf(item) !== index) {
      duplicates.push([item, index]);
    }
})

if (duplicates.length < 1) {
  return undefined;
}

let firstRecurringChar = duplicates[0][0];

duplicates.forEach((arr, index) => {
  let min = duplicates[0][1];

  arr.forEach((innerArr, index) => {
    if (innerArr[1] < min) {
      min = innerArr[1];
      firstRecurringChar = innerArr[index][0];
    }
  })
});

return firstRecurringChar;
}

console.log(firstRecurring(array));
console.log(firstRecurring(array2));
console.log(firstRecurring(array3));