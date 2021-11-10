var express = require('express');
var router = express.Router();
var { getDados, cadastraDados } = require('../controllers/users');

router.get('/', getDados);

router.get('/cadastrar', cadastraDados);

module.exports = router;
