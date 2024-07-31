// Write a function to find the average value in an array of numbers
// avg([0, 50]) // 25
// avg([75, 76, 80, 95, 100]) // 85.2

function avg (arr) {
  let total = 0;
  // loop over each num
  for (let num of arr) {
    // add them together
    total += num;
  }
  // divide by number of nums
  return res = total / arr.length
}
avg([0, 50]) // 25
avg([75, 76, 80, 95, 100]) // 85.2