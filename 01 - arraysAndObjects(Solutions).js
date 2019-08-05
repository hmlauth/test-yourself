// ASSESSEMENT, PRACTICE and REPETITION
// ------------------------------------------------------
// REVIEW / WARM UP
    // 1. What is the notation for an array? 
    // ANSWER: []

    // 2. What is the notation for an object? 
    // ANSWER: {}

    // 3. What is the notation for accessing information in an array? 
    // ANSWER: array[index]

    // 4. What is the notation for accessing information in an object? 
    // ANSWER: object.property
    // BONUS: Typically you will see "dot notation", however, if the property name is two words you can also write object[property]

    // 5. What are each of the 'pairs' called in an object?
    // ANSWER: key value pairs

    // 6. How do you set information on a object?
    // ANSWER: Similarly to accessing information except now you can just set it '=' to what you want to set it too! i.e. object.property = 'new value'

    // 7. BONUS: How does the notation/syntax of key pair values in a standard object differ from a Constructor function?
    // ANSWER:  
    // - In an object literal you use ':' (property: value or method: function definition)
    // - In a Constructor function you use '=' (property: value or method: function definition)

    // ------------------------------------------------------
// PART 1: Accessing information in an array
console.log('\n -------- \n Part 1: \n');

var letters = ['a', 'b', 'c'];
// a. Print a to the console.
console.log(letters[0]);
// b. Print b to the console.
console.log(letters[1]);
// c. Print c to the console.
console.log(letters[2]);

// ------------------------------------------------------
// PART 2: Access information in an object
console.log('\n -------- \n Part 2: \n');

var person = {
    name: 'Jane',
    age: 20,
    "favorite drink": "Coca Cola",
    drink: function() {
        console.log('I am drinking my favorite soda: ', this['favorite drink']);
    } 
};

// a. Print Jane to the console.
console.log(person.name);
// b. Print 20 to the console.
console.log(person.age);
// c. Make Jane drink her favorite soda! 
person.drink();

// ------------------------------------------------------
// PART 3: Access information in an array of objects
console.log('\n -------- \n Part 3: \n');

var people = [
    { name: 'Jane', age: 20 },
    { name: 'John', age: 30 },
    { name: 'Donna', age: 40 }
];

// a. Print people to the console. . . what is it?
console.log(people);
// ANSWER: An array!
// b. What is each element in the array? 
// ANSWER:  An object!
// c. How do I access the first element? In other words, print the first element to the console.
console.log(people[0]);
// d. How do I access the name in the first element? In other words, print Jane to the console.
console.log(people[0].name);
// e. Print Donna to the console.
console.log(people[2].name);
// f. Print Donna's age to the console.
console.log(people[0].age);
// g. Print John to the console.
console.log(people[1].name);
// h. Print John's age to the console.
console.log(people[1].age);
// i. Create a for loop that prints each person's name. 
// j. In your for loop, add a line that will also print the person's age.
// BONUS: How could you use template literals instead of 2 console.logs?
// BONUS: How could you print each person's name and age to the console using an array method? 
// BONUS: How could you print each person's name who is older that 30 using either a for loop or an array method? 

// For loop
for ( let i = 0; i < people.length; i++ ) {
    console.log(people[i].name)
    console.log(people[i].age);
};

// With template literals: `${}`
for ( let i = 0; i < people.length; i++ ) {
    console.log(`${people[i].name} is ${people[i].age} years old.`)
};

// With array method & template literal
// Array Method: array.forEach()
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`)
});

// Each person older than 30 with for loop
for (let i = 0; i < people.length; i++ ) {
    if (people[i].age > 30) {
        console.log(people[i].name);
    }
};

// Each person older than 30 with array method
// Array Method: array.forEach()
people.forEach(person => {
    if (person.age > 30){
        console.log(person.name)
    }
});

// ------------------------------------------------------
// PART 4: Accessing nested arrays (this 'response' is an example of a response object you might get back from an api request)
console.log('\n -------- \n Part 4: \n');

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
// ANSWER: An array!
console.log(response);

// b. Print 'response[0]' to the console. . .what is it? 
// ANSWER: An object!
console.log(response[0]);

// c. Print 'response[0].response' to the console. . .what is it?
// ANSWER: An object!
console.log(response[0].response);

// d. Print 'response[0].response.data' to the console. . .what is it?
// ANSWER:  An array!
console.log(response[0].response.data);

// e. Print 'response[0].response.data[0]' to the console. . . what is it?
// ANSWER: An object!
console.log(response[0].response.data[0]);

// REFLECT: Notice the progression from 'response' to 'response[0].response.data[0]'. . . what are you doing and why? How many elements are in the 'response' array? Which arrays are iterable?
// ANSWER: All nested arrays, other than response[0] are iterable. The first array, 'response' has one large object as it's one and only element. Then, inside that object, is one property containing the object that matters. 

let data = response[0].response.data; // [{},{},{}] Store a reference to accessing the data array so we do not have to write out 'response[0].response.data' each time! 

// f. Print Johnny Apple's name to the console.
console.log(data[1].name);

// g. Print Helen Smithers age to the console.
console.log(data[2].age);

// h. Print Jane Smith's favorite colors to the console.
console.log(data[0].favColors);

// i. Print Jane Smith's favorite colors in a list. (HINT: You will need to create a for loop or use an array method)
data.forEach(person => {
    if (person.name === 'Jane Sal') {
        person.favColors.forEach(color => {
            console.log(`${color}`);
        })
    }
});

// j. Create a for loop and then use an array method that prints each person's name, age and favorite colors.

// Nested for loop
for(let i = 0; i < data.length; i++ ) {
    for (let j = 0; j < data[i].favColors.length; j++) {
        console.log(data[i].favColors[j])
    }
}

// Array methods
data.forEach(person => {
    console.log(`\n${person.name}'s favorite colors are:`)
    person.favColors.forEach(color => {
        console.log(`${color}`);
    })
    console.log(`Age: ${person.age}.`)
});

// k. BONUS: For all individuals who are younger than 50, print the person's name, age and favColors? 
data.forEach(person => {
    if (person.age < 50) {
        console.log(`\n${person.name} is less than 50 years of age.\nHer favorites colors are:`);
        person.favColors.forEach(color => console.log(color));
    }
})

// l. BONUS: Print the names of those individuals whose favorite color is blue, and have a name with characters greater than 10 (there are many ways to do this including: forEach, filter, reduce, for loop, if/else conditions, helper functions. . . solve it once with what you know then again while learning something new =D ).

// What we know:

for ( let i = 0; i < data.length; i++ ) {
    if (data[i].name.length > 10 && data[i].favColors.includes('blue')) {
        console.log(data[i].name);
    }
}

// Something new! INCLUDES(), REDUCE()


// =====================================================

