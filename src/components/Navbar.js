import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Bibliotech
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Principal
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/prestamos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Prestamos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/libros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Libros
            </Link>
          </li>
          <li>
            <Link
              to='/iniciar-sesión'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Iniciar sesión
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
