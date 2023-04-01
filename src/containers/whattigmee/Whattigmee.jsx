import React from "react";
import Features from '../../containers/features/Features';
import'./whattigmee.css'

const Whattigmee = () => {
  return(
  <div className="tigmee__about section__margin" id="wtigmee">
    <div className="tigmee__about-feature">
    <h1 className="titre">What is TIGMEE ? </h1>
      <p className="aboutT">
       We're an online coworking space,unlike any other site, 
       you can live the experience in a 3 dimentional space where you can create your
       own avatar and use it to navigate throughout the website as if you
       are in your own HOME 
      </p>
      
    </div>

    <div className="tigmee__about-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    
    <div className="tigmee__about-container">
      <Features title="jaweher Hichri " text="Second year GLSI" />
      <Features title="Kalyl Oueslati" text="Second year GLSI" />
      <Features title="Zohour Mechergui" text="Second year GLSI" />
    </div>
  
   </div>
 
  
  );
}

export default Whattigmee;
