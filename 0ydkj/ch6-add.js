function adder(num1) {
  return function addTo(num2){
      return num1 + num2;
  };
}

//more clear use
var add10To = adder(10);
var add42To = adder(42);

console.log(add10To(15));    // 25
console.log(add42To(9));     // 51


console.log(adder(10)(2)); // 12

function greetStudent(studentName) {
  return function greeting(){
      console.log(
          `Hello, ${ studentName }!`
      );
  };
}

greetStudent("Kyle"); //did not invoke the inner function
greetStudent("Kyle")(); //"Hello, Kyle" must invoke inner function for this to be defined as "closure"

// nothing else happens