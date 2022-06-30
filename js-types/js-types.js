//Primitive type

/*
Data that represents a single value
*/



/* standard built in objects 
*/


true.toString(); //'true'

/* 
JS creates wrapper object around the true (silently)
when we try to access a property on a primitive (boolean is a primitive in the above)

underneath the hood:
Boolean(true).toString()
*/

console.log(NaN === NaN); //false
console.log(Number.isNaN(NaN)); //true
