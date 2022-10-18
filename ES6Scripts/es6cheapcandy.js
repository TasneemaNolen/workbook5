"use strict";
//sample data
let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Haribo Star Mix", price: 2.99 },
  { product: "Twix", price: 1.0 },
  { product: "Dum-Dums", price: 5.99 },
  { product: "Herseys Almonds", price: 1.5 },
  { product: "Reeces Pieces", price: 3.99 },
  { product: "Juicy Gummy Fun Bugs", price: 1.99 },
];

//Which candies costs less than $4.00?
let cheapCandies = products.filter((product) => product.price < 4.0);
//output
console.log(cheapCandies);

// Which candies has "M&M" its name?
let candyType = products.filter(
  (product) => product.product.indexOf("M&Ms") !== -1
);
//output
console.log(candyType);
// Do we carry "Swedish Fish"?
let findCandy = products.filter(
  (product) => product.product.indexOf("Swedish Fish") !== -1
);
//output
console.log(findCandy.length > 0);
