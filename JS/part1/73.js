function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user0 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};
console.log(user0.about())

const user1 = {
  firstName: "harshit",
  age: 8,
};


// call
// defines the "this"
// in below instead of the function values
// it will call the values defined in the function
// user0 will call the about function and it will 
// take the "this" values which were defined .call function 
user0.about.call(user1)
about.call(user1,18,"coding","shaan")

const user2 = {
  firstName: "mohit",
  age: 9,
};

// apply (same as call we the pass the value in form of array)
about.apply(user1, ["guitar", "bach"]);
// bind -> return the function
const func = about.bind(user2, "guitar", "bach");
func();
