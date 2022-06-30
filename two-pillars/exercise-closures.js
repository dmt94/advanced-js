function callMeMaybe() {
  // with closures in mind,
  // it doesnt matter where we define the variables 
  // it's not about hoisting
  // js sees that there is an enclosing function that uses the variable, it will create a closure

  const met = 'I just met you...♪♫♬';
  const crazy = 'and this is crazy...♫♪';
  const number = 'but here\'s my number...' + '(720)-412-2018';
  const callMe = '♬ So CALL ME MAYBE? (๑•́ ₃ •̀๑)'

  setTimeout(function() {
    console.log(met);
  }, 1000);
  setTimeout(function() {
    console.log(crazy);
  }, 2000);
  setTimeout(function() {
    console.log(number);
  }, 4000);
  setTimeout(function() {
    console.log(callMe);
  }, 6000);
}

callMeMaybe();