var express = require('express');
var router = express.Router();

var { retornaTexto, inputaText } = require('../controllers/products')
var { middlewareSeguranca } = require('../middlewares/seguranca')

/* GET users listing. */
router.get('/', retornaTexto);

router.get('/retorna-text-2', middlewareSeguranca, retornaTexto);

router.get('/retorna-text-3', retornaTexto);

router.get('/retorna-text-4', retornaTexto);

router.get('/retorna-text-5', retornaTexto);

router.post('/inputa-text', inputaText);


module.exports = router;
