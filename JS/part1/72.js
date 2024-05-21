// console.log(this);
// will not work in windows
// console.log(window);
// console.log(window==this);
function myFunc(){
    
    console.log(this);
}
"use strict";
function myFunc2(){

    console.log(this);
}
myFunc2();