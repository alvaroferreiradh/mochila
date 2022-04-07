import './style.css'
import { useContext } from 'react'
import { UsuarioContext, TemaContext } from '../../App'


function Componente2({ endereco }) {
  const [usuario, setUsuario] = useContext(UsuarioContext)
  const [tema, setTema] = useContext(TemaContext)

  function mudaUsuario() {
    setUsuario({
      id: 2,
      nome: 'Pedro',
      telefone: '1351351351',
      email: 'pedro@dh.com'
    })

    setTema('escuro')
  }

    return (
      <div>
        <h1> Telefone do usuario: {usuario.telefone} </h1>
        <h1> Tema da aplicação: {tema} </h1>

        <button onClick={mudaUsuario}> Mudar de usuario </button>
       
      </div>
    );
  }
  
  export default Componente2;