// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    // we can write person hobbies without putting them in double
    // quotes if we want space between the 2 words
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person["person hobbies"]);

// both types of use are different
person[key] = "harshitvashisth@gmail.com";
// person.key = "harshitvashisth@gmail.com";
person["key"] = "harshitvashisth@gmail.com";
console.log(person);
