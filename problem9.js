// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

//     Example:

//       Input: 5
//   Output: 120


function Factorial(params) {
  let factorial=1;
  for (let index = 2; index <= params; index++) {
    factorial *= index;
  }
 return factorial
}

let fact=Factorial(5)
console.log(fact);
