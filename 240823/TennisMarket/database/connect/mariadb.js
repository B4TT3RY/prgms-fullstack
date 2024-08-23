const mariadb = require('mysql');

const conn = mariadb.createConnection({
    host: '***',
    port: 3306,
    user: '***',
    password: '***',
    database: 'Tennis'
});

module.exports = conn;