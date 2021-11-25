function retornaTexto(req, res) {
    res.send("Minha rota de products retornou este texto");
}

function inputaText(req, res) {
    res.send("Ok, seu texto foi inputado")
}


module.exports = {
    retornaTexto,
    inputaText
}