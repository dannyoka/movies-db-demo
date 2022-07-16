const mysql = require('mysql2');
console.log('database', process.env.DATABASE);

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASSWORD || 'password',
    user: process.env.DB_USER || 'root',
    database: process.env.DATABASE || 'movies_db',
  },
  console.log('DB connected successfully')
);

module.exports = db;
