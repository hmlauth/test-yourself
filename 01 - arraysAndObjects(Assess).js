// ------------------------------------------------------
// REVIEW / WARM UP
    // 1. What is the notation for an array? 
    // ANSWER: 
    // 2. What is the notation for an object? 
    // ANSWER:
    // 3. What is the notation for accessing information in an array? 
    // ANSWER:
    // 4. What is the notation for accessing information in an object? 
    // ANSWER:
    // 5. What are each of the 'pairs' called in an object?
    // ANSWER:
    // 6. How do you set information on a object?
    // ANSWER
    // 7. BONUS: How does the notation/syntax of key pair values in a standard object differ from that of a constructor function?
    // ANSWER: 

    // ------------------------------------------------------
// PART 1: Accessing information in an array

    var letters = ['a', 'b', 'c']

    // a. Print a to the console.

    // b. Print b to the console.

    // c. Print c to the console.


// ------------------------------------------------------
// PART 2: Access information in an object

    var person = {
        name: 'Jane',
        age: 20,
        "favorite drink": "Coca Cola",
        drink: function() {
            console.log('I am drinking my favorite soda: ', this['favorite drink']);
        } 
    }
    // a. Print Jane to the console.

    // b. Print 20 to the console.

    // c. Make Jane drink her favorite soda! 


// ------------------------------------------------------
// PART 3: Access information in an array of objects

    var response = [
        { name: 'Jane', age: 20 },
        { name: 'John', age: 30 },
        { name: 'Donna', age: 40 }
    ];

    // a. Print response to the console. . . what is it?
    // ANSWER:
    // b. What is each element in the array? 
    // ANSWER: 
    // c. How do I access the first element? In other words, print the first element to the console.
    // d. How do I access the name in the first element? In other words, print Jane to the console.
    // e. Print Donna to the console.
    // f. Print Donna's age to the console.
    // g. Print John to the console.
    // h. Print John's age to the console.
    // i. Create a for loop that prints each person's name. 
    // j. In your for loop, add a line that will also print the person's age.
    // BONUS: How could you print each person's name and age to the console using an array method? 
    // BONUS: How could you print each person's name who is older that 30 using either a for loop or an array method? 
    

// ------------------------------------------------------
// PART 4: Accessing nested arrays

    var response = [
        {
            response: {
                data: [
                    { 
                        name: 'Jane Sal',
                        age: 20,
                        favColors: ['blue', 'green']
                    },
                    { 
                        name: 'Johnny Apple',
                        age: 100,
                        favColors: ['red', 'white', 'blue']
                    },
                    { 
                        name: 'Helen Smithers',
                        age: 51,
                        favColors: ['pink', 'purple','gold', 'blue']
                    },
                ]
            }
        }
    ]

    // a. Print response to the console. . . what is it?
    // ANSWER:
    // b. Print 'response[0]' to the console. . .what is it? 
    // ANSWER: 
    // c. Print 'response[0].response' to the console. . .what is it?
    // ANSWER: 
    // d. Print 'response[0].response.data' to the console. . .what is it?
    // ANSWER: 
    // e. Print 'response[0].response.data[0]' to the console. . . what is it?
    // ANSWER: 
    // REFLECT: Notice the progression from 'response' to 'response[0].response.data[0]'. . . what are you doing and why? How many elements are in the 'response' array? If you were to create a for loop or use an array method, which index values would be variable (replaced with i)?
    // f. Print Johnny Apple's name to the console.
    // g. Print Helen Smithers age to the console.
    // h. Print Jane Smith's favorite colors to the console.
    // i. Print Jane Smith's favorite colors in a list. (HINT: You will need to create a for loop or use an array method)
    // j. Create a for loop that prints each person's name, age and favorite colors.
    // k. BONUS: For all individuals who are younger than 50,  Print the person's name, age and favColors? 
    // l. BONUS: Print the names of those individuals whose favorite color is blue, and have a name with characters greater than 10 (there are many ways to do this including: forEach, filter,reduce, for loop, if/else conditions, helper functions. . . solve it once with what you know then again while learning something new =D ).

// =====================================================

