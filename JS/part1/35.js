// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];

// traditional approach
let myvar1 = myArray[0];
let myvar2 = myArray[1];
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log("\n");

// better approach
let [myvara1, myvara2, ...myNewArray] = myArray;
console.log("value of myvar1", myvara1);
myvara1="hello"
console.log("value of myvar1", myvara1);
console.log("value of myvar2", myvara2);
console.log(myNewArray);
console.log("\n");

const [myvars1, myvars2, ...myNewArrays] = myArray;
console.log("value of myvar1", myvars1);
// myvars1="hello" error
console.log("value of myvar2", myvars2);
console.log(myNewArrays);
console.log("\n");

const myArr = ["value1"];
let [vars1, vars2, ...myArrays] = myArr;
console.log("value of var1", vars1);
console.log("value of var2", vars2);
console.log(myArrays);
console.log("\n");

let [myva1, ,myva2] = myArray;
console.log("value of myvar1", myva1);
console.log("value of myvar2", myva2);
console.log("\n");
