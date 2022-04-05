import './style.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UsuarioContext } from '../../App'


function Componente1({ nome }) {
  const [contador, setContador] = useState(0)
  const [usuario, setUsuario] = useContext(UsuarioContext)

  useEffect(()=> {
    console.log('O componente 1 foi renderizado.')
  },[])



  function incrementaVariavel() {
    setContador(contador + 1)
  }


    return (
      <div>
        <h1> Este h1 está no meu Componente1 {nome} </h1>

        <h1> Contador: {contador} </h1>
        <button onClick={incrementaVariavel}> Incrementar </button>

        <h1> Usuario logado: {usuario.nome} </h1>
       
      </div>
    );
  }
  
  export default Componente1;