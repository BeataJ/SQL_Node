const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user:'root'
});

module.exports = pool;