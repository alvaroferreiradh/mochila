
const axios = require('axios')

function aguardar(ms) {
    if (typeof ms === 'number') {
        return new Promise(resolve => setTimeout(resolve, ms))
    } else {
        return Promise.reject('')
    }
}

console.log('Print 1')

console.log('Print 2')

aguardar(2000)
    .then(() => {
        //Contexto de sucesso
        console.log('A promessa acabou!')

        ///.....
    })
    .catch(() => {
        //Contexto de falha
        console.log('A promessa Falhou')
    })

console.log('Print 3')



const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

api.get('pokemon/ditto')
    .then(resultado => {
        console.log('O resultado da api é:', resultado.data)
    })
    .catch(erro => {
        console.log('Houve um erro na requisição. ', erro.message)
    })