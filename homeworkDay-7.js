// Write a function that takes an integer minutes and converts it to seconds. Examples
//convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// Don't forget to return the result.

function minutesToSeconds (num) {
    const result = num * 60
    return result
    
}

console.log(minutesToSeconds(40));

// What if i have an array of numbers:

// function minutes (x) {
//     const seconds = x * 60;
//     for (let i = 0; i < x.length; i++) {
//         seconds ++
//         console.log(seconds)
//     }
//     }
//     console.log(seconds(39, 49, 20))

// 2. Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.

function hoursToSeconds(hours) {
    const seconds = hours * 360;
    return seconds
}

console.log(hoursToSeconds(2))

// Create an SQL with your favorite dishes and cuisines. 

CREATE TABLE fav_Dishes_Cuisines (
    dish_name VARCHAR(50),
    dish_quality VARCHAR(40),
    cuisine VARCHAR(40),
    temperature VARCHAR(50),
    prep_duration VARCHAR(50),
    main_ingredient VARCHAR(50)
);

INSERT INTO fav_Dishes_Cuisines values ("paella", "not spicy", "Spanish", "hot", "long", "rice");
INSERT INTO fav_Dishes_Cuisines values ("pad thai", "not spicy", "Thai", "hot", "short", "noodles");
INSERT INTO fav_Dishes_Cuisines values ("shushi", "not spicy", "Thai", "cold", "short", "rice");