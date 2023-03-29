import React from "react";
import Feature from '../../components/feature/Feature';
import'./whattigmee.css'

const Whattigmee = () => {
  return(
  <div className="tigmee__about section__margin" id="wtigmee">
    <div className="tigmee__about-feature">
   
      <Feature title="What is Tigmee" text=" We're an online coworking space,unlike any other site, 
      you can live the experience in a 3 dimentional space where you can create your
      own avatar and use it to navigate throughout the website as if you
       are in your own HOME ." />
    </div>

    <div className="tigmee__about-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="tigmee__about-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  );
}

export default Whattigmee;
