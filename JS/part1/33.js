// for of loop in array
const fruits = ["apple", "mango", "grapes", "kiwi", "banana"];
const fruits2 = [];

// for of works only on iterables like array,map,etc.
for (let fruit of fruits) {
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
