# Section 6: Objects - The Core of JavaScript

## CONTENT

### Intro

Objects are collections of properties

![objects_01.jpg](./images/objects_01.jpg)

Suppose these are the information you need to store for Lucy

![objects_02.jpg](./images/objects_02.jpg)

- Example for Array
    - Can you store these information in an array?

        It is possible, but it will not be easy, you will need some arbitrary rules for the data.

        And actually, arrays would be best for ordered information rather than these.


    ```jsx
    // Storing Lucy's information in an array
    const lucyFitbitData = [
      308727, // lucyTotalSteps
      1826, // lucyTotalFloors
      211 // lucyTotalMiles
    ]
    ```

    Notice:

    - The information is not clear
    - Even if you are the one who codes the info, you can not even tell which information is which if you don’t have the comments for the info.

    You can also specify each information

    ```jsx
    let lucyTotalSteps = 308727
    ```

    Notice:

    - There are lots of information to be specified
    - Even if you can specify all the information, they are not grouped together although they all belong to Lucy.

- Example for Object

    ```jsx
    const fitBitData = {
      totalSteps: 308727,
      totalFloors: 1826,
      totalMiles: 211.70,
      avgCalorieBurn: 5755,
      workoutsThisWeek: '5 of 7',
      avgGoodSleep: '2:13'
    }
    ```

    Everything is much CLEARER!!

    Each property is a KEY + VALUE pair

    ```jsx
    totalSteps -> 308727
    workoutsThisWeek -> '5 of 7'
    ```

### Creating Object Literals

- Fundamental

    ![object_literals_01.jpg](./images/object_literals_01.jpg)

    Given this object

    ```jsx
    const fitBitData = {
      totalSteps: 308727,
      totalFloors: 1826,
      totalMiles: 211.70,
      avgCalorieBurn: 5755,
      workoutsThisWeek: '5 of 7',
      avgGoodSleep: '2:13',
      45: 'fourty-five'
    }
    ```

    ![object_literals_02.jpg](./images/object_literals_02.jpg)

    - All the properties inside are key-value pairs
    - All keys are converted to strings **except** for Symbols

        (this happens behind the scene, you will NOT be able to see it)

        ```jsx
        totalSteps
        totalFloors
        totalMiles
        avgCalorieBurn
        workoutsThisWeek
        avgGoodSleep
        45
        ```

        All those keys above are automatically converted to *strings*.

        The key “45” looks like it is a number but it is also actually a *string* of the property inside the object **fitBitData**.

        Even if you might not be able to access the key “45”, it is still actually a *string*.

        ![object_literals_03.jpg](./images/object_literals_03.jpg)

        ![object_literals_04.jpg](./images/object_literals_04.jpg)

    - All the keys are alphabetized

- Comma
    - When comma is optional

        When you have only **one** property in the object, the comma is **not necessary**

        ```jsx
        let data = { a: 1 }
        ```

    - When comma is necessary

        ![object_literals_05.jpg](./images/object_literals_05.jpg)

        - When you have **more than one** properties in the object, the comma now is **compulsory** because it lets JavaScript knows where the end of a property is.

            ```jsx
            let data = { a: 1, b: 2, c: 3 }
            ```

        - You can have the trailing comma after the last property, it is fine and it is up to you.

            ```jsx
            let data = { a: 1, b: 2, c: 3, }
            ```