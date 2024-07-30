// Zero argument - the code runs the same every time

function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled ${roll}`);
}
// rollDice(); // the code runs once

// Calling "rollDice" multiple times by repeating the function

function throwDice () { // zero argument
  // call "rollDice" 6 times
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}
// throwDice(); // the code runs 6 times

// Calling "rollDice" multiple times by using argument

function throwDice (numbOfRoll) { // 1 argument
  // call "rollDice" 6 times
  for (let i = 0; i < numbOfRoll; i++) {
    rollDice();
  }
}
throwDice(6); // the code runs 6 times
