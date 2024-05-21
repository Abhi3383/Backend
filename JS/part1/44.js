function singHappyBirthday() {
  console.log("happy birthday to you ......");
}
singHappyBirthday();

const sing = function () {
  console.log("happy birthday to you ......");
};

sing();
console.log("\n");

function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}

console.log(sumThreeNumbers(1, 2, 3));
const value = sumThreeNumbers(1, 2, 3);
console.log(value);
console.log("\n");

console.log(sumThreeNumbers());
console.log(sumThreeNumbers(1));
console.log(sumThreeNumbers(1, 2));
console.log(sumThreeNumbers(1, 2, 3, 4));

// isEven
// input : 1 number
// output : true , false

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log("\n");

// function
// input : string
// output: firstCharacter

function firstChar(anyString) {
  return anyString[0];
}

console.log(firstChar("zbc"));

// function
// input : array, target (number)
// output: index of target if target present in array

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 4);
console.log(ans);
