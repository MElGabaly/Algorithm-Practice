// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // method 1
  //   ---------------
  //   let letters = str.split("");
  //   let lettersR = letters.reverse();
  //   let strR = lettersR.join("");

  //   return strR;
  //   method2
  //   ---------------
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");

  // method 3
  //   ---------------
  //   let reversed = "";

  //   for (let char of str) {
  //     reversed = char + reversed;
  //   }

  // method 4
  //  ------------------

  return str.split("").reduce((rev, char) => char + rev, "");

  //   return reversed;
}

module.exports = reverse;
