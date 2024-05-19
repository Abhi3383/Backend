// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
// fruits = ["apple", "mango","grapes"]; error
// Methods can be used to modify the const array 
fruits.push("banana");
console.log(fruits);
