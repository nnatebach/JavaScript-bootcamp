## Intro

- Loops are for
    - Repeated things
        - Print “Hello” 10 times
        - Sum numbers in an array
    - Different types of loops
        - for
        - while
        - for.…of
        - for….in

- Example 1: Reddit posts
    - User interface

        ![loops_01.jpg](./images/loops_01.jpg)


    - The data structure of the array of posts behind it is simplified to be something like this

        ```jsx
        const posts = [
          {
            title: 'cool video',
            link: 'http://www.blah.com',
            username: 'sillyGoose98'
          },
          {
            title: 'cool video',
            link: 'http://www.blah.com',
            username: 'sillyGoose98'
          },
          {
            title: 'cool video',
            link: 'http://www.blah.com',
            username: 'sillyGoose98'
          },
          {
            title: 'cool video',
            link: 'http://www.blah.com',
            username: 'sillyGoose98'
          },
        ]
        ```


- Example 2: The game [2048](https://play2048.co/)
    - User interface


        ![loops_02.jpg](./images/loops_02.jpg)


    - The logic of the loop:
        - If there are still playable moves, if the board is not jammed up and locked then let the user keeps playing.
        - The loop keeps running some logic until a condition is met (when there is no more of available moved).


## for loop

Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

- Syntax:

    ```jsx
    for (initialization; condition; afterthought)
      statement
    ```


- Examples:
    - Example 1:
        - Start from 1
        - Print 10 times
        - Increment (loop) by 1 number at a time

        ```jsx
        for (let i = 1; i <= 10; i++)
        ```

        ![for_loops_01.jpg](./images/for_loops_01.jpg)

    - Example 2:
        - Start from 1
        - Print 10 times
        - Increment (loop) by 3 numbers at a time

        ![for_loops_02.jpg](./images/for_loops_02.jpg)


    - Example 3: Print “HELLO WORLD” 10 times

        ```jsx
        for (let i = 1; i <= 10; i++) {
            console.log("HELLO WORLD:", i)
        }
        ```

        ![for_loops_03.jpg](./images/for_loops_03.jpg)


- Practices:
    - Practice 1:

        Generate **the first 20** perfect squares

        - Sample:

            ```jsx
            // 1 = 1 * 1
            // 4 = 2 * 2
            // 9 = 3 * 3
            // 16 = 4 * 4
            // 25 = 5 * 5
            // 36 = 6 * 6
            // 49 = 7 * 7
            // 64 = 8 * 8
            // 81 = 9 * 9
            ```


        - Code

            ```jsx
            for (let num = 1; num <= 20; num++) {
              console.log(`${num} x ${num} = ${num * num} `);
            }
            ```


        - Output:

            ![for_loops_04.jpg](./images/for_loops_04.jpg)


    - Practice 2:

        Start i at 50

        Subtract 10 each iteration

        Keep going as long as i ≥ 0

        - Code

            ```jsx
            for (let i = 50; i >= 0; i -= 10) {
              console.log(i);
            }
            ```


        - Output

        ![for_loops_05.jpg](./images/for_loops_05.jpg)


- Questions
    - Why this loop
    for (let i = 1; i <= 9; i++) {
      console.log( i *= i );
    }
    gives 1, 4, 25.
        - Reason: `i++`  is intended to increment `i` by 1, but it is overridden by `i *= i`.
        - Explanations:
            - First iteration:
                - **i** is 1
                - 1 <= 9 is **true**
                - `i *= i`  is 1 x 1 = 1 ⇒ console.log outputs **1**
                - After logging, `i` is incremented by 1 due to `i++`, so `i` becomes 2.
            - Second iteration:
                - **i** is 2
                - 2 <= 9 is **true**
                - `i *= i`  is 2 x 2 = 4 ⇒ console.log outputs **4**
                - After logging, `i` is incremented by 1 due to `i++`, so `i` becomes 5.
            - Third iteration:
                - **i** is 5
                - 5 <= 9 is **true**
                - `i *= i`  is 5 x 5 = 25 ⇒ console.log outputs **25**
                - After logging, `i` is incremented by 1 due to `i++`, so `i` becomes 26.
            - Fourth iteration:
                - **i** is 26
                - 26 <= 9 is **false**
                - Loop exits
        - Outputs: 1, 4, 25
    - Why this loop runs infinitely?
    for (let i = 50; i >= 0; i - 10) {
      console.log(i);
    }
        - Reason: The expression `i - 10`  is not actually modifying `i`. Instead, it simply evaluates to `i - 10`  without assigning the result back to `i` . Since `i`  will forever remains as 50 without being updated, this makes the condition  `i >= 0`  always true so the loop runs infinitely.
        - Solution: You need `i -= 10`  to update `i`  correctly