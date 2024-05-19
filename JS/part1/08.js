// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let ages = 22; 
let firstName = "harshit";

console.log(typeof ages);

// 22 -> "22"
// convert number to string. 
ages = ages + "";
console.log(typeof(ages)); 


// convert string to number. 

let myStr = +"34";
console.log(typeof myStr);

let age = "18";
age = Number(age); // typecasting
console.log(typeof age);

let aged = 18;
aged = String(aged); // typecasting
console.log(typeof aged);