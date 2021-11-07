import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <footer >
      {/* start footer  section*/}
      <div className="container p-5">
      <div className="row">
        <div className="col-lg-4 text-start">
          <h2 > DESHGHURI</h2>
          <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means</p>
          {/* here footer icon */}
          <div className="footer-icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
        <div className="col-lg-4 ">
            {/* here footer nav bar */}
           <div className="footer-nav  mt-4">
              <ul>
        <NavLink to ='/home'><li>Home</li> </NavLink>
        <NavLink to ='/tours'><li >Tours</li></NavLink>
        <NavLink to ='/blog'><li>Blog</li></NavLink>
        <NavLink to ='/offers'><li >Offers</li></NavLink>
        <NavLink to ='/contact'><li >Contact</li></NavLink>
             </ul>
           </div>
          
        </div>
        {/* search bar here */}
        <div className="col-lg-4 ">
            <h4 className=' fw-bold mt-5 text-dark'>Search Your Destination</h4>
            <input className='p-2 fs-6' type="text" placeholder='Search' />
            <button className='border-0 arrow bg-warning'><i className="fas fa-arrow-right"></i></button>
         </div>
      </div>
   </div>
      <div className="copyright bg-secondary ">
         <p className='text-light '>Copyright © 2021 deshghuri.com</p>
          </div>
 </footer>
  );
};

export default Footer;