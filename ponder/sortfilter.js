
let nums = [14, 25, 3, 1];

function numberCompare(a, b) {
  return a - b;
}

console.log(nums.sort(numberCompare));


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

console.log(simpleList.sort());

let lowerList = simpleList.map(function (fruit) {
  return fruit.toLowerCase();
});

console.log(lowerList.sort());

let searchTerm = "apples";

let filterFruit = lowerList.filter(function (fruit) {
  return fruit.includes(searchTerm);
});

console.log(filterFruit);


function compareFn(a, b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
  return 0;
}

const products = [
  { productName: "Wireless Mouse", price: 29.99 },
  { productName: "Bluetooth Keyboard", price: 49.99 },
  { productName: "Laptop Stand", price: 39.99 }
];

console.log(products.sort(compareFn));


const animals = [
  { name: "Lion", traits: ["brave", "strong", "fierce", "wild"] },
  { name: "Elephant", traits: ["large", "gentle", "smart", "wild"] },
  { name: "Fox", traits: ["sly", "quick", "clever", "wild"] },
  { name: "Dog", traits: ["loyal", "friendly", "playful", "cuddly"] },
  { name: "Cat", traits: ["quiet", "independent", "curious", "cuddly"] }
];

let query = "lion";
let filteredList = animals.filter(function (item) {
  return item.name.toLowerCase().includes(query.toLowerCase());
});
console.log(filteredList);

let queryTrait = "strong";
let filteredTraits = animals.filter(function (item) {
  return item.traits.find(trait =>
    trait.toLowerCase().includes(queryTrait.toLowerCase())
  );
});
console.log(filteredTraits);
