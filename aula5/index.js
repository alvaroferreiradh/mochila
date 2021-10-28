//variavel de controle, condição, incremento (ação)  
// for (let i=0; i <= 9; i++) {
//     console.log('entrou ' + i)
// }

//function nomeFuncao(parametro1, parametro2) {
//     console.log(parametro1 + parametro2)
// }
// nomeFuncao('Olá ', 'mundo')

// let nomeFuncao = (parametro1, parametro2) => {
//     console.log(parametro1 + parametro2)
// }
// nomeFuncao('Olá ', 'mundo')

// let pegaNome = (nome) => {
//     return nome
// }
// let saudar = (nome, callback) => {
//     const saudacao = 'Olá ' + callback(nome)
//     return saudacao
// }
// const resultado = saudar('Álvaro', pegaNome)

//METODOS DE ARRAY
//let nomes = ['Luiz', 'Álvaro', 'patricia', 'Marcelo', 'Patrick']

// nomes.forEach((nome) => {
//     nome
// })

// const meuNome = 'Álvaro Ferreira'

// for (letra of meuNome) {
//     console.log('Olá ' + letra)
// }

// //DATE
// const dataNascimento = new Date(1995, 2, 27);

// console.log(dataNascimento) 


//Array com sites
const sites = ['globo.com', 'digitalhouse.com', 'spotfy.com']


//Função que contatena o literal 'http://' com uma url que será recebida como parâmetro
function adicionarHttp(url) {
    return 'http://' + url
}

//Função que recebe um array (lista de filmes) e uma função de callback para executar a função de callback para cada ítem do array, e retornar um novo array com tais modificações
function processar(listaSites, cb) {
    const novoArray = listaSites.map((site)=> {
        const stringProcessada = cb(site)
        return stringProcessada 
    })
    return novoArray
}


//Execução da função
processar(sites, adicionarHttp)