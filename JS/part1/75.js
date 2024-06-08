// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

// arrow fuction dosent have "this"
// arrow fuction takes "this" from its surrounding
user1.about(user1);