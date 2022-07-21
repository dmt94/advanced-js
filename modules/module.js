/*
modules are grouped together for organization
similar to separation of concern idea 
contain things in their own functionality

highly self-contained and grouped together in their own functionality
without disrupting everything

we need a way to import code we use
ideally, code is imported into different files and functionality
we need a way to:
> import dependencies (code we want to use)
> export functionalities, interface that allows others to use our code

Programs: allow us to modify data/variables
> the way we structure the data is the most important, allows
for more maintainable code 
> way to keep the variable we are using
*/

user = {};
function signin(user) {
  var textfield = 'hihihi';
}

function isHuman(user) {
}

// tight coupling: everything is connected tightly
// ex. modifying user obj => affects other functions etc
// hard to debug = bc modifying data can be problem

