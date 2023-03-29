import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaBars, FaTimes} from 'react-icons/fa';
import'./navbar.css';
import logo from '../../logo.png';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="tigmee__navbar">
      <div className="tigmee__navbar-links_logo">
          <img src={logo} />
        </div>

      <div className="tigmee__navbar-links">
        
        <div className="tigmee__navbar-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#calender">Calender</a></p>
          <p><a href="#agenda">agenda</a></p>
          <p><a href="#contact">contact</a></p>
        </div>

      </div>
      <div className="tigmee__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="tigmee__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
</div>
      {toggleMenu && (
        <div className="tigmee__navbar-menu_container">
            
            <nav className="tigmee__navbar-menu">
            <ul className="side-nav">
              <li className="is-active"><span><a href="">Home</a></span></li>
              <li ><span><a href="">Calender </a></span></li>
              <li><span><a href="">Agenda </a></span></li>
              <li><span><a href="">contact </a></span></li>
             
            </ul>
          </nav>
            <div className="tigmee__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
        </div>
        )}     
      </div>
 
  );
};
export default NavBar;
