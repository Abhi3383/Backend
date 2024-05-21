// function returning function

function myFunc() {
  function hello() {
    return "hello world";
  }
  // It will return the function
  return hello;
}

const ans = myFunc();
console.log(ans);
console.log(ans());

function myFunc2() {
  function hello() {
    return "hello world";
  }
  // It will return the output of the function
  return hello();
}

const ans2 = myFunc2();
console.log(ans2);
