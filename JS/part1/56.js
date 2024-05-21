// important array methods

let numbers = [1, 2, 3, 4, 5];

function myFunc(number, index) {
  console.log(`index is ${index} number is ${number}`);
}

// forEach automatically passes 2 things by default in order
// 1. numbers 2. index
numbers.forEach(myFunc);
console.log("\n");

// another way to define forEach
numbers.forEach(function (number, index) {
  console.log(`index is ${index} number is ${number}`);
});
console.log("\n");

numbers.forEach(function (number, index) {
  console.log(number * 3, index);
});
console.log("\n");

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

users.forEach(function (user) {
  console.log(user.firstName);
});
console.log("\n");

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})
console.log("\n");

for(let user of users){
    console.log(user.firstName);
}
