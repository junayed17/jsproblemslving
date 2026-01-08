//   Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

//     Example:

//   Input: "hello"
//   Output: "olleh"

function Reverse(params) {

  let reversedStr=params.split("").reverse().join("");

  return reversedStr;
}
let reversed=Reverse("Hello")
console.log(reversed);
