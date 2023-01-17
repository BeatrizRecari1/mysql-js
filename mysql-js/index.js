// const mysql = require('mysql2);

import { createConnection } from 'mysql2'; // Import library of mysql tools
import  { dbConnection } from "./secrets.js"; // Only one default (I also don't need one) // Always add .js in our files

const db = createConnection(dbConnection) 


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


