// find method

const myArray = ["Hello", "catt", "dog", "lion"];

function isLength3(string) {
  return string.length === 3;
}

const ans = isLength3("doggy");
console.log(ans);
myArray.find(isLength3);

const ans2 = myArray.find((string) => string.length === 3);
// const ans2 = myArray.find((string) => {
//   return string.length === 3;
// });
console.log(ans2);

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);
