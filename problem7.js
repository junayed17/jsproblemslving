// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

function EvenArr(params) {
  let evenArr = params.filter((ele) => ele % 2 == 0);
  return evenArr;
}
let evenArr = EvenArr([1, 2, 3, 4, 5, 6]);
console.log(...evenArr);
