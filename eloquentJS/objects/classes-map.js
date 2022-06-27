/*
class = defines the shape of [a type of object]
- what methods and properties it has
- object ->  "instance" of the class

 to create an instance of a given class, 
 you have to make an object that derives from 
 the proper prototype, but you also have to make sure it, 
 itself, has the properties that 
 instances of this class are supposed to have.

 If you put the keyword new in front of a function call, 
 the function is treated as a constructor.

 This means that an object with the 
 right prototype is automatically created, 
 bound to this in the function, and returned at the end of the function.
*/
let ages = new Map();

ages.set("Kirei", 22);
ages.set("Hunkle", 23);

console.log(ages);

const gymLeader = {
  name: "Kireyne",
  badge: "moonstone",
  symbol: "circle",
}

const hunkleGymLead = Object.create(gymLeader);
//if property value is different, it counts as own property
hunkleGymLead.name = "Hunkle",
hunkleGymLead.badge = "electric arrow",
hunkleGymLead.symbol = "electric arrow",
hunkleGymLead.mood = "lukewarm",

console.log(hunkleGymLead);

for (let key in hunkleGymLead) {
  if (hunkleGymLead.hasOwnProperty(key)) {
    console.log(key);
  } else {
    continue;
  }
}