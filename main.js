/*
1. [ ] Use .filter() to extract all products that cost less than 200
2. [ ] Use .map() to make a list that only contain the product names
3. [ ] Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')
4. [ ] Use .some() to check if there are any products that cost more than 1000
5. [ ] Use .reduce() to find the total cost of all the products.
*/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//Array with products of a price below 200
const lowerPrice = products.filter((product) => product.price < 200); //Chooses only items below 200
console.log(lowerPrice);

//Array with product names only
const productNames = products.map((products) => products.name); //Chooses only product names
console.log(productNames);

//Electronics
const electronics = products
  .filter((product) => product.category === "electronics") //Brings us everything with the "electronics" category
  .map((product) => product.name); //Removes all other info but the name

console.log(electronics);

//Home appliances
const homeApplicanes = products
  .filter((product) => product.category === "home appliances")
  .map((product) => product.name);

console.log(homeApplicanes);

//Clothing
const clothing = products
  .filter((product) => product.category === "clothing")
  .map((product) => product.name);

console.log(clothing);

//Are there any products that costs over 1.000?
const higherPrice = products.some((products) => products.price > 1000); //Checks if anything costs above 1.000. If yes = true

console.log(higherPrice);

//Total cost of all the products:
const totalPrice = products.reduce(
  (accumulator, product) => accumulator + product.price,
  0
); //Finds the total price.

console.log(totalPrice);
