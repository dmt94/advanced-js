//es2020
/*
Review

Promise.all

*/

const promiseOne = new Promise((res, rej) => setTimeout(res, 2000));
const promiseTwo = new Promise((res, rej) => setTimeout(rej, 3000));

//Promise.allSettled will return
/*
Promise.all short circuits when there is at least one rejected promise
Promise.allSettled runs all promises regardless of rejected
*/
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('something failed', e));



/*
Promise.any() resolves if any of the supplied promises is resolved

Below we have 3 promises, which resolves at random times.
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("C"), Math.floor(Math.random() * 1000));
});

//Out of p1, p2 and p3, whichever resolves first is taken by Promise.any()
(async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result); // Prints "A", "B" or "C"
})();

// if none of the promises resolve? In that case Promise.any() throws an error!