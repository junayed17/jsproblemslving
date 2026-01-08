// Write a function that checks if a string is a palindrome(reads the same forward and backward)

  function Palindrome(params) {

    let reversed = params.split("").reverse().join("")
    if (reversed == params) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }

Palindrome("madam");
Palindrome("hello");
