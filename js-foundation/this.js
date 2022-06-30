//1: gives methods access to their objects

const obj = {
  kName: 'Kirei',
  sing() {
    return 'lalalal her name is ' + this.kName + ' dudududu yeeey';
  },
  singAgain() {
    this.kName = 'Hunkle';
    return this.sing() + '!';
  }
}

console.log(obj.sing());
console.log(obj.singAgain());
console.log(obj.sing());


//2: execute same code for multiple objects

function importantPerson() {
  console.log(this.name); //refers to global object
}
//we created a function once and multiple objects can use this

const name = 'Sunny';

const obj1 = {
  name: 'Windy',
  importantPerson: importantPerson
}
const obj2 = {
  name: 'Spring',
  importantPerson: importantPerson
}


obj1.importantPerson(); //Windy


// DYNAMIC SCOPE vs LEXICAL SCOPE

//WHO CALLED ME = THIS

const a = function() {
  console.log('a', this);
  const b = function() {
    console.log('b', this);
    const c = {
      hi: function() {
        console.log('c', this);
      }
    }
    c.hi(); //logs this
  }
  b();
}

a();

/* 
in browser: global scope/environment/object is Window
a > Window
b > Window
c > {hi: f}

"who called me"
window.a(b())  b is still called within the a function
*/