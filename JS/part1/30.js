// for loop in array

for (let i = 0; i <= 9; i++) {
  console.log(i);
}
console.log("\n");

let fruits = ["apple", "mango", "grapes", "banana"];

console.log(fruits.length);
console.log(fruits[fruits.length - 2]);
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);
