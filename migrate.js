import db from './clients/db.mysql.js';

(async () =>{
    try {
        await  db.query(`
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) ,
        password VARCHAR(100) ,
        dob DATE
    )
   `);
    }catch (err) {
        console.log(err);
    }
})();