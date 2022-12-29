import React, { useState } from "react";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./styles.css";

const Menu = () => (
  <>
    <a href='#home'>Home</a>
    <a href='#whatisgpt'>What Is GPT? </a>
    <a href='#possibility'>Open AI</a>
    <a href='#casestudies'>Case Studies</a>
    <a href='#library'>Library</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='gpt3__navbar-sign'>
        <button className='btn_secondary'>Sign In</button>
        <button className='btn_primary'>Sign Up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='white'
            size={37}
            cursor='pointer'
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='white'
            size={27}
            cursor='pointer'
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />

              <div className='gpt3__navbar-menu_container-links-sign'>
                <button className='btn_secondary-menu'>Sign In</button>
                <button className='btn_primary-menu'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
