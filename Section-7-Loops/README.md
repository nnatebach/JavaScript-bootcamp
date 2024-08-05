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

## For Loops & Arrays

- Example 1:

    *Print out number of iterations and the scores of examScores*

    *examScores = [98, 77, 84, 91, 57, 66]*

    - *Sample*

        ```jsx
        // 0 98
        // 1 77
        // 2 84
        // 3 91
        // 4 57
        // 5 66
        ```

    - Code

        ```jsx
        const examScores = [98, 77, 84, 91, 57, 66];

        for (let i = 0; i < examScores.length; i++) {
          console.log(i, examScores[i]);
        }
        ```

    - Output:

        ![for_arrays_01.jpg](./images/for_arrays_01.jpg)


    - Question
        - How about the condition `let i = 0; i <= examScores.length; i++`  ?


            ![for_arrays_02.jpg](./images/for_arrays_02.jpg)

            - Reason:
                - **i** starts from 0
                - **i** will stop when **i** reaches **index 6**
                - There are only 6 elements in the array (last **index** is **5**)
            - Result: The last output will be `6  undefined` , there is no 6th index in the array *examScores.*

- Example 2:
    - Given array object

        ```jsx
        const myStudents = [
          {
            firstName: 'Zeus',
            grade: 86
          },
          {
            firstName: 'Artemis',
            grade: 97
          },
          {
            firstName: 'Hera',
            grade: 72
          },
          {
            firstName: 'Apollo',
            grade: 90
          },
        ]
        ```

    - *Sample output*

        ```jsx
        // Zeus    86
        // Artemis    97
        // Hera    72
        // Apollo    90
        ```

    - Code

        ```jsx
        for (let i = 0; i < myStudents.length; i++) {
            let student = myStudents[i];
            console.log(`${student.firstName} scored ${student.grade}`);
        }
        ```

    - Output:

        ![for_arrays_04.jpg](./images/for_arrays_04.jpg)

    - Question
        - How to print out the full array object?
            - Output sample:


                ![for_arrays_03.jpg](./images/for_arrays_03.jpg)

            - Code:

                ```jsx
                for (let i = 0; i < myStudents.length; i++) {
                    let student = myStudents[i];
                    console.log(student);
                }
                ```


- Example 3:

    *Print out every letter of this string in the backward orders*

    *In other word, print a reversed string*

    - Given the string

        ```jsx
        const word = 'stressed';
        ```

    - *Sample output*

        ```jsx
        desserts
        ```

    - Code

        ```jsx
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        console.log(reversedWord);
        ```

    - Output:

        ![for_arrays_05.jpg](./images/for_arrays_05.jpg)


    - Question
        - What if the condition starts by the length of the “word” with `let i = word.length`  ?

            The length of the string “stressed” is 8. The value of **word.length** is 8.

            ![for_arrays_06.jpg](./images/for_arrays_06.jpg)

            ![for_arrays_09.jpg](./images/for_arrays_09.jpg)

            The string starts at index 0, there are 8 characters, and stops at 7. The last index is 7.

            Therefore, the index for the last character is **word.length - 1** = 8 - 1 = 7

            **word.length** will tell the loop to start at index 8 instead of 7 which is incorrect.

            There is no value at index 8 so the program will output *undefined*

            ![for_arrays_07.jpg](./images/for_arrays_07.jpg)

            In order to remove the *undefined* value, you will need to start from index 7

            So the correct condition is

            ```jsx
            let i = word.length - 1
            ```

            The correct index for the last character of the string of 8 characters should be 7

            ![for_arrays_08.jpg](./images/for_arrays_08.jpg)

        - Calculating *total* outputs *NaN* in Example 2

            This code outputs “NaN”. Why?

            ```jsx
            let total = 0;

            for (let i = 0; i < myStudents.length; i++) {
              let student = myStudents.grade;
              total += student
            }
            console.log(total);
            ```

            Reason: *myStudents* is an array of objects NOT an array of elements.

            ```jsx
            const myStudents = [
              {
                firstName: 'Zeus',
                grade: 86
              },
              {
                firstName: 'Artemis',
                grade: 97
              },
              {
                firstName: 'Hera',
                grade: 72
              },
              {
                firstName: 'Apollo',
                grade: 90
              },
            ]
            ```

            Solution: If you want to get the *property* “firstName” or “grade”. You will need the counter *i* for the array *myStudents*.

            `let student = myStudents[i].grade;`