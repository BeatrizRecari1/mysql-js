// objects in arrays
const people = [
    {
        first_name: "Jiho",
        last_name: "Sohn",
        age: "old",
        gender: "male"
    },

    {
        first_name: "Idan",
        last_name: "Fisher",
        age: "old",
        gender: "male"
    }
];

const result = people[0]["last_name"]; // Or people[0].last_name // not people[0[1]]
console.log(result)


// arrays in object

const cart = {
    fruit: [       // fruit is the key
        "banana",
        "apple",
        "blueberry"
    ],

    drink: [        // drink is the pair
        "kambucha",
        "coffee"
        "tea"
    ]
};
// Because it is an object, I can do both bracket and dot notation.
// const result = cart["drink"][1]
const result = cart.fruit[0]; 
console.log(result)

const cart2 = [
    "green tea", // index 0
    "hummus"     // index 1   
];

const cart = { 
    fruit: "banana",    // key "1"
    drink: "tea"        // key "2"
}

// If not in a quotation mark, it thinks it is a variable => cart[fruit]

const fruit = "drink"
const result = cart[fruit];
console.log(result)

// another exercise

