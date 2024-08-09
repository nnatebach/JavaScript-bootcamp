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