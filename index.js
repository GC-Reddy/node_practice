// import express from "express";
const express = require("express");
const app = express();
const assert = require("assert");
console.log("app");
function calculateDiscount(price, discountPercentage) {
  // Input validation
  assert(typeof price === "number", "Price must be a number");
  assert(price >= 0, "Price cannot be negative");
  assert(
    discountPercentage >= 0 && discountPercentage <= 100,
    "Discount must be between 0 and 100"
  );

  return price * (1 - discountPercentage / 100);
}

// Usage
try {
  const finalPrice = calculateDiscount(100, 101);
  console.log("Final price:", finalPrice);
} catch (error) {
  console.error("Error:", error.message);
}
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
