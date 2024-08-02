///////////////////// 1. Creating an array

//////////// Array of strings

let shoppingList = ['cereal', 'cheese', 'ice'];

//////////// Array of numbers

let lottoNums = [5,7,43,30,23];

//////////// Array of a collection of many types

let myCollection = [28, 'cool', null, true, NaN];

///////////////////// 2. Array Indices

//////////// Accessing elements in the array

////// Accessing existing elements

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors[0]; // 'red' - 1st element
colors[1]; // 'orange' - 2nd element
colors[3]; // 'green' - 4th element
colors[6]; // 'violet' - last element

////// Accessing the last element

//// With index

colors[6]; // 'violet'

//// With array length

colors[colors.length - 1]; // 'violet'

////// Accessing non-existent elements

//// Arrays

colors[7]; // undefined
colors[123]; // undefined

//// Similar to string

'string'.length; // 6
'string'[0]; // 's'
'string'[5]; // 'g'
'string'[6]; // undefined
'string'[123]; // undefined

///////////////////// 3. Modifying Arrays

let shoppingList1 = ['Cheddar Cheese', '2% Milk'];

//////////// Changing element

shoppingList1[1] = 'Whole Milk';
shoppingList1; // ['Cheddar Cheese', 'Whole Milk']

//////////// Adding element

//// Using index

shoppingList1[2] = 'Ice Cream';
shoppingList1; // ['Cheddar Cheese', 'Whole Milk', 'Ice Cream']

//// Using the length of the array

shoppingList1[shoppingList1.length] = 'tomatoes';
shoppingList1[shoppingList1.length] = 'potatoes';

///////////////////// 4. Push and Pop

//////////// Given the array

let topSongs = ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars'];

//////////// Push

topSongs.push('Fortunate Son'); // added to the array
// topSongs; // ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars', 'Fortunate Son']

//////////// Pop

topSongs.pop(); // 'Fortunate Son' - removed from the array
// topSongs.pop(); // 'Life On Mars'
// topSongs.pop(); // 'A Day In The Life'
// topSongs.pop(); // 'God Only Knows'
// topSongs.pop(); // 'First Time Ever I Saw Your Face' - Last element in the array
// topSongs.pop(); // undefined

///////////////////// 5. Unshift and Shift

//////////// Unshift

//////// Sample ['fork', 'knife', 'big platter']

//// Single element

let dishesToDo = ['big platter'];
dishesToDo.unshift('knife');
dishesToDo.unshift('fork');
// dishesToDo; // ['fork', 'knife', 'big platter']

//// Multiple element

let dishesToDo2 = ['big platter'];
dishesToDo2.unshift('fork', 'knife');
// dishesToDo2; // ['fork', 'knife', 'big platter']

//////////// Shift

dishesToDo.shift(); // 'fork'
dishesToDo.shift(); // 'knife'
dishesToDo.shift(); // 'big platter'
dishesToDo.shift(); // undefined

///////////////////// 6. Concat

//////////// Example 1

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
console.log(fruits.concat(veggies)); // ['apple', 'banana', 'asparagus', 'brussel sprouts']

//////////// Example 2

console.log(veggies.concat(fruits)); // ['asparagus', 'brussel sprouts', 'apple', 'banana']

//////////// Example 3

let meats = ['steak', 'chicken breast'];

let allFood = fruits.concat(veggies, meats);
console.log(allFood);

//////////// Original arrays

console.log(fruits); // ['apple', 'banana'];
console.log(veggies); // ['asparagus', 'brussel sprouts'];
console.log(meats); // ['steak', 'chicken breast'];

///////////////////// 7. Includes and IndexOf

//////////// Includes

//// Example 1:

let ingredients = ['water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter'];

ingredients.includes('fish'); // false
ingredients.includes('shrimp'); // true
ingredients.includes('corn'); // false

//// Example 2: fromIndex - specify where to start searching from

ingredients.includes('water', 3); // false
ingredients.includes('water'); // true
ingredients.includes('water', 0); // true

//// Example 3:

if (ingredients.includes('flour')) { // true
  console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//////////// indexOf

//// Example 1:

ingredients.indexOf('eel'); // 6
ingredients.indexOf('Maple Syrup'); // -1

//// Example 2: fromIndex - specify where to start searching from

ingredients.indexOf('cheese', 5); // -1
ingredients.indexOf('cheese', 2); // 3

///////////////////// 8. Reverse and Join

//////////// Reverse

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
// letters.reverse(); // ['R', 'E', 'S', 'P', 'E', 'C', 'T']

[1, true, 123, 'dsd'].reverse(); // ['dsd', 123, true, 1]

//////////// Join

letters.join(); // ['R', 'E', 'S', 'P', 'E', 'C', 'T']

letters.join(' & '); // 'T & C & E & P & S & E & R'

letters.reverse().join(' . '); // 'R . E . S . P . E . C . T'

letters.reverse().join(' - '); // 'T - C - E - P - S - E - R'

[12.3, 60, false].join(); // '12.3,60,false'

[12.3, 60, false].join(' # -> '); // '12.3 # -> 60 # -> false'

///////////////////// 9. Slice

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//////////// positive value slice forward

let swimmers = animals.slice(0, 3); // ['shark', 'salmon', 'whale']

let mammals = animals.slice(2, 4); // ['whale', 'bear']

let reptiles = animals.slice(4, 6); // ['lizard', 'tortoise']

// let reptiles = animals.slice(4); // ['lizard', 'tortoise']

//////////// negative value slice backward

let quadruped = animals.slice(-3); // ['bear', 'lizard', 'tortoise']
// let quadruped = animals.slice(-3, -1); // ['bear', 'lizard']

//////////// Trick for making a copy of an array

animals.slice(); // ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
// this does NOT impact the original array, it just makes a new array

let copy = animals.slice();
// now you have two versions of the array, 'copy' and 'animals'

///////////////////// 14. Working with Nested Arrays

////// Example 1: Single layer nested

const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
];

animalPairs[0][1]; // 'buck'
animalPairs[0][2]; // undefined
animalPairs[2][1]; // 'peacock'

////// Example 2: Double layers nested

const animalPairs1 = [
  ['doe', ['buck', 'stag']],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
];

animalPairs1[0][1][0]; // 'buck'
animalPairs1[0][0]; // 'doe'
animalPairs1[0][1][1]; // 'stag'
animalPairs1[0][1][2]; // undefined

////// Example 3: Multi-layers (3) nested

const animalPairs2 = [
  ['doe', ['buck', 'stag']],
  ['ewe', 'ram', ['eel', [['tiger', 'horse'], 'deer']]],
  ['peahen', 'peacock'],
  [undefined, [null, [false]]]
];

animalPairs2[1][2][1][0][1]; // 'horse'
animalPairs2[1][2][1][1];; // 'deer'
animalPairs2[3][1][0]; // null
animalPairs2[3][1][1][0]; // false