import './style.css'
import axios from 'axios'
import { useState, useEffect } from 'react'


function ListaCliente() {
    const [listaClientes, setListaClientes] = useState([])

    //Tudo dentro deste método será executado quando o componente for renderizado em tela.
    useEffect(() => {

        buscarClientesDoServidor()
        console.log('Entou dentro do useEffect')
        
    }, [])


    async function buscarClientesDoServidor() {
        //requisição para o servidor que irá retornar uma lista de clientes
        const retornoDaApi = await axios.get('https://reqres.in/api/users')
        
        setListaClientes(retornoDaApi.data.data)
    }


    return (
        <div>
            <h1> Listagm de Clientes </h1>
            <ul>
                {listaClientes.map((cliente, index) =>
                    <li key={index}>
                        <img src={cliente.avatar} />
                        {cliente.first_name + ' ' + cliente.last_name}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default ListaCliente