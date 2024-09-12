import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-heading'>
          <h1>ABOUT Celeste</h1>
        </div> 

        <div className='who-are-we'>
          <h2>OUR STORY</h2>
          <p>At Celeste, we're passionate about capturing the essence of the stars and bringing their twinkling magic into your home. Our journey began with a shared love of celestial wonder and a desire to create warm, inviting spaces that inspire connection and joy. With every candle, we aim to bottle the soft glow of a starry night, carefully crafting each scent and every detail to transport you to a place of serenity and peace. Whether you're seeking comfort, relaxation, or a touch of magic, we invite you to ignite the sparkle within with Celeste.
          </p>
        </div>

        <div className='about-para'>
          <h2>OUR COMMITMENT</h2>
          
        </div>
      </div>
    
    </>
  );
}

export default About;