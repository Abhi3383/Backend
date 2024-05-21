// how to iterate object
const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// for in loop
for (let key in person) {
  // console.log(`${key} : ${person[key]}`);
  console.log(key, " : ", person[key]);
}
console.log("\n");
// Object.keys
console.log(Object.keys(person));
console.log(Object.values(person));
console.log("\n");
console.log(typeof Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val);

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
