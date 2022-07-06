var keepGoing2 = true;
while (keepGoing2) {
    var value2 = Math.random();
    console.log(value2);
    if (value2 > 0.5) {
        keepGoing2 = false;
    }
}

/*
Because var is not treated as a block-scoping declaration (see Chapter 6), it attaches itself to the global scope. So there's just one value variable, in the same scope as 
keepGoing (global scope, in this case). No "re-declaration" here, either!
*/

/*
Temporal Dead Zone (TDZ)
- period of time from the entering of a scope to where the auto-initialization of the variable occurs
- time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way.



askQuestion();
// ReferenceError

let studentName = "Suzy";

function askQuestion() {
    console.log(`${ studentName }, do you know?`);
}
Explanation for ReferenceError:
- Even though positionally the console.log(..) referencing studentName comes after the let studentName declaration, timing wise the askQuestion() function is invoked before the let statement is encountered, while studentName is still in its TDZ! Hence the error.

So to summarize, TDZ errors occur because let/const declarations do hoist their declarations to the top of their scopes, 
but unlike var, they [defer] the auto-initialization of their variables until the moment in the code's sequencing where the original declaration appeared. 
This window of time (hint: temporal), whatever its length, is the TDZ.

How can you avoid TDZ errors?

My advice: always put your let and const declarations at the top of any scope. Shrink the TDZ window to zero (or near zero) length, and then it'll be moot.
*/


askQuestion();
// ReferenceError

let studentName = "Suzy";

function askQuestion() {
    console.log(`${ studentName }, do you know?`);
}

/*
Even though positionally the console.log(..) 
referencing studentName comes after the let studentName declaration, 
[timing] wise the askQuestion() function is [invoked] 
[before] the [let] statement is encountered, 
while studentName is still in its TDZ! Hence the error.


 auto-registration of a variable at the top of the scope (i.e., what I call "hoisting") 
 and auto-initialization at the top of the scope (to undefined) 
 are distinct operations and shouldn't be lumped together under the single term "hoisting."
*/


var studentName2 = "Kyle";

{
    console.log(studentName2);
    // ???

    // ..

    let studentName2 = "Suzy";

    console.log(studentName2);
    // Suzy
}

/*
ReferenceError above
 the inner scope's studentName was hoisted (auto-registered at the top of the scope)
  What didn't happen (yet!) was the auto-initialization of that inner studentName; 
    => it's still uninitialized at that moment, hence the TDZ violation!
    => So to summarize, TDZ errors occur because let/const declarations 
    do hoist their declarations to the top of their scopes, but unlike var, 
    
    they defer the auto-initialization of their variables until the moment in 
    the code's sequencing where the original declaration appeared. 
    This window of time (hint: temporal), whatever its length, is the TDZ.
*/