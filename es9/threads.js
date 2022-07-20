/*
JS is single-threaded, but with asynchronous ability,
we are able to do things in the background
so that even though we have JS that is one thread
we are able to do complex things and have websites that multitask behavior


Tasks in web browser and node.js
are still executed in "threads" underneath the hood
in separate background outside of JS

node.js

req
req
req 
      pass on server, one thread

able to do so bc of worker threads
*/

var worker = new Worker('worker.js') //we can spawn a new web worker and assign to work
worker.postMessage('posts message to another thread');

addEventListener('message');

/*
web worker runs on a separate thread outside of JS alongside main thread

we dont have to worry about creating our own threads

*/