const express = require('express');
const cors = require('cors');
const users = require('./routes/users')
const files = require('./routes/file')

const app = express();
const port = 3002;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',users)
app.use('/file',files)

// // 获取所有记录
// app.get('/items', (req, res) => {
//     const sql = 'SELECT * FROM users';
//     pool.query(sql, (error, results) => {
//         if (error) throw error;
//         res.json(results);
//     });
//   });


app.listen(port,'192.168.8.146', () => {
    console.log(`Server running on http://localhost:${port}`);
});