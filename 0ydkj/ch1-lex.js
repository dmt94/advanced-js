function wisdom() {
  {
    var letGo = 'let thoughts flow';
  }
  console.log(letGo); // let thoughts flow
}

wisdom()

function peace() {
  var protect = 'prayers for protection';
  {
    let inner = 'let calmness speak';
    console.log(protect); //prayers for protection  (inner scope have access to outer)
  }
  // console.log(inner); //inner is not defined
}

peace();

/*
Furthermore, a reference (target or source role) for a variable 
must be resolved as coming from one of the scopes 
that are lexically available to it; otherwise 
the variable is said to be "undeclared" 
(which usually results in an error!). 

If the variable is not declared in the current scope, 
the next outer/enclosing scope will be consulted. 
This process of stepping out one level of scope nesting 
continues until either a matching variable declaration can be found, 
or the global scope is reached and there's nowhere else to go.
*/