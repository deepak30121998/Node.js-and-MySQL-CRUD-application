const db = require('../db');

class Todo {
    static getAll(callback) {
        db.query('SELECT * FROM todos', (err, rows) => {
            if (err) {
                return callback(err, null);
            }

            return callback(null, rows);
        });
    }
}

module.exports = Todo;