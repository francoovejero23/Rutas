var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nosotros', function(req, res, next) {
//   res.render('index');
  res.send('hola mundo')
});

module.exports = router;
