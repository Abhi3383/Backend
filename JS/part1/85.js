let numbers = [1, 2, 3];

console.log(Object.getPrototypeOf(numbers));
console.log(Array.prototype);
console.log(numbers);

function hello() {
  console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);

