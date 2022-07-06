/*
all identifiers are registered to their respective scopes 
during compile time. Moreover, every identifier is 
created at the [beginning] of the scope it belongs to, 
[every time] that scope is [entered].
*/

// hello(); 
//reference error bc function declaration is inside a block
{
  function hello() {
    console.log('hello');
  }
}

hi();

function hi() {
  console.log('hi');
}

goodbye();
/*
TypeError: goodbye is not a function

JS isn't telling us that it couldn't find greeting 
as an identifier in the scope. It's telling us 
that greeting was found but doesn't hold a 
function reference at that moment. 
Only functions can be invoked, 
so attempting to invoke some non-function value results in an error.
*/
var goodbye = function () {
  console.log('byeee');
}

/*
The "rule" of the hoisting metaphor is that function 
declarations are hoisted first, then variables are hoisted 
immediately after all the functions. Thus, the hoisting story 
suggests that program is re-arranged by the JS engine to look like this:
*/

function greeting() {
  console.log(`Hello ${ studentName }!`);
}
var studentName;

studentName = "Suzy";
greeting();
// Hello Suzy!

/*
hoisting should be used to refer to the [compile-time operation] of 
[generating runtime instructions]
for the automatic registration of a [variable] at the beginning of its scope, 
each time that scope is entered.

That's a subtle but important shift, from hoisting as a runtime behavior to its proper place 
among compile-time tasks.
*/


/*
The const keyword requires a variable to be initialized, 
so omitting an assignment from the declaration results in a SyntaxError:

const empty; //SyntaxError



const declarations create variables that cannot be re-assigned:

const hobbies = 'coding';
console.log(hobbies) //coding

hobbies = 'knitting'; //TypeError;

-  Syntax errors represent faults in the program that stop it from even starting execution.
- Type errors represent faults that arise during program execution. In the preceding snippet,
  "coding" is printed out [before] we process the re-assignment of hobbies>> which then throws the error.
*/

//JS doesnt really want to redeclare variables within the same scope

//Each loop iteration is its own new scope instance, and within each scope instance, value is only being declared once.
var keepGoing = true;
while (keepGoing) {
    let value = Math.random();
    if (value > 0.5) {
        keepGoing = false;
    }
}
/*
All the rules of scope (including "re-declaration" of let-created variables) are applied per scope instance. 
In other words, each time a scope is entered during execution, everything resets.
*/


//different with values declared by "var"
/*
var keepGoing2 = true;
while (keepGoing2) {
    var value2 = Math.random();
    if (value2 > 0.5) {
        keepGoing2 = false;
    }
}
*/
