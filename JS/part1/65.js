// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3','item4'];

// delete
let deletedItem = myArray.splice(1, 1);
console.log("delted item", deletedItem);
deletedItem = myArray.splice(1, 2);
console.log("delted item", deletedItem);

// insert 
myArray.splice(1, 0,'inserted item');

// insert and delete 
console.log("\n");
const myArray2 = ['item1', 'item2', 'item3','item4'];
console.log(myArray2);
const deletedItems = myArray2.splice(1, 2, "inserted item1", "inserted item2")
console.log("deleted item", deletedItems);
console.log(myArray2);