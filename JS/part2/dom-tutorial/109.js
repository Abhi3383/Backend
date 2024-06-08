// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property
let navItems = document.getElementsByTagName("a"); // HTMLCollection
console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

for (let i = 0; i < navItems.length; i++) {
  console.log(navItems[i]);
  const navItem = navItems[i];
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
}

for (let navItem of navItems) {
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
}

// Object to array conversion
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
navItems.forEach((navItem) => {
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
});

console.log(Array.isArray(navIte));
const navIte = document.querySelectorAll(".nav-item"); // NodeList
console.log(navIte[1]);

let navItem = document.querySelectorAll("a");
navItem = Array.from(navItem);
console.log(Array.isArray(navItem));
// simple for loop
// for of loop
// forEach
for (let i = 0; i < navItem.length; i++) {
  console.log(navItem[i]);
  const navItem = navItem[i];
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
}

for (let navItem of navItems) {
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
}
navItems.forEach((navItem) => {
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
  navItem.style.fontWeight = "bold";
});
console.log(navItems);
