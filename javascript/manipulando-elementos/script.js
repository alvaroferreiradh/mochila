//Caputando o elemento p, criando o elemento label dentro de p
const elementoParagrafo = document.querySelector('p')
elementoParagrafo.innerHTML = elementoParagrafo.innerText + ' <label> </label>'
const elementoLabel = document.querySelector('label')
elementoParagrafo.style.color = 'black'
elementoLabel.style.color = '#005C78'



const elementoBotao = document.querySelector('#botao-resultado')
//Captura do evendo de click do botão
elementoBotao.ondblclick = function () {
    console.log('Fui clicado!')

    const elementoPeso = document.querySelector('#peso')
    const elementoAltura = document.getElementById('altura')
    const peso = parseInt(elementoPeso.value)
    const altura = parseFloat(elementoAltura.value)
    const imc = peso / (altura * altura)

    if (imc < 18.5) {
        elementoLabel.innerText = imc.toFixed(2) + ' - Abaixo do peso'
    } else if (imc > 18.5 && imc < 24.9) {
        elementoLabel.innerText = imc.toFixed(2) +  ' - Peso normal'
    }
}


