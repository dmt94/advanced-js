let groceryList = [
  'juice',
  'strawberries',
  'pepperjack cheese',
  'kale',
  'mango',
  'pizza sauce',
  'eggs',
  'soft tortilla',
  'mango'
];


function findItem(arr, item) {
  let count = 0;
  arr.forEach(listItem => {
    if (listItem === item) {
      count += 1;
    }
})
return count > 0 ? `${item} found: ${count}` : `${item} not found`;
}

console.log(findItem(groceryList, 'egg'));

//accessing
groceryList[2] // 0(1), fast

//push (adds to the end of the array)
// 0(1)
groceryList.push('watermelon');
console.log(groceryList);


//unshift (adds to start of the array)
//loop and reassignment so operation is 0(n)
groceryList.unshift('avocados');


//splice 0(n)
groceryList.splice(2,0,'papaya');
console.log(groceryList);


/*
lookup 0(1) - fast
push 0(1) - fast
insert 0(n) - not the fastest
delete 0(n) - not the fastest 
*/