// A Pangram is a sentence that contains every letter of the alphabet
// Example: “The quick brown fox jumps over the lazy dog”

// The function isPangram should check for 2 things
// - The sentence contains every letters in the alphabet
// - Ignore string casing (turn all cases to lower case)

// First solution: indexOf()

function isPangram (sentence) {
	// string casing
	let lowerCased = sentence.toLowerCase();

	// loop over the letters in the sentence
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		// check whether a sentence is a Pangram
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
isPangram("The quick brown fox jumps over the lazy dog"); // true

// Second solution: includes()

function isPangram (sentence) {
	// string casing
	let lowerCased = sentence.toLowerCase();

	// loop over the letters in the sentence
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		// check whether a sentence is a Pangram
		if (lowerCased.includes(char)) {
			return true;
		}
	}
	return false;
}
isPangram("A wizard’s job is to vex chumps quickly in fog."); // true