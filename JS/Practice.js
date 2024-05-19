let hello = function world() {
  console.log("Hello world");
};

console.log(hello());

let a = [1, 2, 3, 4];

let b = a.map((element) => ({ value: element }));
console.log(b);
