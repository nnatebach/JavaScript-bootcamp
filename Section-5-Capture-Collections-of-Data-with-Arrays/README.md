### CONTENT
#### 1. Creating Arrays
#### 2. Array Indices
#### 3. Modifying Arrays
#### 4. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">Push</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop">Pop</a>
#### 5. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">Shift</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift">Unshift</a>
#### 6. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat">Concat</a>
#### 7. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">Includes</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">IndexOf</a>
#### 8. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse">Reverse</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">Join</a>
#### 9. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Slice</a>
#### 10. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">Splice</a>
#### 11. Sorting (Part 1)
#### 12. Intro to Reference Types
#### 13. Using Const with Arrays
#### 14. Working with Nested Arrays

===============================================

#### 1. Creating Arrays

- Goals:
  - Work with Arrays
  - Write Object Literals
  - Understand Reference Types
  - Use common Array/Object methods

- Definition:
  Arrays are **ordered** collections of values
  - List of comments on IG post.
  - Collection of levels in a game.
  - Songs in a playlist

- Creating an array
    - Creating an empty array
        - Solution 1: Just square brackets

            ```
            []
            ```

        - Solution 2:

            ```
            new Array();
            ```

        - Similarity

            ```
            [1, 2, 3, 4, 5];
            new Array(1, 2, 3, 4, 5);
            ```

            <img src="./images/creating_array_05.jpg" alt="creating-array-04">

            <img src="./images/creating_array_06.jpg" alt="creating-array-05">

    - Array of strings

        ```
        let shoppingList = ['cereal', 'cheees', 'ice'];
        ```

        There are two ways to show this list in the console
        - console.log(shoppingList);
        - input 'shoppingList' in the console

            <img src="./images/creating_array_02.jpg" alt="creating-array-01">

    - Array of numbers

        ```
        let lottoNums = [5,7,43,30,23];
        ```

        <img src="./images/creating_array_03.jpg" alt="creating-array-02">

    - Array of a collection of many types

        ```
        let myCollection = [28, 'cool', null, true, NaN];
        ```

        <img src="./images/creating_array_04.jpg" alt="creating-array-04">

        Notes:
        - Usually the data within the array is relatively cohesive, the array of different data types above is for the demonstration purpose.
        - JavaScript allows a mix-up of different data types in the array which some other programming languages don't allow.




