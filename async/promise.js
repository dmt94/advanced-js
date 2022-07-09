const promise = new Promise((resolve, reject) => {
  true ? resolve('it worked yay') : reject('err error found');
});

promise
  .then(result => console.log(result + '!'))
  .then(result2 => console.log(result2))

console.log(promise);