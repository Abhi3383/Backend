// undefined
// null -> typeof null is an object

let firstName;
console.log(typeof firstName);
firstName = "Harshit";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // It is a kind of bug or error in js

console.log(Number.MAX_SAFE_INTEGER);
// BigInt -> more capacity than MAX_SAFE_INTEGER
let myNumber = BigInt(999999999999999);
console.log(typeof myNumber, myNumber);
let sameMyNumber = 123n;
console.log(typeof sameMyNumber, sameMyNumber);
console.log(myNumber + sameMyNumber);
