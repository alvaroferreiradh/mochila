import './style.css'
import { useContext } from 'react'
import { UsuarioContext } from '../../App'


function Componente2({ endereco }) {
  const [usuario, setUsuario] = useContext(UsuarioContext)

  function mudaUsuario() {
    setUsuario({
      id: 2,
      nome: 'Pedro',
      telefone: '1351351351',
      email: 'pedro@dh.com'
    })
  }

    return (
      <div>
        <h1> Este h1 está no meu Componente2 {usuario.telefone} </h1>

        <button onClick={mudaUsuario}> Mudar de usuario </button>
       
      </div>
    );
  }
  
  export default Componente2;