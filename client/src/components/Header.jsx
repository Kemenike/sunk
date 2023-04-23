import React from 'react'
import gameTitle from '../assets/sunk_no_bg.png';
import './Header.css';

function Header() {
  return (
    <div id='header__container'>
      <img src={gameTitle} alt="" className="header__title_img" />
    </div>
  )
}

export default Header