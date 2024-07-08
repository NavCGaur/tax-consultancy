import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
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


    </div>
  )
}

export default Header