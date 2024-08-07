// Create a guess number game that includes the target number and a random-generating number
// We will see how many time it will take for the program to guess the exact number as the target number.

// Target number
const target = Math.floor(Math.random() * 10);

// Number generating

let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} \n Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target number: ${target} \nGuessed number: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);