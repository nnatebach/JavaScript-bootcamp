// Create a guess number game that includes the target number and a random-generating number
// We will see how many time it will take for the program to guess the exact number as the target number.

// Target number
const target = Math.floor(Math.random() * 10);

// Number generating

let guess = Math.floor(Math.random() * 10);

// Extra - Show the number of time it takes to guess the correct target number
let numGuess = [];
let totalGuess

while (guess !== target) {
  console.log(`Guess is ${guess}`);
  guess = Math.floor(Math.random() * 10);
  // Show the number of time it takes to guess the correct target number
  numGuess.push(guess)
  totalGuess = numGuess.length
}

console.log(`Target: ${target} \n Guess: ${guess}`);

// Extra - Show the number of time it takes to guess the correct target number
// let numGuess = [];
// let totalGuess = 0;

// while (guess !== target) {
//   console.log(`Guess is ${guess}`);
//   numGuess.push(guess);
//   guess = Math.floor(Math.random() * 10);
//   totalGuess = numGuess.length;
// }

// console.log(`Target: ${target} \nGuess: ${guess} \nNumber of guesses: ${numGuess.join(', ')} \nTotal guesses: ${totalGuess}`);