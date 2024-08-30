import '../styles/navBar.css';
import logoBoulevard from '../assets/BLPNG.png';

export default function Navbar() {
  return (
    <div className='navBar'>
      <div className='navBar-icono'>
        <a href=''>
          <img src={logoBoulevard} alt='logoBoulevard' />
        </a>
      </div>
      <div className='navBar-links'>
        <ul>
          <li>
            <a href='#'>Inicio</a>
            <a href='#'>Sobre Nosotros</a>
            <a href='#'>Menu</a>
            <a href='#'>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
