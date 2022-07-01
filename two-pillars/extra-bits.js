// be careful initializing functions in loops
// only initialize function once

function askMe() {
  console.log('Are you annoyed yet?');
}

for (let i = 0; i < 5; i++) {
  askMe();
}

//default parameter
function greet(param='Kirei') {
  return `Hope you're having a great day, ${param}!`;
}

console.log(greet());
console.log(greet('Hunkle'));