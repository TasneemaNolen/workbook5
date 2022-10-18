"use strict";
//sample data
let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];
//calculations and output (question a.)
function getItemName(object) {
  return object.item;
}
function displayName(itemName) {
  console.log(itemName);
}
let itemNames = cart.map(getItemName);
itemNames.forEach(displayName);

//calculations and output (question b.)
function getTotalCost(currentTotal, arrayElement) {
  return currentTotal + arrayElement.price * arrayElement.quantity;
}
let sum = cart.reduce(getTotalCost, 0);
console.log(sum);
