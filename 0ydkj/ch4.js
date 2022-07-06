/*
the outer scope is the global scope and studentName is legitimately created as global variable.
 if you access the global object (commonly, window in the browser), 
 you'll find properties of those same names there:
*/

var studentName = "Kyle";

function hello() {
    console.log(`Hello, ${ window.studentName }!`);
}

window.hello();
// Hello, Kyle!



/*
Shadowing:
where one variable declaration can override and prevent access to a declaration 
of the same name from an outer scope.


Global Variable vs Global Property
*/
window.something = 42;

let something = "Kyle";

console.log(something);
// Kyle

console.log(window.something);
// 42

/*
The [let] declaration adds a something global variable but not a global object property (see Chapter 3). 
The effect then is that the something lexical identifier shadows the something global object property.
*/



//in browser environment

var name = 42;

console.log(name, typeof name);
// "42" string

/*
Above, We used [var] for our declaration, which does not shadow the pre-defined name global property. 
That means, effectively, the var declaration is ignored, 
since there's already a global scope object property of that name. 
Had we used [let] name, we would have shadowed window.name with a separate global name variable.

But the truly surprising behavior is that even though we assigned the number 42 
to name (and thus window.name), when we then retrieve its value, 
it's a string "42"! In this case, the weirdness is because name is 
actually a pre-defined getter/setter on the window object, 
which insists on its value being a string value. Yikes!
*/