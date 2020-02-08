// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // Method 1
  //   const checker = "aeiou";
  //   let counter = 0;
  //   for (letter of str.toLowerCase()) {
  //     for (vowel of checker) {
  //         // if (checker.includes(letter))
  //       if (vowel === letter) {
  //         counter++;
  //       }
  //     }
  //   }
  //   return counter;
  // Method 2 (Regural Expressions)
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
