//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

//[this] refers to whatever called 
//getFullYear() is a method for Date function

//does not work for arrow notation because [this] will become lexically scoped
//[this] will refer to the actual function that called
// in this situation, we want [this] to be defined at call time
Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
}

console.log(new Date().lastYear())



//#Bonus
// Modify .map() to print '🗺' at the end of each item.

Array.prototype.map = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] + '🗺'))
  }
  return arr.join('  ');
}

console.log([1,2,3].map())
//1🗺, 2🗺, 3🗺


//How would you be able to create your own .bind() method using call or apply.
Function.prototype.bind = function(caller) {
  const self = this;
  return function(){
    return self.apply(caller, arguments);
    //const healFae = whiteSage.heal.bind(Fae, 100, 30); using bind example
  }
}