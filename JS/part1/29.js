// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
console.log(array1.slice(0,2))
console.log(array1.slice(1,2))
console.log(array1.slice(0,1))
console.log("\n")

let array2 = array1.slice(0);
console.log(array2);
console.log("\n");
let array3 = [].concat(array1);
console.log(array3);
console.log("\n");
let array4 = [].concat(["item3", "item4"]);
console.log(array4);
console.log("\n");
let array5 = array1.slice(0).concat(["item3", "item4"]);
console.log(array5);
console.log("\n");

array2 = [].concat(array1,["item3", "item4"]);
console.log(array2)
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array6 = [...array1, ...oneMoreArray];
array1.push("item3");
console.log(array1===array3);
console.log(array1)
console.log(array3)
