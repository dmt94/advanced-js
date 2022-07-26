/*
Treat string questions as an array question
strings are array of characters
*/

//create function that reverses a string
function reverse(str) {
  const backwards = [];
  const totalItems = str.length - 1;

  //count backward
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('');
}

console.log(reverse('hello there'));


// simplified version - with built in method

function reverse2(str) {
  return str.split('').reverse().join(''); 
}

console.log(reverse2('i like candy'));

//es6 syntax

const reverse3 = (str) => str.split('').reverse().join(''); 

console.log(reverse3('i stand my ground and know who i am'));



//spread operator 

const reverse4 = str => [...str].reverse().join('');