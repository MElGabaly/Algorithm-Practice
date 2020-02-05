// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Method 1
  //   const chunckedarr = [];
  //   for (element of array) {
  //     const last = chunckedarr[chunckedarr.length - 1];
  //     if (!last || last.length === size) {
  //       chunckedarr.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }
  // Method 2
  const chunckedarr = [];
  let index = 0;

  while (index < array.length) {
    chunckedarr.push(array.slice(index, index + size));

    index += size;
  }

  return chunckedarr;
}

module.exports = chunk;
