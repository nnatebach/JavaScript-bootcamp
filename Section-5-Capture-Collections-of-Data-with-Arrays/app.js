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