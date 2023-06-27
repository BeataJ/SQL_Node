const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user:'root',
    password:'potworek111'
});

module.exports = pool;