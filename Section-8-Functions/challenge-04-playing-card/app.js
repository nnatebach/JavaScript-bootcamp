// Write a “getCard” function which returns a random playing card object.
// Example:
// {
// 	value: "K",
// 	suit: "clubs"
// }

// Instructions:
// - Pick a random value
//     1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// - Pick a random suit
//     hearts, diamonds, spaces, clubs
// - Return both in an object
// {
// 	value: "K",
// 	suit: "clubs"
// }


//////// One big function
function getPlayingCard () {

	// The values
	const values = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

	const valIdx = Math.floor(Math.random() * values.length);
	const value = values[valIdx];

	// The suites
	const suites = ["hearts", "diamonds", "spaces", "clubs"];

	const suitesIdx = Math.floor(Math.random() * suites.length);
	const suite = suites[suitesIdx];

	return { value: value, suite: suite};
}


//////// Two smaller functions
function pick (arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard () {

	// The values
	const values = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

	const value = pick (values); // Reuse function pick

	// The suites
	const suites = ["hearts", "diamonds", "spaces", "clubs"];

	const suite = pick(suites); // Reuse function pick

	return { value: value, suite: suite};
}


//////// One step further: Reuse function "pick" for returning value and suite
// Let's call the big function "getCard1"

function getCard1 () {

	// The values
	const values = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

	// The suites
	const suites = ["hearts", "diamonds", "spaces", "clubs"];

	return { value: pick (values), suite: pick (suites)};
}