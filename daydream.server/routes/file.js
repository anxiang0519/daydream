const express = require('express');
const router = express.Router();
const pool = require('../db');
const multer = require('multer');
// 配置multer存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../file_temp')  // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// 单文件上传
router.post('/upload', upload.single('file'), (req, res) => {
    console.log(123);
  res.send('文件上传成功');
});

// 多文件上传
router.post('/uploads', upload.array('files', 5), (req, res) => {
  res.send('多个文件上传成功');
});

module.exports = router;