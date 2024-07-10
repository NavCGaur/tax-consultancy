import React from 'react';

import {ReactComponent as Menu} from '../../assets/menu.svg'

import './Header.css';

function Header() {
  return (
    <header className='header'>
        <div className='header__logoWrapper'>
            <div className='header__logo'>
                LOGO
            </div>
        </div>
        

        <nav className='header__navbar'>
            <a href='#' className='header__home'>
                Home
            </a>
            <a href='#about' className='header__about'>
                About Us
            </a>
            <a href='#services' className='header__services' >
                Services
            </a>
            
            <a href='#' className='header__contactButton' >
                Contact Us
            </a>
            
          
        </nav>

        <Menu  className='header__menu'/>


    </header>
  )
}

export default Header