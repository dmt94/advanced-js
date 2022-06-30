/*
How would you compare two objects if 
they are pointing to a different 
location in memory but 
still have the same properties?
*/

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2; //false

function sameProperties(firstObj, secObj) {
  let firstEntries = Object.entries(firstObj);
  let secondEntries = Object.entries(secObj);
  let firstArray = [];
  let secArray = [];

  function pushElements(entries, arr) {
    for (let entry of entries) {
      for (let element in entry) {
        arr.push(entry[element])
      }
    }
  }

  pushElements(firstEntries, firstArray);
  pushElements(secondEntries, secArray);

  return firstArray.every((v, index) => v === secArray[index]);

}

console.log(sameProperties(user1, user2));


//faster way: Works when you have simple JSON-style objects without methods and DOM nodes inside:
let check = (first, second) => JSON.stringify(first) === JSON.stringify(second);

console.log(check(user1, user2));