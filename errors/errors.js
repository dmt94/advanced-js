/*
> errors are opportunities for improvement & growth
*/

//execution of program stops
//throw instance of an error
// throw new Error();

// throw 'string';
// throw Error;

const myBad = new Error('oooooopsie');

console.log(myBad.message) //ooooopsie ^^
console.log(myBad.stack) //shows where the error happened


new SyntaxError;
new ReferenceError;

