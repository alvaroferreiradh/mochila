const express = require('express')
const app = express()


//O METODO GET GERALMENTE É USADO PARA RETORNAR INFORÇÕES
app.get('/clientes', (req, res)=> {
    console.log('bateu na rota de listar todos os clientes')
    const todosOsClientes = [
        {
            id: 1,
            nome: 'Álvaro Ferreira',
            idade: 26
        },
        {
            id: 2,
            nome: 'Patrick Reis',
            idade: 27
        }
    ]
    res.json(todosOsClientes)
})

// O METODO POST É GERALMENTE USADO PARA INSERIR INFORMAÇÕES
app.post('/clientes', (req, res) => {
    console.log('Bateu na minha rota de post')

    res.json('Um registro foi cadastrado no banco de dados.')
})

//O METODO DELETE É GERALMENTE USADO PARA DELETAR DADOS
app.delete('/clientes', (req, res)=> {
    console.log('Bateu na rota de delete')

    res.json('Um registro foi apagado do banco de dados.')
})

//O METODO PUT GETALMENTE ALTERA UM REGISTRO DO BANCO DE DADOS.
app.put('/clientes', (req, res)=> {
    console.log('Bateu na rota de put')

    res.json('Um registro foi altereado do banco de dados')
})



app.listen(3333, ()=> {
    console.log('O servidor foi iniciado com sucesso!')
})