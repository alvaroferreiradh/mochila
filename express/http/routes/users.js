var express = require('express');
var router = express.Router();
var { trazerDados, inserirDados, alterarDados, deletarDados } = require('../controllers/users');

router.get('/', trazerDados);

router.post('/inserir', inserirDados);

router.put('/alterar/:id', alterarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;