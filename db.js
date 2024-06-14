const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-mysql-crud'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to Database', err);
        return;
    }

    console.log('Connected to Database Successfully!!')
});

module.exports = db;