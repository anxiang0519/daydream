const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const users = require('./routes/users')


const app = express();
const port = 3002;

// 允许所有域名访问
app.use(cors());

// 解析JSON和URL编码的请求体
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',users)

// 创建数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'new_schema',
    password: '111111'
});

// 获取所有用户

app.listen(port,'192.168.8.146', () => {
    console.log(`Server running on http://localhost:${port}`);
});