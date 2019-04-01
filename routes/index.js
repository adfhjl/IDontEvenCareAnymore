var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

router.post('/test', function(req, res, next) {
  console.log(req.body);
  res.render('test')
});

module.exports = router;
