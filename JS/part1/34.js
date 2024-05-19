// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// works on reference type like object,arrays,etc
for (let index in fruits) {
  fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
