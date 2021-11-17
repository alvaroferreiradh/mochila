function retornaTexto(req, res) {
    res.send('Texto retornado.')
}

function inserirUsuario(req, res) {
    console.log(req.body.nomae)
    res.send('Texto retornado')
}



module.exports = {
    retornaTexto,
    inserirUsuario
}