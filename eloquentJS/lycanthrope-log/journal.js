let journal = [];

let addEntry = (events, squirrel) => journal.push(events, squirrel);

addEntry(['work', 'touched tree', 'pizza', 'running', 'watched tv'], false);
addEntry(['work', 'eat ice cream', 'cauliflower', 'touched tree', 'afternoon tea'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'margarita'], true);

console.log(journal);

/*correlation formula 

n11 * n00 - n10 * n01
_____________________
sqrt(v1TRUE * v1FALSE * v2TRUE * v2FALSE)


sqrt(firstVariableTrue&False * secondVariable)

2 variables 
first variable = second event (squirrel -- true or false)
second variable = first event

n00 = 76 ; no sq, no pizza
n01 = 9 ; no sq, yes pizza
n10 = 4 ; yes sq, no pizza
n11 = 1 ; yes sq, yes pizza


n1- = 5  ; all yes sq (sum)
n0- = 85 ; all no sq (sum)
n-1 = 10 ; all no yes pizza (sum)
n-0 = 80 ; all no pizza (sum)
*/

//much more simple to use a simple array 
let jacksEntry = [76, 9, 4, 1];

let phi = (table) => {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
}

console.log(phi(jacksEntry).toFixed(4));


