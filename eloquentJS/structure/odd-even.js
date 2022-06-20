let oddEven = (str) => {
  return str.length % 2 === 0 
  ? `There is an even amount of letters: ${str.length}` 
  : `There is an odd amount of letters: ${str.length}`; 
}

console.log(oddEven('hun'));