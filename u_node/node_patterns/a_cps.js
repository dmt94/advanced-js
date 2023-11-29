import { create } from "domain";

function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100)
}

console.log("before");
additionAsync(3, 4, result => console.log(`Result: ${result}`));
console.log("after");

//inconsistent bug

function createFileReader(filename) {
  const listeners = [];
  inconsistentRead(filename, val => {
    listeners.forEach(listener => listener(val));
  })
  return {
    onDataReady: listener => listeners.push(listener)
  }
}

const reader1 = createFileReader('data.txt');

reader1.onDataReady(data => {
  console.log(`First call data: ${data}`);
  const reader2 = createFileReader('data.txt');
  reader2.onDataReady(data => {
    console.log(`Second call data: ${data}`);
  })
})