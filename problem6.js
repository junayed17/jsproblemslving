// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

//     Example:

  // Input: [1, 2, 3, 4]
  // Output: 10


function Sum(params) {
  let sum=0;
  params.forEach((element) => {
    sum += element;
  });
return sum;
}

let s = Sum([1, 2, 3, 4]);
console.log(s);


