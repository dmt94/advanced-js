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
