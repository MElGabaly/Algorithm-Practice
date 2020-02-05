// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Method 1
  // ---------------------
  //   const nR = parseInt(
  //     n
  //       .toString()
  //       .split("")
  //       .reverse()
  //       .join("")
  //   );

  //   if (Math.sign(n) == -1) {
  //     return nR * -1;
  //   }
  //   return nR;
  // Method 2
  return (
    parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(n)
  );
}

module.exports = reverseInt;
