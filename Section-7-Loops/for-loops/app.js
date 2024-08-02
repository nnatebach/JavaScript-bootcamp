//// Practice 1

// 1 = 1 * 1
// 4 = 2 * 2
// 9 = 3 * 3
// 16 = 4 * 4
// 25 = 5 * 5
// 36 = 6 * 6
// 49 = 7 * 7
// 64 = 8 * 8
// 81 = 9 * 9

for (let num = 1; num <= 20; num++) {
  console.log(`${num} x ${num} = ${num * num} `);
}

//// Practice 2

// Start i at 50
// Subtract 10 each iteration
// Keep going as long as i ≥ 0

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}