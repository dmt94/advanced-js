/*
Immutability = not changing data/state

making copies of state and returning new copies each time

"borrow" data and copy
*/

const ogObj = {
  name: 'Andrei'
}

function clone(obj) {
  return {...obj} //this is pure, a clone copy of object passed as its argument
}

function updateName(obj, newName) {
  const obj2 = clone(obj);
  obj2.name = newName;
  return obj2;
}

const updatedObj = updateName(ogObj, 'kirei');
console.log(ogObj, updatedObj);