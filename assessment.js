const letters = ['a', 'b', 'c'];
// Print a to the console.
// Print b to the console.
// Print c to the console.
// Write a for loop that prints each element to the console.

// ------------------------------------------------------

var person = {
    name: 'Jane',
    age: 20,
    "favorite drink": "Coca Cola",
    drink: function() {
        console.log('Jane is drinking.')
    }
};

// Print Jane to the console.
// Print 20 to the console.
// - Use dot nat
// Make Jane drink her favorite soda! 
// Loop over object and print each property name and value to the console.

// ------------------------------------------------------

var persons = [
    { name: 'Jane', age: 20 },
    { name: 'John', age: 30 },
    { name: 'Donna', age: 40 }
];

// Print persons to the console. . . what is it?
// What is each element in the array? 
// Print the first element to the console.
// Print Jane to the console.
// Print Donna to the console.
// Print Donna's age to the console.
// Print John to the console.
// Print John's age to the console.
// Create a for loop that prints each person's name. 
// In your for loop, add a line that will also print the person's age.
// BONUS: Using an if/else statment in your for loop, print only those people older than 20 to the console.

// ------------------------------------------------------

var data = [
    {
        data: {
            persons: [
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

// Print data to the console. . . what is it?
// Print 'data[0]' to the console. . .what is it? 
// Print 'data[0].data' to the console. . .what is it?
// Print 'data[0].data.data' to the console. . .what is it?
// Print 'data[0].data.data[0]' to the console. . . what is it?
// REFLECT: Notice the progression from 'data' to 'data[0].data.persons[0]'.
// - What are you doing and why? 
// - How many elements are in the 'response' array? How could you determine the "length" of the array?
// Print Johnny Apple's name to the console.
// Print Helen Smithers age to the console.
// Print Jane Smith's favorite colors to the console.

// Print Jane Smith's favorite colors in a list. Expected Output:
    /*
        blue
        green
    */

// Create a for loop that prints each person's name, age and favorite colors. Expected Output:
    /*
        Jane Sal
        20
        ['blue', 'green']
        -----
        Johnny Apple
        100
        ['red', 'white', 'blue']
        -----
        Helen Smithers
        51
        ['pink', 'purple','gold', 'blue']
    */

// Now add a nested loop that prints out the colors as well. Expected Output:
    /*
        Jane Sal
        20
        blue
        green
        -----
        Johnny Apple
        100
        red
        white
        blue
        -----
        Helen Smithers
        51
        pink
        purple
        gold
        blue
    */

   
// ------------------------------------------------------


