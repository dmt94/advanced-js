
let array = [2,5,1,2,3,5,1,2,4];
let array2 = [2,1,1,2,3,5,1,2,4];
let array3 = [2,3,4,5];
let array4 = [2,3,4,5, 3, 10, 11, 12, 2];

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

duplicates.forEach((arr) => {
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

// console.log(firstRecurring(array));
// console.log(firstRecurring(array2));
// console.log(firstRecurring(array3));
// console.log(firstRecurring(array4));





//cleaner

function firstRecurringChar2(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    
    //if value exists, logs the index of where it first existed
    //if it already exists, then add to map
    if (map[arr[i]] !== undefined) {
      //the first occurence of a repeat will return the value
      return arr[i]
    } else {
      map[arr[i]] = i;
      //else set the key-value pair
    }
    console.log(map)
  }
  
  return undefined;
}

console.log(firstRecurringChar2(array))