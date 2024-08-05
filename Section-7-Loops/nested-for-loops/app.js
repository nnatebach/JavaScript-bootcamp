////// Practice 1
// Print this structure
// OUTER LOOP: 1 -> 10
// INNER LOOP: 10, 8, 6, 4, 2, 0

for (let i = 1; i <= 10; i++) {
  console.log('OUTER LOOP: ', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   INNER LOOP: ', j);
  }
}

////// Practice 2
// Print this structure
// OUTER: 0
//    INNER: LOL
// OUTER: 1
//    INNER: LOL
// OUTER: 2
//    INNER: LOL
// OUTER: 3
//    INNER: LOL
// OUTER: 4
//    INNER: LOL

let str = 'LOL';

for (let i = 0; i <= 4; i++) {
  console.log('OUTER:', i);
  for (let j = 0; j < 1; j++) {
    console.log('   INNER:', str);
  }
}

////// Practice 3
// Calculate and print out the total of all the elements in the arrays
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
]

let totalScore = 0;

for (let i = 0; i <= gameBoard.length - 1; i++) {
  let row = gameBoard[i]
  // Print out the nested arrays (4)
  console.log(row);
  for (let j = 0; j <= row.length - 1; j++) {
    // Print out all the elements in each array
    console.log(row[j]);
    totalScore += row[j];
  }
}

console.log(`Total score is ${totalScore}.`); // Total score is 230