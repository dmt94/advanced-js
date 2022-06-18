let journal = [];
function addEntry(events, squirrel) {
  journal.push({events, squirrel}); 
  /* an object with keys 'events' and 'squirrel' are created & pushed into an array
   each time this function is called, a nested object element 
   with the keys 'events' and 'squirrel' along with their respective arguments as values

   events: (values passed as events argument)
   squrirel: (values passed as squirrel argument)

   the {keyName1, keyName2,...} this formatting creates property names
  */
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(journal);

/*
Goal: find out which of these events
may be related to the 
squirrelifications

Correlation is a measure of dependence
between statistical variables.

A statistical variable is not
quite the same as a programming variable. 

-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

To extract a two-by-two table for a specific event from the journal,
we must loop over all the entries and tally how many times the event
occurs in relation to squirrel transformations.
*/

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]