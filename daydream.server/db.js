const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'new_schema',
    password: '111111'
});
module.exports = pool;