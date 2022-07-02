/*
how the JS engine identifies variables and determines the scopes of a program as it is compiled.
*/
var students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Kirei" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
  for (let student of students) {
      if (student.id == studentID) {
          return student.name;
      }
  }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
// Kirei

/*
variables/identifiers in a program serve in one of two "roles": 
either they're the [target] of an assignment or they're the [source] of a value.

How do you know if a variable is a target? 
Check if there is a value that is being assigned to it; if so, it's a target. 

If not, then the variable is a source.
*/


/* 
___
TARGETS

Assignments:
1. students = [...]
2. nextStudent = getStudentName(73)

3. for (let student of students) {}
- assigns a value to student for each iteration of the loop

4. getStudentName(73)
- 73 is assigned to the parameter studentID in function getStudentName(studentID)

5. function getStudentName(studentID) {
-  A function declaration is a special case of a target reference. 
You can think of it sort of like var getStudentName = function(studentID), 
but that's not exactly accurate. 
An identifier getStudentName is declared (at compile time), 
but the = function(studentID) part is also handled at 
compilation; 

- the association between getStudentName
and the function is automatically set up at the [beginning]
of the scope rather than waiting for an = assignment statement to be executed.
>>>> This automatic association of function and variable is referred to as "function hoisting"

_______
SOURCES

1. for (let student of students)
  : students is the source reference

2. if (student.id == studentID
  : student and studentID are source references

3. return student.name
  : student is source reference

4. getStudentName(73)
  : getStudentName is a source reference

5. console.log(nextStudent)
  : console.log() and nextStudent are source reference
*/



/* 
One of the key aspects of lexical scope is that any time 
n identifier reference cannot be found in the current scope, 
the next outer scope in the nesting is consulted; that process 
is repeated until an answer is found or there are no more scopes to consult.
*/