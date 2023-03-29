import imag1 from './imag1.png';
import React from "react";
import'./header.css'

const Header = () => {
  return (
    <div className="tigmee__header section__padding" id="home">
    <div className="tigmee__header-content">

      <h1 className="gradient__text"> Home is not  a place, It's a feeling</h1>
   
      <div className="tigmee__header-content__input ">
        <button type="button">Join us</button>
      </div>
   
    </div> 

 
    <div className="tigmee__header-image">
        <img src ={imag1} alt= "imag1"/>  
      </div>
  </div>
  );
}

export default Header;
