import './style.css'


function Header(props) {

    console.log('Renderizando o header', props)

    return (
        <div>
            <h1> Este é o meu componente Header, {props.tituloDaPagina} </h1>
        </div>
    )

}


export default Header