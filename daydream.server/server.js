const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const users = require('./routes/users')


const app = express();
const port = 3002;

// ����������������
app.use(cors());

// ����JSON��URL�����������
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',users)

// �������ݿ����ӳ�
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'new_schema',
    password: '111111'
});

// ��ȡ�����û�

app.listen(port,'192.168.8.146', () => {
    console.log(`Server running on http://localhost:${port}`);
});