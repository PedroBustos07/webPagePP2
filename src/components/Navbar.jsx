import '../styles/navBar.css';
import logoBoulevard from '../assets/BLPNG.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navBar' id='navBarId'>
      <div className='navBar-icono'>
        <a href=''>
          <img src={logoBoulevard} alt='logoBoulevard' />
        </a>
      </div>
      <div className='navBar-links'>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
            <Link to='/AboutUs'>Sobre Nosotros</Link>
            <Link to='#'>Menu</Link>
            <a href='#footer'>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
