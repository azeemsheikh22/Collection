import React, { useState } from 'react'
import './Navbar.css';
import {RiMenu3Line, RiCloseLine}  from 'react-icons/ri';
import logo from '../../Image/logo.svg';

// BEM -> Block Element Modifier//

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
   <div className='gpt3__navbar-link'>
    <div className='gpt3__navbar-links_logo'>
      <img src={logo} alt='logo'/>
    </div>
    <div className='gpt3__navbar-links_container'>
      <p><a href='#home'></a>Home</p>
      <p><a href='#wgpt3'></a>What is GPT?</p>
      <p><a href='#posibility'></a>Open AI</p>
      <p><a href='#features'></a>Case Studies</p>
      <p><a href='#blog'></a>Library</p>

    </div>
   </div>
   <div className='gpt3__navbar-sign'>
    <p>Sign in</p>
    <button type='button'>Sign up</button>
   </div>
   <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>

   
    </div>
  )
}

export default Navbar;
