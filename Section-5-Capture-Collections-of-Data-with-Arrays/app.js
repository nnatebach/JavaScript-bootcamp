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