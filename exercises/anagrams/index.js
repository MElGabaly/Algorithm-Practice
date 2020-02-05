// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Method 1
  //   const charsA = buildCharMap(stringA);
  //   const charsB = buildCharMap(stringB);
  //   console.log(charsA, charsB);

  //   if (Object.keys(charsA).length !== Object.keys(charsB).length) {
  //     return false;
  //   }

  //   for (let char in charsA) {
  //     if (charsA[char] !== charsB[char]) {
  //       return false;
  //     }
  //   }

  //   return true;
  // }

  // function buildCharMap(str) {
  //   const charMap = {};

  //   for (char of str.replace(/[^\w]/g, "").toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }

  //   return charMap;
  // Method 2

  return cleanstr(stringA) === cleanstr(stringB);
}

function cleanstr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
module.exports = anagrams;
