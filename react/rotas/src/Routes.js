//imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Rodape from './components/Rodape'

function MyRoutes() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/componente1" element={<Componente1 />} />
                <Route path="/componente2" element={<Componente2 />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Rodape />
            
        </BrowserRouter>
    )
}

export default MyRoutes
