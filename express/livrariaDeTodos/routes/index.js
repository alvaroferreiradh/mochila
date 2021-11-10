var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //Aqui já é o meu controller
  let v1 = 10;
  let v2 = 20;

  const r = v1 * v2;

  res.render('index');
});

module.exports = router;
