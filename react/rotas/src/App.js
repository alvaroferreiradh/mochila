import { createContext, useState } from 'react'
import Routes from './Routes';
import Header from './components/Header'

export const UsuarioContext = createContext()
export const TemaContext = createContext()

function App() {
  const [usuario, setUsuario] = useState({
    id: 132,
    nome: 'Álvaro',
    telefone: '+55(11)91611042',
    email: 'alvaro@dh.com'
  });

  const [tema, setTema] = useState('claro')

  return (
    <UsuarioContext.Provider value={[usuario, setUsuario]}>
      <TemaContext.Provider value={[tema, setTema]}>

        <Routes />
      
      </TemaContext.Provider>
    </UsuarioContext.Provider>
  );
}

export default App;
