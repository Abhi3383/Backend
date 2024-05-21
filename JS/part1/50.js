// block scope vs function scope

// let and const are block scope
// var is function scope

{
  let a = 69;
  console.log(a);
  var b = 60;
  console.log(b);
}
// let and const are scope specific
// console.log(a);
console.log(b);

if (true) {
  var firstName = "harshit";
  console.log(firstName);
}

console.log(firstName);

function myApp() {
  if (true) {
    var firstName = "abhishek";
    console.log(firstName);
  }

  if (true) {
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();
