// objects inside array
// very useful in real world applications

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];
console.log(users);
console.log("\n");

for (let user of users) {
  console.log(user);
}
console.log("\n");

for (let user of users) {
  console.log(user.firstName);
}
console.log("\n");

for (let user of users) {
  console.log(user.userId);
}
