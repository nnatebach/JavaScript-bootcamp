## Section 8: Writing Usable Code with Functions
### Dice Roll function

app.js

```jsx
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled ${roll}`);
}
```

Goal: Generating numbers from 1 to 6

Methods:

- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
    - returns a floating-point, pseudo-random number that's **greater than or equal to** 0 and less than 1
    - you can then scale to your desired range

    Math.random() * 6

    ![./images/dice_roll_01.jpg](Dice%20Roll%20function%205679caabeb7044d8af3ad23a5db0282a/dice_roll_01.jpg)

- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    - rounds down and returns the largest integer less than or equal to a given number ⇒ remove the decimal part.
    - Math.floor(Math.random() * 6)

        ![./images/dice_roll_02.jpg](Dice%20Roll%20function%205679caabeb7044d8af3ad23a5db0282a/dice_roll_02.jpg)

    - Math.floor(Math.random() * 6) + 1 ⇒ Why adding 1?

        Add “1” into “Math.floor()” because you want the values from 1 to 6 (there is no zero value in the dice)


    ![./images/dice_roll_03.jpg](Dice%20Roll%20function%205679caabeb7044d8af3ad23a5db0282a/dice_roll_03.jpg)

### Arguments (inputs)

*Zero argument - the code runs the same every time*

```jsx
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled ${roll}`);
}
rollDice(); // the code runs once
```

![arguments_01.jpg](Arguments%20(inputs)%20c43e8f60005a41c3afc4c2f12721c013/arguments_01.jpg)

*Calling "rollDice" multiple times by repeating the function*

```jsx
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
```

![arguments_02.jpg](Arguments%20(inputs)%20c43e8f60005a41c3afc4c2f12721c013/arguments_02.jpg)

Calling "rollDice" multiple times by using argument

```jsx
function throwDice (numbOfRoll) { // 1 argument
  // call "rollDice" 6 times
  for (let i = 0; i < numbOfRoll; i++) {
    rollDice();
  }
}
throwDice(6); // the code runs 6 times
```

![arguments_03.jpg](Arguments%20(inputs)%20c43e8f60005a41c3afc4c2f12721c013/arguments_03.jpg)

### Return Statement

> [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) statement ends function execution and return the values when you call them
>

- “console.log” prints out the value from the function but does NOT store those values

```jsx
function add (x, y) {
  console.log(x + y);
}

const sum = add (10, 16); // 26
sum; // undefined
```

- When you call “sum”, it prints out “undefined” instead of a value. Why?

    The result of function “add” is evaluated but it is NOT stored anywhere, therefore you canNOT call it later.


![return_statement_01.jpg](Return%20Statement%206e91bf3d60aa4aabb3b6ccb07bc627a7/return_statement_01.jpg)

- “return” will store the value of the function after being evaluated, therefore you can call it after that.

```jsx
function add (x, y) {
  **return** x + y;
}

const sum = add (10, 16); // 26
sum; // 26
```

![return_statement_02.jpg](Return%20Statement%206e91bf3d60aa4aabb3b6ccb07bc627a7/return_statement_02.jpg)

### Function Challenge 1: passwordValidator

- isValidPassword function
    - accepts 2 **arguments**: username and password
    - Password requirements
        - at least 8 characters
        - NO spaces
        - CanNOT contain the username
    - returns true if all requirements are met, otherwise return false

- Examples
    - isValidPassword(’89Fjj1nms’, ‘dogLuvr’); // true
    - isValidPassword(’dogLuvr123!’, ‘dogLuvr’); // false
    - isValidPassword(’hello1’, ‘dogLuvr’); // false

```jsx
function isPasswordValid(password, username) {
	if (password < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}
isPasswordValid('emmalin123', 'emmalin') // false
isPasswordValid('emmalin123', 'isCool') // true
```

- isPasswordValid('emmalin123', 'emmalin') // false

![password_validator_01.jpg](Function%20Challenge%201%20passwordValidator%207bd67d0a69d74554bce66231d6770c84/password_validator_01.jpg)

- isPasswordValid('emmalin123', 'isCool') // true

![password_validator_02.jpg](Function%20Challenge%201%20passwordValidator%207bd67d0a69d74554bce66231d6770c84/password_validator_02.jpg)

Explanation: Condition for “password” with “indexOf()”

- if (password.indexOf(' ') !== -1) ⇒ returns false. Why?

    If there is a space in the password ⇒ return false

- if (password.indexOf(username) !== -1) ⇒ return false. Why?

    if the password contains the username ⇒ return false


“indexOf()” is available for both [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) and [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

if the indexOf() of an element is something other than -1, the element exists in the array (or string).

Condition variation 2

```jsx
function isPasswordValid(password, username) {
	if (password < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}
// isValidPassword('coolYeah123', 'coolYeah'); // false
// isValidPassword('coolYeah123', 'haha'); // true
```

Condition variation 3

```jsx
function isValidPassword (password, username) {
  const tooShort = password < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if ( tooShort || hasSpace || tooSimilar ) {
    return false;
  }
  return true;
}
// isValidPassword('hoyota123', 'hoyota') // false
// isValidPassword('hoyota123', 'hotayako') // true
```

Condition variation 4 - inverted condition

```jsx
function isValidPassword (password, username) {
  const tooShort = password < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if ( !tooShort && !hasSpace && !tooSimilar ) {
    return true;
  }
  return false;
}
// isValidPassword('ahyahta123', 'ahyahta') // false
// isValidPassword('ahyahta123', 'kosapa') // true
```

Condition variation 5

```jsx
function isValidPassword (password, username) {
  const tooShort = password < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  return !tooShort && !hasSpace && !tooSimilar;
}
isValidPassword('yamaha123', 'yamaha') // false
isValidPassword('yamaha123', 'kobiyama') // true
```

### Function Challenge 2: Average

- Write a function to find the average value in an array of numbers. What is the approach?
    - loop over each num
    - add them together
    - divide by number of nums

Examples:

- avg([0, 50]) // 25
- avg([75, 76, 80, 95, 100]) // 85.2

```jsx
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
```

Notes:

- The argument is “arr”. Why not “num”?
    - You are trying to find the average value in an **array**
    - You are looping over the elements in an **array**
- Declare variable “total” and initialize it with “0”. Why do you need this variable?
    - the calculation for the average value is average = (sum of all numbers) / total elements in the array

        ![average_01.jpg](Function%20Challenge%202%20Average%20f96d346cd8c449d8a9f8749d79b68f56/average_01.jpg)

    - You need a variable to store and to update the addition of the numbers in the array (**total**) so that later on you can divide that sum number by the number of elements in the array (**arr.length**) for the average value.
- If I were to declare then return “res”. What would the code have been?

    ```jsx
    const res = total / arr.length;
    return res;
    ```

### Function Challenge 3: Pangram

> A Pangram is a sentence that contains every letter of the alphabet
>

Example: “The quick brown fox jumps over the lazy dog”

- Write a function called isPangram. What should it check for?
    - Check if a given sentence contains every letter of the alphabet
    - Ignore string casing (turn all cases to lower case)

- What are the validations?
    - True: “The five boxing wizards jump quickly”. Why? This sentence contains all the letters in the alphabet
    - False: “The five boxing wizards jump quick”. Why? Two letters “l” and “y” are missing!

```jsx
function isPangram (sentence) {
	// string casing
	let lowerCased = sentence.toLowerCase();

	// loop over the letters in the sentence
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		// check whether a sentence is a Pangram
		if (lowerCased.indexOf(char === -1)) {
			return false;
		}
	}
	return true;
}
isPangram(“The quick brown fox jumps over the lazy dog”); // true
```

Notes:

- Loop over the letters in the sentence
    - Use loop “for…of…”
    - The way to loop over the elements in a long string

    ```jsx
    for (let char of 'abcdefghijklmnopqrstuvwxyz')
    ```

- String casing. Why do you need it?
    - You are looping over a string of LOWER case alphabet letters, even if there is only one letter in your sentence is UPPER case (letter “G” in the image), “isPangram” will return false in spite of the fact that your sentence contains all the alphabetical letters.

    ![pangrams_01.jpg](Function%20Challenge%203%20Pangram%2063f127c05e1641d78a4f46bac4112b89/pangrams_01.jpg)

    - It is very important to equalize all the string case for the correct checking result

    ![pangrams_02.jpg](Function%20Challenge%203%20Pangram%2063f127c05e1641d78a4f46bac4112b89/pangrams_02.jpg)

- If you were to use “[**includes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)” for the condition. What would be the changes in the code?

    ![pangrams_03.jpg](Function%20Challenge%203%20Pangram%2063f127c05e1641d78a4f46bac4112b89/pangrams_03.jpg)

    - You would not need to check “indexOf” with “-1”
    - The “return” statements would be inverted.