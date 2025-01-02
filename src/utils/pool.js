const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL username
  password: '373920', // Replace with your MySQL password
  database: 'bida_db', // Replace with your database name
  waitForConnections: true, // Wait if no connections are available
  connectionLimit: 10,      // Number of connections in the pool
  queueLimit: 0,            // No limit on the number of requests in the queue
});

module.exports = pool;