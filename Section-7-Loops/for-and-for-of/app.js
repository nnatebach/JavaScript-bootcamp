// Example 1

const magicSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]

// Sample output
// 2, 7, 6 summed to 15
// 9, 5, 1 summed to 15
// 4, 3, 8 summed to 15


// for loop
// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   console.log(row);
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j]
//     console.log(sum);
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// for of loop
for (let row of magicSquare) {
  let sum = 0
  for (let num of row) {
    sum += num
  }
  console.log(`${row} summed to ${sum}`);
}

// Example 2

const words1 = ['mail', 'meal', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry']

// Sample output
// mailbox
// mealshake
// bathtub
// blackberry

for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`);
}