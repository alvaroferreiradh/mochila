const listaClientes = () => {
    axios.get('http://localhost:3000/clientes')
        .then(retorno => {
            const dados = retorno.data
            let listaClientes = document.querySelector('#listaClientes')

            //Limpar a lista, para depois ser preenchida
            listaClientes.innerHTML = ''

            for (let i = 0; i < dados.length; i++) {
                listaClientes.innerHTML += `<p> ${dados[i].nome}, ${dados[i].telefone}, ${dados[i].email} </p>`
            }
        })
}

//Carrega clientes ao abrir a tela
listaClientes()

const btnNovo = document.querySelector('#btnNovo')

btnNovo.onclick = () => {
    //1. Capturar itens do formulário na tela
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const telefone = document.querySelector('#telefone').value

    //2. Enviar requisição post para api com os dados capturado, para adicionar novo cliente
    axios.post('http://localhost:3000/clientes', { nome, email, telefone })
        .then(retorno => {
            //3. Depois de inserir o novo cliente, a lista é atualizada
            listaClientes()  
        })
}