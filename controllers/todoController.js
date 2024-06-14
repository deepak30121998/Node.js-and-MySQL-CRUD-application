const db = require('../db');

exports.getAllTodos = (req, res) => {
    db.query('SELECT * FROM todos', (error, results) => {
        if (error) {
            return res.status(500).json({error: 'Internal server error'})
        }

        res.json(results);
    });
};

exports.createTodo = (req, res) => {
    const { title, description, completed } = req.body;
    console.log('Request Body:', req.body);

    const sql = 'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)';

    db.query(sql, [title, description, completed], (error, result) => {
        if (error) {
            return res.status(500).json({error: 'Internal Server error'});
        }

        res.status(201).json({message: 'Todo created successfully!', id: result.insertId});
    });
};


exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const sql = 'UPDATE todos SET title=?, description=?, completed=? WHERE id=?';

    db.query(sql, [title, description, completed, id], (error, result) => {
        if (error) {
            return res.status(500).json({error: 'Internal server error'});
        }

        res.status(201).json({message: 'Todo updated successfully!!'});
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM todos WHERE id=?';

    db.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json({error: 'Internal server error'});
        }

        res.status(201).json({message: 'Todo deleted successfully!!'});
    });
}