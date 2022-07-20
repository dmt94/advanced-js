/* Job Queue - Microtask Queue
higher priority than callback queue

Event Loop will check job queue first before callbac queue
before we start putting callback queue functions to callstack

Web API that calls timer API, a facade function
setTimeout(() => {console.log('1', 'is powerful')}, 0)

*/

// Callback Queue  - Task Queue : implemented by browser, but each browsers may implement it differently
setTimeout(() => {console.log('1', 'is powerful')}, 0);
setTimeout(() => {console.log('2', 'partnership and communication is key')}, 2000);

// Job Queue - Microtask Queue
Promise.resolve('hi').then((data) => console.log('2', data));