### 08. Some & Every

- [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
    - Definition:
        - It tests whether all elements in the array pass the test implemented by the provided function.
        - It returns a Boolean value.

    - Example 1:

        Given the array **words**

        ```jsx
        const words = ['dog', 'dig', 'log', 'bag', 'wags'];
        ```

        Write a code to test whether each string has 3 characters

        ```jsx
        const all3Lets = words.every(word => word.length === 3)
        ```

        Output:

        ```jsx
        false
        ```

        Reason: “wags” has 4 characters

        By removing 1 random character from “wags”, the program now outputs “true”

        ![some_every_01.jpg](./images/some_every_01.jpg)

    - Example 2:

        Given the array **words**

        ```jsx
        const words = ['dog', 'dig', 'log', 'bag', 'wag'];
        ```

        Write a program to check if the last character of those words is letter “g”

        ```jsx
        const allEndInG = words.every(word => {
          const last = word.length - 1;
          return word[last] === 'g';
        })
        ```

        Output:

        ```jsx
        true
        ```


    - Example 3:

        Given the same array

        ```jsx
        const words = ['dog', 'dig', 'log', 'bag', 'wag'];
        ```

        Write a program to check if all the string start with letter “d”

        ```jsx
        const allStartWithD = words.every(word => word[0] === 'd')
        ```

        Output:

        ```jsx
        false
        ```

        Reasons:

        - ‘dog’, ‘dig’ starts with ‘d’
        - ‘log’, ‘bag’, ‘wag’ do not start with ‘d’

    - Example 4:

        Given the array of objects **books**

        ```jsx
        const books = [{
            title: 'Good Omens',
            authors: ['Terry Pratchett', 'Neil Gaiman'],
            rating: 4.25,
            genres: ['fiction', 'fantasy']
          },
          {
            title: 'Changing My Mind',
            authors: ['Zadie Smith'],
            rating: 3.83,
            genres: ['nonfiction', 'essays']
          },
          {
            title: 'Bone: The Complete Edition',
            authors: ['Jeff Smith'],
            rating: 4.42,
            genres: ['fiction', 'graphic novel', 'fantasy']
          },
          {
            title: 'American Gods',
            authors: ['Neil Gaiman'],
            rating: 4.11,
            genres: ['fiction', 'fantasy']
          },
          {
            title: 'A Gentleman in Moscow',
            authors: ['Amor Towles'],
            rating: 4.36,
            genres: ['fiction', 'historical fiction']
          },
          {
            title: 'The Name of the Wind',
            authors: ['Patrick Rothfuss'],
            rating: 4.54,
            genres: ['fiction', 'fantasy']
          },
          {
            title: 'The Overstory',
            authors: ['Richard Powers'],
            rating: 4.19,
            genres: ['fiction', 'short stories']
          },
          {
            title: 'The Way of Kings',
            authors: ['Brandon Sanderson'],
            rating: 4.65,
            genres: ['fantasy', 'epic']
          },
          {
            title: 'Lord of the flies',
            authors: ['William Golding'],
            rating: 3.67,
            genres: ['fiction']
          }
        ]
        ```

        Write a program to check if all ratings of the books are greater than 4.5

        ```jsx
        const allGoodBooks = books.every(book => book.rating > 4.5)
        ```

        Output:

        ```jsx
        false
        ```


- [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
    - Definition:
        - It tests whether **at least one** element in the array passes the test implemented by the provided function.
        - It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
        - It doesn't modify the array.

    - Example 1:

        Given array **words**

        ```jsx
        const words = ['dog', 'dig', 'log', 'bag', 'wag'];
        ```

        Write a program to check whether any of the string starts with letter “d”

        ```jsx
        const someStartsWithD = words.some(word => word[0] === 'd')
        ```

        Output:

        ```jsx
        true
        ```


    - Example 2:

        Given the array **books**

        ```jsx
        const books = [{
            title: 'Good Omens',
            authors: ['Terry Pratchett', 'Neil Gaiman'],
            rating: 4.25,
            genres: ['fiction', 'fantasy']
          },
          {
            title: 'Changing My Mind',
            authors: ['Zadie Smith'],
            rating: 3.83,
            genres: ['nonfiction', 'essays']
          },
          {
            title: 'Bone: The Complete Edition',
            authors: ['Jeff Smith'],
            rating: 4.42,
            genres: ['fiction', 'graphic novel', 'fantasy']
          },
          {
            title: 'American Gods',
            authors: ['Neil Gaiman'],
            rating: 4.11,
            genres: ['fiction', 'fantasy']
          },
          {
            title: 'A Gentleman in Moscow',
            authors: ['Amor Towles'],
            rating: 4.36,
            genres: ['fiction', 'historical fiction']
          },
          {
            title: 'The Name of the Wind',
            authors: ['Patrick Rothfuss'],
            rating: 4.54,
            genres: ['fiction', 'fantasy']
          },
          {
            title: 'The Overstory',
            authors: ['Richard Powers'],
            rating: 4.19,
            genres: ['fiction', 'short stories']
          },
          {
            title: 'The Way of Kings',
            authors: ['Brandon Sanderson'],
            rating: 4.65,
            genres: ['fantasy', 'epic']
          },
          {
            title: 'Lord of the flies',
            authors: ['William Golding'],
            rating: 3.67,
            genres: ['fiction']
          }
        ]
        ```

        Write a program to check if there is any book that is written by 2 authors

        ```jsx
        const any2Authors = books.some(book => book.authors.length === 2)
        ```

        Output:

        ```jsx
        true
        ```

        Reason:

        ‘Good Omens’ is written by 'Terry Pratchett' and 'Neil Gaiman'
