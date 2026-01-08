// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

function Maximum(params) {
  let max = Math.max(...params)
 return max;
}
let max=Maximum([5, 1, 9, 3]);
console.log(max);
