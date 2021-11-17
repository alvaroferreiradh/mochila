var express = require('express');
var router = express.Router();
const { retornaTexto, inserirUsuario } = require('../controllers/users')

/* GET users listing. */
router.get('/', retornaTexto);

router.get('/outra-rota', retornaTexto);

router.post('/inserir', inserirUsuario)

module.exports = router;
