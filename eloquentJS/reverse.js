// unshift adds to the beginning
// push adds to the end
// shift removes from the beginning
// pop removes from the end

let letters = [
  'A',
  'B',
  'C',
  'D',
  'E'
];

function reverseArrayInPlace(array) {

  for (var z = 0; z < Math.floor(array.length / 2); z++) {

      var temp = array[z];
      //reassignment: 
      // grabs current letter and swaps with its corresponding half
      /*
      you find the index which is symmetric to the current 
      index relative to the middle, using the formula n - 1 - z, 
      where z is the current index

      n = array.length

      array.length - 1 : last element
      array.length - 1 - z : mirrors the current element's placement
      */
      array[z] = array[array.length-1-z];
      array[array.length-1-z] = temp;
  }

  return array;
}

console.log(reverseArrayInPlace(letters));
console.log(Math.floor(letters.length / 2));
console.log(letters[letters.length-1-2]);
// higher value in order of ascending is more