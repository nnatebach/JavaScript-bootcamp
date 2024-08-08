const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

console.log("The keys are ", Object.keys(movieReviews))
console.log("The values are ", Object.values(movieReviews))

// Print out the keys and values

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie])
}

// Calculate and print out the average score of all the ratings

const ratings = Object.values(movieReviews);
let total = 0;

for (let rating of ratings) {
	total += rating
}
let avg = total / ratings.length
console.log(avg) // 8.6875