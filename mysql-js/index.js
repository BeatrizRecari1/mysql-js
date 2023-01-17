// const mysql = require('mysql2);

import mysql from 'mysql2'; // Import library of mysql tools

const db = mysql.createConnection({ // Connect and call connection "db"
    host: "127.0.0.1",
    database: "bocacode",
    user: "root",
    password: "test1234"
})

console.log("we are connected")

db.query('UPDATE users SET first_name = "Cass" WHERE first_name = "Jiho"', (err) => {
    if (err) console.log("UPDATE DONE -> ", err);
    else console.log("UPDATE DONE!");
});

db.query("SELECT * FROM users", (err, results) => {
    if(err) console.log("ERROR -> ", err);
    console.table(results);

});

db.end();

console.log("The end.")


