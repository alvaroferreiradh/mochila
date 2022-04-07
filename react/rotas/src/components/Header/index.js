import { Link } from 'react-router-dom';
import './style.css'

function Header() {
  return (
    <div className='header-container'>
      <h1> Header </h1>

      <Link id="link" to="/"> Home </Link>
      <Link id="link" to="/componente1"> Componente1 </Link>
      <Link id="link" to="/componente2"> Componente2 </Link>
    </div>
  );
}

export default Header;