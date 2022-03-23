const formulario = document.querySelector('form')

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value


    //Montar e enviar a requisição de Login
    //ENDPOINT = https://reqres.in/api/login
    //email e senha para enviar no body da requislão

    const objLogin = {
        email: email,
        password: senha
    }

    axios.post('https://reqres.in/api/login', objLogin)
        .then(function (retorno) {
            
            console.log(retorno.status)

            const tokenValido = retorno.data.token

            axios.post(`alskdjal sdkj a`, {}, {authentication: tokenValido})

            alert(`Usuário autenticado com sucesso, o token é: ${tokenValido}`)
        })
        .catch(error=> {

            alert('Houve um erro, tente novamente!')

        })

})