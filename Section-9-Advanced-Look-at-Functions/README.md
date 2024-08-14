## CONTENT

### Function Scope

- Example 1

    ```jsx
    function lol () {
      let person = 'Tom';
      const age = 45;
      var color = 'teal';
    }
    console.log(person)
    ```

    - Output

        ![scope_01.jpg](./images/function_scope_01.jpg)


    - Reason: “person” is defined inside the function “lol” and canNOT be accessed from outside the function.

- Example 2:

    ```jsx
    function lol () {
      let person = 'Tom';
      const age = 45;
      var color = 'teal';
      console.log(age)
    }

    function changeColor() {
      let color = 'purple';
      const age = 19;
      console.log(age);
    }

    lol(); // 45
    changeColor(); // 19
    ```

    - Output

        ![scope_02.jpg](./images/function_scope_02.jpg)


    - Explanation
        - `const age = 45` and `const age = 19`  are the variables that you declared inside the functions and they are scoped to their functions which mean they are ONLY visible to the function where they are declared in.
        - You can call the functions but you can NOT access or manipulate those variables from anywhere outside the function.

- Example 3:

    ```jsx
    let bird = 'mandarin duck'

    function birdWatch() {
      let bird = 'golden pleasant';
      console.log(bird)
    }

    birdWatch() // golden pleasant
    console.log(bird) // mandarin duck
    ```

    - Output

    ![scope_03.jpg](./images/function_scope_03.jpg)

    - Reason:
        - `let bird = ‘golden pleasant’` is declared within the function scope of *birdWatch()*, you can call the function but you can NOT manipulate the variable from outside the scope.
        - `let bird = ‘mandarin duck’` is declared outside the function scope, therefore, it can be accessed from anywhere outside the function.

    - Illustration

        ![scope_04.jpg](./images/function_scope_04.jpg)

### Block Scope

#### Illustration

![block_scope_01.jpg](./images/block_scope_01.jpg)

- Examples
    - Example 1:

        ```jsx
        if (true) {
          let animal = 'eel';
        }
        console.log(animal);
        ```

        ![block_scope_02.jpg](./images/block_scope_02.jpg)

        - Reason:
            - “animal” is scoped inside the condition “if”
            - “animal” is scoped inside the block of code

                ```jsx
                if (true) {
                  // code
                }
                ```


        > **Note**: *Object literal* is very different from a *block* of code even though they are both scoped inside the curly braces

        - object literal
        {
            a: 1;
            b: 2
        }

        - block of code
        if (true) {
            // code
        }
        while, for, for…of are also blocks
        >

    - Example 2:

        ```jsx
        if (true) {
          const animal = 'eel';
        }
        console.log(animal);
        ```

        ![block_scope_02.jpg](./images/block_scope_02%201.jpg)

        - Reason:

            Same with in Example 1, “animal” is declared inside the conditional and ONLY visible inside the block. You don’t have access to it outside the block.


    - Example 3:

        ```jsx
        if (true) {
          var animal = 'eel';
          console.log(animal)
        }
        console.log(animal);
        ```

        ![block_scope_03.jpg](./images/block_scope_03.jpg)

        “var” is declared inside the conditional but it is NOT scoped only to that block.


    <aside>
    💡 “var” has different scoping rules than “let” and “const”, there is NO block scope for “var”.

    </aside>

    - Example 4:

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
        for (var i = 0; i < animals.length; i++) {
          console.log(i, animals[i])
        }
        console.log(i)
        ```

        ![block_scope_04.jpg](./images/block_scope_04.jpg)

        Even after the loop finishes with printing **i** out from `console.log(i, animals[i])` , the **i** outside the loop is printed, this means that you have the access to **i** even outside of the block of code.


    - Example 5:

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
        var i = 10;
        for (var i = 0; i < animals.length; i++) {
          console.log(i, animals[i])
        }
        console.log(i)
        ```

        ![block_scope_05.jpg](./images/block_scope_05.jpg)


    Question:

    - Why “var i = 10” is not printed out?

        The `var` keyword has *function* scope, **not** block scope which means that the variable `i` declared with `var` inside the `for` loop is the same variable as the `i` declared outside the loop.

        **for** loop explanation:

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
        var i = 10;
        for (var i = 0; i < animals.length; i++) {
          console.log(i, animals[i])
        }
        console.log(i)
        ```

        - Inside the `for` loop, `var i = 0` re-declares the same `i` variable. The `var` keyword doesn't create a new variable scoped to the loop; it reuses the same `i` variable declared earlier.
        - The `var i = 0` inside the `for` loop overwrites the initial `i = 10`, and since `i` is the same variable, the **original** value of `10` is **lost** when the loop starts. After the loop finishes, `i` has the value from the last iteration of the loop, which is `3` .

        If you want to keep “**i = 10**” you could

        - use a different variable name for the loop counter
        - use `let` or `const` for block-scoped variables

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
        var i = 10;
        for (var i = 0; i < animals.length; i++) {
          console.log(i, animals[i])
        }
        console.log(i)
        ```

        ![block_scope_06.jpg](./images/block_scope_06.jpg)

        - Question: 10 is now printed out. Why is that?
        - Reason: The **i** that you declared with **let** is scoped to the **for** loop block so it does NOT exist in the `console.log(i)`  at the bottom.

    - Example 6: Same with Example 5 but you declare both **i** with **let**

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
        let i = 10;
        for (let i = 0; i < animals.length; i++) {
          console.log(i, animals[i])
        }
        console.log(i)
        ```

        ![block_scope_09.jpg](./images/block_scope_09.jpg)


    - There is the first variable **i** outside the loop and then the second variable **i** inside the loop yet the code does NOT break nor is the value overwritten, why is that?
        - Even though there are two of the same variable **i** yet they exist in different scopes.
        - The value of the first variable **i** is not overwritten like in Example 5 when the variable **i** is declared with **var** because **let** is block scoped but **var** is function scoped.

    - Example 7:

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];

        for (let i = 0; i < animals.length; i++) {
          console.log(i, animals[i]); // Will print 0, 1, 2 and corresponding animals
        }

        console.log(i); // ReferenceError: i is not defined
        ```

        ![block_scope_07.jpg](./images/block_scope_07.jpg)

        - What is the reason for error “*i is not defined*” for the `console.log(i)`  at the bottom?

            **i** is declared with **let** inside the **for** loop so it is ONLY scoped to that block code and it does NOT exist for the `console.log(i)`  at the bottom.


    - Example 8:

        ```jsx
        let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];

        for (const i = 0; i < animals.length; i++) {
          console.log(i, animals[i]);
        }

        console.log(i);
        ```

        ![block_scope_08.jpg](./images/block_scope_08.jpg)

        Question:

        - Why does the code break?

            In JavaScript, you cannot reassign a new value to a variable declared with `const`.

            In the code above, you declare **i** as a **const** variable in the loop and you initialize it with 0, then you increment it by 1 with **i++** and so it prints out “0   ‘grizzly bear’” then it breaks.


    - Example 9

        Write a function that doubles every value of another array that is passed in.

        Note: Do NOT update the original array

        - Sample

            ```jsx
            Original array: [1, 3, 5]
            Doubled array: [2, 6, 10]
            ```


        - Code
            - Lesson Solution (correct)

                ```jsx
                function doubleArray (arr) {
                  const result = []
                  for (let i of arr) {
                    let num = i * 2
                    result.push(num)
                  }
                  return result
                }
                doubleArray ([1, 3, 5]) // [2, 4, 6]
                ```

                - Code

                    ![block_scope_10.jpg](./images/block_scope_10.jpg)


            - Personal solution (need improvement)

                ```jsx
                const array = [1, 3, 5];

                function doubleArray() {
                  for (let i of array) {
                    console.log(i)
                    const doubled = []
                    doubled.push(i * 2)
                    console.log(doubled)
                  }
                }
                doubleArray()
                ```

                - Code

                    ![block_scope_11.jpg](./images/block_scope_11.jpg)


        - Question 1
        This code

            ```jsx
            function doubleArray (arr) {
                const result = [];

                let num;
                for (let i of arr) {
                    console.log(i)
                    num = i * 2
                }
                return result.push(num)
            }
            ```

            prints out the following. Why is that?

            ![block_scope_12.jpg](./images/block_scope_12.jpg)

            - Reason:
                - **`console.log(i)`**:

                    This line prints each element of the array `[1, 2, 3]`, so you get `1, 2, 3` in the console.

                - **`return result.push(num)`**:

                    Pushes the last value of 'num' into 'result' and returns the length of the array

                    - After the loop, `num` contains the last value calculated, which is `3 * 2 = 6`.
                    - The `result.push(num)` line adds `6` to the `result` array and returns the length of the array, which is `1` (since `push()` returns the new length of the array).
                    - The function returns this length, which is why `1` is the final output.
            - Issues:
                - **Only Last Element is Added**:
                    - You are only pushing the last calculated `num` into the `result` array, which means only the last element of the array is doubled and added.
                - **Incorrect Return Value**:
                    - The function returns the length of the array (`1` in this case), not the array itself.

        - Question 2:

            For this code

            ```jsx
            function doubleArray (arr) {
              const result = []
              for (let i of arr) {
                let num = i * 2
                result.push(num)
              }
              return result
            }
            doubleArray ([1, 3, 5])
            ```

            If you were to console.log(num) outside of the **for** loop, what would happen?

            Modified code

            ```jsx
            function doubleArray (arr) {
              const result = []
              for (let i of arr) {
                let num = i * 2
                result.push(num)
              }
              console.log(num)
              return result
            }
            doubleArray ([1, 3, 5])
            ```

            - Output: `Uncaught ReferenceError: num is not defined`
            - Reason: **let** is block scoped
            - Solution: Change **let** to **var**

                ```jsx
                function doubleArray (arr) {
                  const result = []
                  for (let i of arr) {
                    var num = i * 2
                    result.push(num)
                  }
                  console.log(num)
                  return result
                }
                doubleArray ([1, 3, 5])
                ```

                ![block_scope_14.jpg](./images/block_scope_14.jpg)

                - What is the number 10?

                    10 is the value of 5 * 2 and 5 is the last element of the passed in array.


<aside>
💡 IMPORTANT NOTE

</aside>

![block_scope_15.jpg](./images/block_scope_15.jpg)

Further reading: [**What's New In DevTools (Chrome 80)**](https://developer.chrome.com/blog/new-in-devtools-80/)