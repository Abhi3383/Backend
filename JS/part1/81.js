function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

console.log(hello.name);

// you can add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


console.log(hello.prototype); //gives an empty object {}

// only functions provide prototype property

hello.prototype.abc = "abc";
console.log(hello.prototype);
hello.prototype.xyz = "xyz";
console.log(hello.prototype);
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());