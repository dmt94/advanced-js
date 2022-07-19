const promise = new Promise((resolve, reject) => {
  // true ? resolve('it worked yay') : reject('err error found');
  if (true) {
    resolve('Stuff worked');
  } else {
    reject('Error, it broke');
  }
});

promise
  .then(result => {
    // throw Error
    return result + '!';
  })
  .then(result2 => {
    return result2 + '?';
    // throw Error
  })
  .catch(() => console.log('errorrr found'))
  .then(result3 => {
    console.log(result3 + '!');
  })

console.log(promise);

/*
Promise can be assigned to a variable 
Promises are good for async programming
When you dont want JS to "block" execution of code,
- optimize image, etc.
you use a PROMISE so that task runs in the background

when resolved => response

*/

const promise2 = new Promise((res, reject) => {
  setTimeout(res, 100, 'HIII')
})
const promise3 = new Promise((res, reject) => {
  setTimeout(res, 1000, 'HUNKLE')
})
const promise4 = new Promise((res, reject) => {
  setTimeout(res, 3000, 'Is it me you are looking for?')
})

//logs all promises inside the array
Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  })