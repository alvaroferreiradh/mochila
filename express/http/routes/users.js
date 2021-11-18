var express = require('express');
var router = express.Router();
var { trazerDados, inserirDados, alterarDados, deletarDados, uploadArquivo } = require('../controllers/users');

//alterações para o funcionamento do Multer
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
///////////////////////////

router.get('/', trazerDados);

router.post('/inserir', inserirDados);

router.put('/alterar/:id', alterarDados);

router.delete('/deletar/:id', deletarDados);

router.post('/upload-one', upload.single('arquivo'), uploadArquivo)

router.post('/upload-two', upload.array('arquivo', 2), uploadArquivo)

module.exports = router;