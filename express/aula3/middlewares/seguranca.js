function middlewareSeguranca(req, res, next) {
    console.log("Passou no middleware de segunrança")
    if ((1 + 2) === 3) {
        next()
    } else {
        res.send("Você não está autorizado, pois o calculo de autenticação não está correto.")
    }
}

module.exports = {
    middlewareSeguranca
}