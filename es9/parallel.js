/*
// ex 3 tasks:
// parallel, execute all in parallel at same time
// sequential, dependent on each other one at a time
// race, whichever comes first gets the go
*/

const promisify = (item, delay) =>
  new Promise((resolve) =>
  setTimeout(() =>
  resolve((item), delay)));

  //3 promises
  const a = () => promisify('a', 100);
  const b = () => promisify('b', 5000);
  const c = () => promisify('c', 3000);


  async function parallel() {
    const promises = [a(), b() ,c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`;
  }

  //same as parallel().then(data => console.log(data))
  parallel().then(console.log);