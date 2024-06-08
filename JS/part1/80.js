const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__, in offical ecmascript documentation [[prototype]] is written

// __proto__ , [[prototype]] they are same

// prototype is different

// there is one more way to create empty object
const obj2 = Object.create(obj1); // {}
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2.key1);
console.log(obj2.key2);
console.log(obj2.key3);
console.log(obj2);

console.log(obj2.__proto__);

