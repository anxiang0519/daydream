const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/getall', async (req, res) => {
    const sql = 'SELECT * FROM users';
    pool.query(sql, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

router.post('/add', async (req, res) => {
    const { name, age } = req.body;
    const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
    pool.query(sql, [name, age], (error, results) => {
        if (error) throw error;
        res.json({ id: results.insertId, name, age });
    });
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
    pool.query(sql, [name, age, id], (error, results) => {
        if (error) throw error;
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User updated' });
    });
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    pool.query(sql, [id], (error, results) => {
        if (error) throw error;
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    });
});


module.exports = router;