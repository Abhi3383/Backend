// map method -> always creates a new array

const numbers = [3, 4, 6, 1, 8];

const square = function (number) {
  // must use return
  return number * number;
};

const squaredNum = numbers.map(square);
console.log(squaredNum);

const squareNumber = numbers.map((number, index) => {
  return `index : ${index} , ${number * number}`;
});
console.log(squareNumber);

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

// Output in the form of array
const userNames = users.map((user) => {
  return `${user.firstName} , ${typeof user.firstName}`;
});

console.log(userNames);

// Output in the form of type
users.forEach((user) => {
  console.log(user.firstName, typeof user.firstName);
  console.log([user.firstName, typeof user.firstName]);
});
