const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000
}

// Print out the keys and values

for (let prop in jeopardyWinnings) {
  // keys
  console.log(prop);
  // values
  console.log(jeopardyWinnings[prop]);
}

// Calculate and print out the total earnings (of Ken Jennings)

let total = 0;

for (let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop]
}

console.log(`Total earnings of Ken Jennings is ${total}`);

for (let k in [88, 99, 77, 66]) {
  console.log(k); // 0, 1, 2, 3.
}