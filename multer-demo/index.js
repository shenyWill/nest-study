const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { MulterError } = require('multer');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/simple-upload', upload.single('test-simple-upload'), function(req, res, next) {
  console.log('req.file', req.file);
  console.log('req.body', req.body);
  // return '上传单文件成功';
  res.send({
    message: '成功上传'
  })
});

app.post('/mult-upload', upload.array('test-mult-upload', 2), function(req, res, next) {
  console.log('req.file', req.files);
  console.log('req.body', req.body);
  // return '上传单文件成功';
  res.send({
    message: '成功上传'
  })
}, function(err, req, res, next) {
  console.log('err', err);
  // res.send({
  //   message: '上传失败'
  // })
  if (err instanceof MulterError && err.code === 'LIMIT_UNEXPECTED_FILE') {
    res.status(400).end('上传文件超出数量');
  }
})

app.post('/more-upload', upload.fields([
  {name: 'one', maxCount: 3},
  {name: 'two', maxCount: 2},
]), function(req, res, next) {
  console.log('req.file', req.files);
  console.log('req.body', req.body);
  // return '上传单文件成功';
  res.send({
    message: '成功上传'
  })
})

app.post('/any-upload', upload.any(), function(req, res, next) {
  console.log('req.file', req.files);
  console.log('req.body', req.body);
  // return '上传单文件成功';
  res.send({
    message: '成功上传'
  })
})

app.listen(3333);