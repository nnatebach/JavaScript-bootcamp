// alert("It's working!!");

// console.log("It's working!!");
// console.error('OH NOOOO!!');

// console.log(3 + 4, "hello", true);

////////////////////// #### 6. If Statements

//////// Example 1

if (1 === 1) {
  console.log("This is True!");
}

//////// Example 2

if (1 !== 1) {
  console.log("This is True!");
}

//////// Example 3

let rating = 7;

if (rating === 7) {
  console.log("You are a super star!");
}

//////// Example 4

let rating2 = 3;

if (rating2 < 7) {
  console.log("You are not a super star!");
}

//////// Example 5

// Practical use of the if statement
// Checking odd / even number

let num = 37;

if (num % 2 !== 0) {
  console.log("Odd number"); // Odd number
}

////////////////////// 7. Else if

//////// Performance review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

let rating3 = 2;

if (rating3 === 3) {
  console.log("superstar");
} else if (rating3 === 2) {
  console.log("meets expectations");
} else if (rating3 === 1) {
  console.log("needs improvement");
}

////////////////////// 8. Else

////// Example 1
//// Performance review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

let rating4 = -99;

if (rating4 === 3) {
  console.log("superstar");
} else if (rating4 === 2) {
  console.log("meets expectations");
} else if (rating4 === 1) {
  console.log("needs improvement");
} else {
  console.log("Invalid rating!");
}

////// Example 2
// Let's say in a game you already score some points
// If your current score is greater than the highScore then your score will become the highScore.

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats! You have the new high score of ${userScore}`);
  highScore = userScore; // if the user's current score is greater than the high score then the high score will become the current user's score.
} else {
  console.log(
    `Good game! Your score ${userScore} did not beat the current high score of ${highScore}`
  );
}

////////////////////// 9. Nesting Conditionals

let password = "dog cat";
if (password.length >= 6) {
  if (password.indexOf(" ") !== -1) {
    console.log("Password cannot include spaces");
  } else {
    console.log("Valid password!");
  }
} else {
  console.log("Password MUST be of 6 characters");
}

////////////////////// 10. Truthy and Falsy Values

let mystery = 5;

if (mystery) {
  console.log("TRUTHY");
} else {
  console.log("FALSY");
}

////////////////////// 11. LOGICAL AND (&&)

// Modify the code for "password"

let password1 = "dog cat";
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid password!");
} else {
  console.log(
    "Password MUST be of 6 characters and password must NOT contain space!"
  );
}

// Additional example

let numGuess = 3;

if (numGuess >= 1 && numGuess <= 10) {
  console.log("Number is between 1 and 10");
} else {
  console.log("Please guess a different number!");
}

////////////////////// 12. LOGICAL OR (||)

// Example 2:

let age = 76;

if (age < 6 || age >= 65) {
  console.log("You get in for free!");
} else {
  console.log("That will be $10 please");
}

// Example 3:

let color = "lilac";

if (color === "purple" || color === "lilac" || color === "violet") {
  console.log("GREAT CHOICE!!");
}
