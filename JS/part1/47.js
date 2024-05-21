// hoisting

// calling the function first and then defining
// it will only work in function declaration not in
// function expression

hello();

function hello() {
  console.log("hello world");
}
// const hello = function () {
//   console.log("hello world");
// };

console.log(hello);
hello = "radhe radhe";
console.log(hello);
