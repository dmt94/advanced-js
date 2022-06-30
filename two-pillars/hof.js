/*
HOF = can take function as argument or return another function
*/

//aim for DYNAMIC
function authenticate(verify) {
  let arr = [];
  for (let i = 0; i < verify; i++) {
    arr.push(i)
  }
  return true;
}

const giveAccessTo = (name) => `Access Granted to ` + name; 

//pass object {person}
//higher order function
function letPerson(person, fn) {
  if (person.level === 'admin') {
    fn(5000000); //putting parameter inside function
  } else if (person.level === 'user') {
    fn(10000);
  }
  return giveAccessTo(person.name);
}

const firstUser = {
  level: 'user',
  name: 'Kichan'
}

const firstAdmin = {
  level: 'admin',
  name: 'DMT'
}

console.log(letPerson(firstUser, authenticate)) //parameter for authenticate is inside letPerson fn
console.log(letPerson(firstAdmin, authenticate)) //parameter for authenticate is inside letPerson fn

