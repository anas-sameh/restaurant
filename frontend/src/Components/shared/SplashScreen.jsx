import React from 'react';
import './SplashScreen.css';

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
          alt="طبق"
          className="splash-img"
        />
        <h1 className="splash-title ">Yummy</h1>
        <div className="intro">
        
        
        <span  className='design_by'>Design by </span> 
        <span className='my_name'>Anas Sameh</span>
              </div>

      </div>
    </div>
  );
} 