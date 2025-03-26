import mysql from 'mysql2';

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  JWT_SECRET,
} = process.env;

export const dbConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  regestart: JWT_SECRET,
};


const connection = mysql.createConnection(dbConfig);

export default connection.promise();