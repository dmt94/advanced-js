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
  const a = () => promisify('a', 1000);
  const b = () => promisify('b', 5000);
  const c = () => promisify('c', 3000);


  async function parallel() {
    const promises = [a(), b() ,c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`;
  }


  async function race() {
    const promises = [a(), b() ,c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
  }



  //async await , await pauses until it returns
  async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`;
  }

  //all the functions are "async" doesn't matter what order they are put in
  //when received something, that's when console.log runs

  //same as parallel().then(data => console.log(data))
  parallel().then(console.log); //parallel is done: a b c
  sequence().then(console.log);
  race().then(console.log);