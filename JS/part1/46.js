// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }
// in function expression remove function keyword and put arrow (=>)
// in front of parenthesis() it will get converted into arrow function

const singHappyBirthday = () => {
  console.log("happy birthday to you ......");
};

singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

const ans = sumThreeNumbers(2, 3, 4);
console.log(ans);

// If its a single line expession we dont need to put
// curly braces {} and return keyword
// If its a single parameter we dont need to put
// parenthesis ()
// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = (number) => number % 2 === 0;

console.log(isEven(4));
console.log("\n");

const firstChar = (anyString) => anyString[0];

console.log(firstChar("harshit"));

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
