import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import CadastroCliente from './pages/CadastroCliente'


function App() {

  const [qualTelaERenderizada, setQualTelaERenderizada] = useState('home')

  return (
    <div className="App">
      <Header />

      {qualTelaERenderizada === 'home' ? <Home /> : <CadastroCliente />}

      <button onClick={() => {

        setQualTelaERenderizada('cadastroCliente')

      }} > Trocar de tela </button>



    </div>
  );
}

export default App;
