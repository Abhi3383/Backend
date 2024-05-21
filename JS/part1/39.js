// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj1 = {
  // if we write inside the sq. braces it will read the variable
  [key1]: value1,
  // if we dont it will not read the variable and will create its own
  key2: value2,
};

console.log(obj1);

const obj2 = {
    [key1] : value1,
    [key2] : value2
}

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);
