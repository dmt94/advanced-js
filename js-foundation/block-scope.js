/* Block Scope*/

function a() {
  var secret = 'iamGOOSE';
}

// console.log(secret); => referenceError


if ('z' > 'a') {
  var secretCode = 32432;
}

console.log(secretCode); //32432


if ('z' > 'a') {
  let secretCode2 = 32451;
}

// console.log(secretCode2); 
//ReferenceError, variables declared w let and const enables block scoping


/* EXERCISE */
function loop() {
  for(var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i);
}

loop()