//Problem 2: Count Vowels in a String
// Write a function that counts how many vowels(a, e, i, o, u) are in a given string.

function Vowels(params) {
  let v = "AEIOUaeiou", c = 0;

  for (let ch of params) {
    if (v.includes(ch)) {
      c++;
    }
  }
  return c;
}
let vowels=Vowels("programming")
console.log(vowels);
