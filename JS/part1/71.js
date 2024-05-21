// methods
// function inside object

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "harsh",
  age: 8,
  about: personInfo,
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};
const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};
const person4 = {
  firstName: "abhishek",
  age: 21,
  about: function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
  },
};
const person5 = {
  firstName: "abhishek",
  age: 21,
  about: function personInfo() {
    console.log(this);
  },
};

person1.about();
person2.about();
person3.about();
person4.about();
person5.about();
