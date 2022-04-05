import Componente1 from './components/Componente1'
import Compoenete2 from './components/Componente2'
import { createContext, useState } from 'react'

export const UsuarioContext = createContext()

function App() {
  const [usuario, setUsuario] = useState({
    id: 132,
    nome: 'Álvaro',
    telefone: '+55(11)91611042',
    email: 'alvaro@dh.com'
  });

  return (
    <UsuarioContext.Provider value={[usuario, setUsuario]}>

      <Componente1 nome="Roberto" />

      <hr />

      <Compoenete2 endereco="Rua Juca Marcedo, 820" />
     
     
    </UsuarioContext.Provider>
  );
}

export default App;
