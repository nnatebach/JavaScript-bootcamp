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