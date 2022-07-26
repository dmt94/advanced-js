function mergeArrs(arr1, arr2) {
  return arr1.concat(arr2);
}

let arrNumOne = [0,2,3,11,22];
let arrNumTwo = [120, 22, 33, 111, 222];

console.log(mergeArrs(arrNumOne, arrNumTwo));

const mergeArrs2 = (...arr) => [...arr].flat();

console.log(mergeArrs2([], arrNumTwo));