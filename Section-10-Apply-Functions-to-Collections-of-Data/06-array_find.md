### 06. Array.find

> returns the value of the **first element** in the array that satisfies the provided testing function
>

- find
    - An array method that expects a callback.
    - It finds an element, it retrieves an element from an array based off of a function that we pass in.
    - returns true or false
    - each time **find** will call the function with one of the elements in the array, if the function returns true then it’s done.
    - ONLY return ONE matched value even if there are ten matches in the given array. It stops after it finds the very first one.

- Example 1

    Given the array of strings **movies**

    ```jsx
    let movies = [
        "The Fantastic Mr. Fox",
        "Mr. and Mrs. Smith",
        "Mrs. Doubtfire",
        "Mr. Deeds"
    ]
    ```

    Write a program that prints out the **first string** that includes “**Mrs.**”

    - Code (arrow function)

        ```jsx
        const movie = movies.find(movie => {
          return movie.includes("Mrs.")
        })
        ```

    - Code (function expression)

        ```jsx
        const movie = movies.find(function (movie) {
            return movie.includes("Mrs.")
        })
        ```


    - Output:

        ```jsx
        'Mr. and Mrs. Smith'
        ```


- Example 2:

    Write a program that prints out the string in which “**Mrs**.” starts at the **beginning** of the string

    - Code (arrow function)

        ```jsx
        const movie = movies.find(movie => {
          return movie.indexOf("Mrs.") === 0
        })
        ```


    - Code (function expression)

        ```jsx
        const movie = movies.find(function (movie) {
          return movie.indexOf("Mrs.") === 0
        })
        ```


    - Code (one-liner)

        ```jsx
        const movie = movies.find(m => m.indexOf("Mrs.") === 0)
        ```


    - Output

        ```jsx
        'Mrs. Doubtfire'
        ```


- Example 3:

    Given the array of objects

    ```jsx
    const books = [
      {
        title: 'Good Omens',
        author: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
      },
      {
        title: 'Bone: The Complete Edition',
        author: ['Jeff Smith'],
        rating: 4.42
      },
      {
        title: 'American Gods',
        author: ['Neil Gaiman'],
        rating: 4.11
      },
      {
        title: 'A Gentleman in Moscow',
        author: ['Amor Towles'],
        rating: 4.36
      }
    ]
    ```

    Get all the titles for the books with rating greater than 4.3

    - Code (answer from the course)

        ```jsx
        const book = books.find(book => {
            return book.rating > 4.3
        })
        ```

        Output:

        ![Array_find_01.jpg](./images/Array_find_01.jpg)


    - Code (one liner)

        ```jsx
        const book = books.find(b => b.rating > 4.3)
        ```


    - Code (my code)

        ```jsx
        const book = books.find(book => {
            if (book.rating > 4.3) {
                return book.title
            }
        })
        ```

        Output:


    ![Array_find_01.jpg](./images/Array_find_01.jpg)

    - Code (function expression)

        ```jsx
        const book = books.find(function (book) {
            return book.rating > 4.3
        })
        ```


- Example 4:

    Get the book from author “**Neil Gaiman**”

    ```jsx
    const book = books.find(book => {
      return book.author.includes("Neil Gaiman")
    })
    ```

    ![Array_find_02.jpg](./images/Array_find_02.jpg)


- Question
    - Why did the **if** conditional statement and **return** statement give the complete object and not just the title of the book with the range of rating?
        - Code

            ```jsx
            if (book.rating >= 4.3) {
              return book.title
            }
            ```

        - Output

        ![Array_find_01.jpg](./images/Array_find_01.jpg)

        - Reasons:
            - `find()` method returns the entire object that matches the condition, not just a specific property from it.
            - The `find()` method returns the first book object where `book.rating > 4.3` evaluates to `true`.
            - The method doesn't return `book.title` directly; it returns the entire book object.
        - Solution:

            ```jsx
            const book = books.find(book => book.rating > 4.3);

            const title = book ? book.title : undefined;
            console.log(title); // This will output 'Bone: The Complete Edition'
            ```

            Using optional chaining

            ```jsx
            const title = books.find(book => book.rating > 4.3)?.title;
            console.log(title); // Outputs: 'Bone: The Complete Edition'
            ```
