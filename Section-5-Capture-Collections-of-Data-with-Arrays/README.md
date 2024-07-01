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

#### 2. Array Indices

- Arrays are indexed

    <img src="./images/array_indices_01.jpg" alt="array-indices-01">

- Example:

    ```
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    ```

    <img src="./images/array_indices_02.jpg" alt="array-indices-02">

    ```
    colors[0]; // 'red' - 1st element
    colors[1]; // 'orange' - 2nd element
    colors[3]; // 'green' - 4th element
    colors[6]; // 'violet' - last element
    ```

    <img src="./images/array_indices_03.jpg" alt="array-indices-03">

- Print the value of the last element in the array
    - Solution 1: Using the index

        The length of the array is 7

        ```
        colors.length; // 7
        ```

        This means there are 7 elements in the array.<br>
        However, if you want to print out the value of the 7th element (last element) you will have to print out the value of the 6th index.

        ```
        colors[6]; // violet
        ```

        Reason: The array starts at index 0, the first element of the array is at index 0, therefore if there are 7 elements in the array then the last element is at index 6.<br>

    - Solution 2: Using the array length

        As you already know, the length of the array is 7.<br>
        If you subtract that number by 1 then you will have the index of the last element in the array

        ```
        colors[colors.length - 1]; // violet
        ```

        <img src="./images/array_indices_04.jpg" alt="array-indices-04">

    - Note: If you try to access any non-existed element with a non-existed index in the array, the returned value is going to be "undefined".

        ```
        colors[7]; // undefined
        colors[123]; // undefined
        ```

        <img src="./images/array_indices_05.jpg" alt="array-indices-05">

- Strings

    Similar to arrays, strings are also indexed.<br>
    If you try to print out the value of a non-existed element, the returned value will be "undefined".

    ```
    'string'.length; // 6
    'string'[0]; // 's'
    'string'[5]; // 'g'
    'string'[6]; // undefined
    'string'[123]; // undefined
    ```

    <img src="./images/array_indices_06.jpg" alt="array-indices-06">

#### 3. Modifying Arrays

<img src="./images/modifying_arrays_01.jpg" alt="modifying-arrays-01">

- **Strings** are **immutable**

    <img src="./images/modifying_arrays_02.jpg" alt="modifying-arrays-02">

- **Arrays** are **mutable**

    - Example:
    Given the array:

        ```
        let shoppingList = ['Cheddar Cheese', '2% Milk'];
        ```

        <img src="./images/modifying_arrays_03.jpg" alt="modifying-arrays-03">

      **Note:** The array name 'shoppingList' in the screenshot and the array name 'shoppingList1' for the examples in this lesson are the same thing. Since 'shoppingList' was already declared in the examples in the last lessons, the code above, so you will need a different name for the array in this lesson.

    - Change '2% Milk' to 'Whole Milk'

        ```
        shoppingList[1] = 'Whole Milk'
        ```

        <img src="./images/modifying_arrays_04.jpg" alt="modifying-arrays-04">

    - Adding element to the end of the array
        - Using index
            - The current length of the array is 2, the last index is 1.
            - You can add more element to the array using index 2.

                ```
                shoppingList[2] = 'Ice Cream';
                ```

                <img src="./images/modifying_arrays_05.jpg" alt="modifying-arrays-05">

                Note: This is only applicable if you know the number of elements in the array, therefore it might be inconvenient at times.<br>
                In case if you have no idea how many elements are there in the array, you will need to add the element using the length of the array.

          - Using array length

              For example you want to add 'tomatoes' to the end of the array 'shoppingList' but you don't know how many elements there are in the array:

              ```
              shoppingList[shoppingList.length] = 'tomatoes';
              ```

              <img src="./images/modifying_arrays_06.jpg" alt="modifying-arrays-06">

#### 4. Push and Pop

- push and pop are for adding and removing array elements.

- Given the array

    ```
    let topSongs = ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars'];
    ```

    This is the array of 4 elements.

    You can also check for the length of the array with "length"

    ```
    topSongs.length;
    ```

<img src="./images/push_pop_01.jpg" alt="push-pop-01">

- Push: Add the element to the end of the array.

    ```
    topSongs.push('Fortunate Son');
    ```

    - After adding 'Fortunate Son' to the array you can see that the console logs a number below the "push" method

    <img src="./images/push_pop_02.jpg" alt="push-pop-02">

    - That number is the new length of the array after you added the new elements to it.

    <img src="./images/push_pop_03.jpg" alt="push-pop-03">

    **Review:** Arrays are mutable which means it CAN be changed.

    - The number is called the "return value", the "return value" and "return function" will be talked more in the future lessons.
    - **Notice:**
        - You can add multiple elements to the array all at once.
        - The orders of the array elements (fork, knife) will be exactly the same with the orders you added them.

        <img src="./images/push_pop_04.jpg" alt="push-pop-06">

- Pop: Remove the element at the end of the array.

    This is the array you are having, the current length of the array is 5

    <img src="./images/push_pop_05.jpg" alt="push-pop-05">

    "Pop" will remove the last element in the array (the element at the end of the array).

    ```
    topSongs.pop();
    ```

    The element to be removed will be shown on the line below ```topSongs.pop();``` and when you input the array name you will see the current length and elements in the array

    <img src="./images/push_pop_06.jpg" alt="push-pop-06">

- The differences between "push" and "pop"
    - **push** is for *adding*, **pop** is for *removing* an element at the **end of the array**.
    - You will have to *specify* the element you want to **push** into the array (obviously!) while you can just pop an element out of the array without specifying the element. As you pop all the elements out of the array, you are left with "undefined" value.

    <img src="./images/push_pop_07.jpg" alt="push-pop-07">

#### 5. Unshift and Shift

- Similar to push and pop, **unshift** and **shift** are for adding and removing elements to the array
    - **unshift** is for **adding** element(s) to the *beginning* of the array. You will need to specify what you want to add to the array (same with push).
    - **shift** is for **removing** element(s) from the *beginning* of the array. You will NOT need to specify what you want to remove from the array (same with pop), shift will always start from the first element in the array.

- Unshift
    - Adding single element to the array: Notice that the element will be added to the BEGINNING of the array.

        ```
        let dishesToDo = ['big platter'];
        dishesToDo.unshift('large plate');
        dishesToDo.unshift('small platter');
        dishesToDo; // ['small plate', 'large plate', 'big platter'];
        ```

        <img src="./images/unshift_shift_01.jpg" alt="unshift-shift-01">

    - Similar to "push", you can add *multiple elements* to the array with **unshift**
        Pay attention that because 'unshift' will ONLY add element to the BEGINNING of the array, therefore the order when you add single versus multiple elements to the array will be backward with how the elements are added to the array.

        <img src="./images/unshift_shift_02.jpg" alt="unshift-shift-02">

        <img src="./images/unshift_shift_03.jpg" alt="unshift-shift-03">

- Shift

    - Similar to "pop", **shift** is for removing element BUT at the BEGINNING of the array.
    - When you remove all the elements in the array you will be left with "undefined" values.

    <img src="./images/unshift_shift_04.jpg" alt="unshift-shift-04">