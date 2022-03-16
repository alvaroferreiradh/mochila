const btnBusca = document.querySelector('#btn-busca')


btnBusca.onclick = () => {
    //Capturo os elementos(DOM) HTML
    const githubUsername = document.querySelector('#github-username').value


    //Faço as verificações (Validações)
    if (!githubUsername) {
        alert('O campo username é obrigatíorio')
        return
    }

    //Captura os dados do Github (Axios[REQUISIÇÃO])
    axios.get(`https://pokeapi.co/api/v2/pokemon/${githubUsername}`)
        .then(response => {
            //Já tenho os dados
            const dados = response.data

            let cardUsuario = document.querySelector('.card-usuario')
            let avatar = document.querySelector('#avatar')
            let nomeLocal = document.querySelector('#nome-local')
            let bio = document.querySelector('#bio')
            let repositorios = document.querySelector('#repositorios')
            let seguidores = document.querySelector('#seguidores')
            let seguindo = document.querySelector('#seguindo')
            let linkPerfil = document.querySelector('#link-perfil')


            cardUsuario.style.display = 'block'
            avatar.src = dados.sprites.front_default
            nomeLocal.innerText = `${dados.name} - ${dados.location}`
            bio.innerText = dados.bio
            repositorios.innerText = `Repositórios públicos: ${dados.public_repos}`
            seguidores.innerText = `Seguidores: ${dados.followers}`
            seguindo.innerText = `Seguindo: ${dados.following}`
            linkPerfil.href = dados.html_url


            console.log(dados)

            //Preenche os elementos com os dados do github


        })


}