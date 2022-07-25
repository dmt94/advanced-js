// try {
//   setTimeout(function() {
//     fakevariable;
//   }, 1000)
// } catch (e) {
//   console.log('got it', e);
// }

Promise.resolve('asyncfail') //returns a promise that resolvs right away


Promise.resolve('asyncfail').then(resp => {
  throw new Error('#1 fail');
  return resp
})
.then(resp => {
  console.log(resp);
})
.catch(err => {
  console.log(err);
  throw new Error('#2')
})
.then(resp => {
  console.log(resp.message);
})
.catch(err => {
  console.log('final error')
})
