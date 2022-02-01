const axios = require('axios')

function aguarda(ms) {
    if (typeof ms !== 'number')
        return Promise.reject('Esta função esperava um numero.')

    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Antes')

aguarda('ok')
    .then(() => {
        console.log('Then')
    })
    .catch(() => {
        console.log('Catch')
    })
    .finally(() => {
        console.log('Finally')
    })


//API DO GITHUB
const gitHubAPI = axios.create({
    baseURL: "https://api.github.com",
})

// gitHubAPI.get('users/alvarojfjunior')
//     .then(res => console.log('SUCESSO: ', res.data))
//     .catch(err => console.log('ERRO: ', err.message))
//     .finally(err => console.log('PROMISE FINALIZADA!'))

const asyncFunction = async () => {
    console.log('Antes');
    const res = await gitHubAPI.get('users/alvarojfjunior');
    console.log('Depois');
}

asyncFunction()

