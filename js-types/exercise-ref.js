//exercise reference

const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, first, sec) {
    number = number * 10;
    string = "Pete";
    //local obj1
    first = sec;
    sec.value = "c";
    console.log('inside function scope=>', first.value); //c
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); 
console.log(string);
console.log(obj1);
console.log('outside function scope=>', obj1.value); //a
console.log(obj2.value);

/*
 The variable reassignments in function have its functional scope, 
 which means the variables outside do not have access to it
*/