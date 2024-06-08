
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

user1.about(); 
const myFunc = user1.about; 
myFunc(); // this will give undefined becuase
// when we call it "this" keyword will point to
// the parent of the object in this case it is "window"
const myFunc2 = user1.about.bind(user1);
myFunc2();