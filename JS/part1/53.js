// param destructuring 

// object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}
printDetails(person);

function printDetails2({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails2(person);