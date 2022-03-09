const btnSaudar = document.querySelector('#btn-saudar')

btnSaudar.onclick = () => {
    //Capturar o input e o select
    const input = document.querySelector('#name').value
    const opcao = document.querySelector('#opcao').value

    alert(opcao + ', ' + input)
}

