import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
 


  <footer className="footer">
    <div className="footer-container">
      
      <div className="footer-box">
        <div className="parent  d-flex">
        <i className="fas fa-map-marker-alt icon"></i>
        <h4>Address</h4>
        </div>
        <div className="footer-text">
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
        </div>
      </div>

      <div className="footer-box">
       <div className="parent d-flex ">
         <i className="fas fa-phone icon"></i>
       <h4>Contact</h4></div>
        <div className="footer-text">
          <p><strong>Phone:</strong> +1 5589 55488 55</p>
          <p><strong>Email:</strong> info@example.com</p>
        </div>
      </div>

      <div className="footer-box">
       <div className="parent d-flex">
       <i className="fas fa-clock icon"></i>
       <h4>Opening Hours</h4>
       </div>
        <div className="footer-text">
          <p><strong>Mon-Sat:</strong> 11AM - 23PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
      </div>

      <div className="footer-box">
        <h4>Follow Us</h4>
        <div className="social-icons ">
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p className='p-0 m-0'>&copy; Copyright <strong>Yummy</strong> All Rights Reserved</p>
      <p>Designed by <a href="#">Anas Sameh</a></p>
    </div>
  </footer>



 


    
 </>
  )
}
