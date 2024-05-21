// every method

// If on atleast one value the condition dosent satify it
// will return false else iff only the condition are met it
// will return true
const numbers = [2, 4, 6, 9, 10];
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
];

const ans2 = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans2);
