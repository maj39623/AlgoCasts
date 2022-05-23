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
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    //Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    //Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    //Start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;

//Solution
//create empty array of arrays called results
//create a coutner variable, starting at 1
//As long as (start column <= end column) AND (start row <= end row)
//loop from start column to end column
//at results[start_row][i] assign counter variable
//increment counter
//increment start row
//loop from start row to end row
//at results[i][end_column] assign counter variable
//increment counter
//decrement end column
//repeat for other two stages

// function matrix(n) {
//     const results = [];

//     for (let i = 0; i < n; i++) {
//       results.push([]);
//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
//     while (startColumn <= endColumn && startRow <= endRow) {
//       //Top Row
//       for (let i = startColumn; i <= endColumn; i++) {
//         results[startRow][i] = counter;
//         counter++;
//       }
//       startRow++;
//       //Right Column
//       for (let i = startRow; i <= endRow; i++) {
//         results[i][endColumn] = counter;
//         counter++;
//       }
//       endColumn--;
//       //Bottom Row
//       for (let i = endColumn; i >= startColumn; i--) {
//         results[endRow][i] = counter;
//         counter++;
//       }
//       endRow--;
//       //Start Column
//       for (let i = endRow; i >= startRow; i--) {
//         results[i][startColumn] = counter;
//         counter++;
//       }
//       startColumn++;
//     }
//     return results;
//   }

//NOTES
// With i being equal to 1 and endColumn currently equal to 2, we can see how we are placing 4 into the array at (ROW) index 1 in the  (COLUMN) index position of 2 ([][] two dimensional arrays), and then placing 5 into the array at index 2 (third array in the diagram) in the index position of 2. Sound confusing? Take another look at the diagram again.
