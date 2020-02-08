// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;

  let startcol = 0;
  let endcol = n - 1;
  let startrow = 0;
  let endrow = n - 1;

  while (startcol <= endcol && startrow <= endrow) {
    //   Top Row
    for (i = startcol; i <= endcol; i++) {
      results[startrow][i] = counter;
      counter++;
    }
    startrow++;

    // right Column
    for (i = startrow; i <= endrow; i++) {
      results[i][endcol] = counter;
      counter++;
    }
    endcol--;

    // Bottom Row
    for (i = endcol; i >= startcol; i--) {
      results[endrow][i] = counter;
      counter++;
    }
    endrow--;

    // start column
    for (i = endrow; i >= startrow; i--) {
      results[i][startcol] = counter;
      counter++;
    }
    startcol++;
  }
  console.log(results);
  return results;
}

module.exports = matrix;
