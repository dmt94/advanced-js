let size = 8; //this is the variable setting

let board = "";//this is the empty string we're going to add either ' ' , '#' or newline

// board sets up the LOOK

for (let y = 0; y < size; y++) {   /* in the outer loop we add newline to separate rows */
  for (let x = 0; x < size; x++) {/* every inner loop represents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated */
    if ((x + y) % 2 == 0) // adding it acts as a way for " " & # to present in an alternate way " " for even and # for odd
      board += " ";
    else
      board += "#";
  }
  board += "\n"; //acts as the visual representation of the chessboard
}

console.log(board);