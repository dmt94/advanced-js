/*
Dynamic vs Static Arrays

static arrays = fixed 
- need to state the amount of items in array (max)

dynamic arrays
- allows to copy and rebuild an array at new location
with new memory if we want
- paste list in new location

In JS & python
- dynamic - allocate memory , automatic storage

- more control with memory = more tweaks
- pros and cons with allocating memory

Data structures are things we can build from scratch
*/

//implementing an array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++ //increase length
    return this.length; //push method returns length of array
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) 
    {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

// instantiate
const newArray = new MyArray();
newArray.push('hi');
newArray.push('world');
console.log(newArray);

newArray.push('!');
console.log(newArray);

newArray.pop();
console.log(newArray);


