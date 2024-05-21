// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

console.log(obj);
const obj1 = {...obj};
const obj2 = {'key69': "value69",...obj};
const obj3 = Object.assign({}, obj);
const obj4 = Object.assign({'key69': "value69"}, obj);
obj.key3 = "value3";
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

