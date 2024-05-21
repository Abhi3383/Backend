// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray1 = [...array1, ...array2, 89, 69];
console.log(newArray1);
// const newArray2 = [...123456789]; error as integer is not iterable
// console.log(newArray2);
const newArray2 = [..."123456789"];
console.log(newArray2);
const newArray3 = [..."abc"];
console.log(newArray3);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  // if i write 
  // key1: 99
  // it will override "value1"
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject1 = { ...obj2, ...obj1, key69: "value69" };
console.log(newObject1);
const newObject2 = { ...["item1", "item2"] };
console.log(newObject2);
const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject3);
