// MAXIMUM CALL STACK SIZE EXCEEDED

// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//     var item = list.pop();

//     if (item) {
//         removeItemsFromList();
//     }
// };

// removeItemsFromList();


//////////////////////////////////////////////////////////////////
// NO CALL STACK RangeError
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  setTimeout(() => {
    var item = list.pop();
    if (item) {
      removeItemsFromList()
    }
  }, 0);
};

removeItemsFromList();
console.log(list);

//////////////////////////////////////////////////////////////////
// const list = new Array(60000).join('1.1').split('.');

// function removeItemsFromList() {
//     var item = list.pop();

//     if (item) {
//       setTimeout(removeItemsFromList, 0);
//     }
// };

// removeItemsFromList();


