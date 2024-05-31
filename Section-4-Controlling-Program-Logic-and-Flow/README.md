### Section 4: Controlling Program Logic and Flow
#### 1. Making Decisions in JS
#### 2. Comparison Operators
#### 3. Double Equals (==)

=============================

#### 1. Making Decisions in JS
- Goals:
    - Understand Comparison Operators
    - Write Conditionals
    - Work with Boolean Operators

- Examples:
    - <a href="https://www.chess.com/play/computer">Chess</a>
    
        <img src="./images/decisions_01.jpg" alt="decisions_01">

    - <a href="https://www.netflix.com/vn-en/">Netflix Home page</a>
        - If the user is *signed in*, the page will show their main home page.
        - If the user is *not signed in* then the page will show advertisements and promotions.

        <img src="./images/decisions_02.jpg" alt="decisions_02">

    - <a href="https://www.chess.com/play/computer">Sign in form</a>

        <img src="./images/decisions_03.jpg" alt="decisions_03">

        If you try to submit the form without specifying any email or password, the logic that checks for email and password simply will not submit the form and so the form is not submitted.

#### 2. Comparison Operators

```
> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to
== // equality
!= // not equal
=== // strict equality
!== // strict non-equality
```

- Focus on these for now

    ```
    > // greater than
    < // less than
    >= // greater than or equal to
    <= // less than or equal to
    ```

- These are optional

    ```
    == // equality
    != // not equal
    === // strict equality
    !== // strict non-equality
    ```

- Use operators to return Boolean

    ```
    10 > 1; // true
    0.2 < 0.3; // true
    -10 < 0; // true
    50.0 < 5; // false
    0.5 <= 0.5; // true
    99 >= 4; // true
    99 >= 99; // true
    'a' < 'b'; // true
    'A' > 'a'; // false
    ```

    **Notes:** 
    - You can compare strings, even though it is not common. It is unpredictable when dealing with case (upper/lower), special characters, and accents!
    - All uppercase letters are less than any lowercase letters.

        <img src="./images/comparison_01.jpg" alt="comparison_01">

    - Further reading: How it works behind the scene is that every character in JavaScript, when it's in a string, has a <a href="https://en.wikipedia.org/wiki/List_of_Unicode_characters">Unicode</a> representation.

        Example:

        ```
        '#' < '$'; // true
        ```
        Reason:
        
        <img src="./images/comparison_02.jpg" alt="comparison_02">

#### 3. Double Equals (==)

Addressing the equal(ity) signs

```
== // equality
!= // not equal
=== // strict equality
!== // strict non-equality
```

- Double (==) vs. Triple (===) signs
    - == (double equals):
        - Checks for equality of *value*, but **not** equality of *type*.
        - It *coerces* (converts) both values to the same type and then *compares* them directly *as one type*.
        - This can lead to some unexpected results!
        - Examples:
            - Normal cases

                ```
                4 == 4; // true
                'a' == 'a'; // true
                false == false; // true
                ```

            - Odd/Unexpected cases

                ```
                5 == 5; // true
                'b' == 'c'; // false
                7 == '7'; // true
                0 == ''; // true
                true == false; // false
                0 == false; // true
                null == undefined; // true
                ```

                **Note:**
                - ```7 == '7'``` are actually not equal.
                These are different values and they are completely different in terms of JavaScript, yet double equal (==) will convert them to the same type and decides that they have the same value.
                - Compare 0 (zero) to a string (to be explained more later)

                    ```
                    0 == ''; // true
                    ```
                    ```
                    0 == 's'; // false
                    ```

                - Compare 0 (zero) to a Boolean (to be explained more later)

                    ```
                    0 == true; // false
                    ```

                    ```
                    0 == false; // true
                    ```

                - Compare primitives

                    ```
                    null == undefined; // true
                    ```
                    These are two distinct values, two separate primitives but they are considered equal when we use two equal signs.