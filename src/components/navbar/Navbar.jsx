import './navBar.css';
import logoBoulevard from '../../assets/BLPNG.png';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import shoppingCartIcon from '../../assets/shopping-cart-icon.png';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

export default function Navbar({ showCart }) {
  const { listShopping } = useContext(CarritoContext);
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
            <Link to='/Menu'>Menu</Link>
            <a href='#footer'>Contacto</a>
            {showCart && (
              <Badge
                badgeContent={listShopping.length}
                color='primary'
                className='customBadge'
              >
                <Link to='/carrito' className='contentCartIcon'>
                  <img src={shoppingCartIcon} alt='' />
                  <span>carrito</span>
                </Link>
              </Badge>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
