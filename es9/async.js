const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]


// Promise.all(urls.map(url => fetch(url).then(people => people.json())))
//   .then(array => {
//     throw Error
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
//     console.log('4', array[3])
//   })
//   .catch(err => console.log('ughhhh fix it!', err))
//   .finally(() => console.log('extra action here'))


  //for await : allows to iterate over await promises

  const loopThroughUrls = url => {
    for (url of urls) {
      console.log(url);
    }
  }

  const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
      // we are looping over promises
      const data = await request.json(); 
      console.log(data);
    }
  }

  getData2();