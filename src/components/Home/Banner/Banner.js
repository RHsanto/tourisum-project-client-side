import React from 'react';
import { Link } from 'react-router-dom';
import Slider1 from '../../../images/banner-1.jpeg'
import Slider2 from '../../../images/banner-2.jpeg'
import Slider3 from '../../../images/b-3.jpeg'
import Slider4 from '../../../images/ba-4.jpeg'
import '../Banner/Banner.css'
const Banner = () => {
  return (
    <div>
      <div className=" banner  mt-5">
        <div className="container-fluid p-0">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active slider">
      <img src={Slider1} class="d-block img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-inline-block">
      <div className="row">
        <div className="col-6">
        <div className="banner-details">
           <h1> Bring new experiences from each journey. 
             Meet different cultures, traditions and landscapes.
              Choose your next destination and start your trip.</h1>
           <Link to='/offers'><button type="button" className="btn btn-warning mt-3"><i className="fas fa-location-arrow"></i> Book Now</button></Link>
      </div>
        </div>
      </div>
      </div>
    </div>
    <div class="carousel-item slider">
      <img src={Slider2} class="d-block img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-inline-block">
      <div className="row">
        <div className="col-6">
        <div className="banner-details">
           <h1> Bring new experiences from each journey. 
             Meet different cultures, traditions and landscapes.
              Choose your next destination and start your trip.</h1>
           <Link to='/offers'><button type="button" className="btn btn-warning mt-3"><i className="fas fa-location-arrow"></i> Book Now</button></Link>
      </div>
        </div>
      </div>
      </div>
    </div>
    <div class="carousel-item slider">
      <img src={Slider3} class="d-block img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-inline-block">
      <div className="row">
        <div className="col-6">
        <div className="banner-details">
           <h1> Bring new experiences from each journey. 
             Meet different cultures, traditions and landscapes.
              Choose your next destination and start your trip.</h1>
           <Link to='/offers'><button type="button" className="btn btn-warning mt-3"><i className="fas fa-location-arrow"></i> Book Now</button></Link>
      </div>
        </div>
      </div>
      </div>
    </div>
    <div class="carousel-item slider">
      <img src={Slider4} class="d-block img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-inline-block">
      <div className="row">
        <div className="col-6">
        <div className="banner-details">
           <h1> Bring new experiences from each journey. 
             Meet different cultures, traditions and landscapes.
              Choose your next destination and start your trip.</h1>
           <Link to='/offers'><button type="button" className="btn btn-warning mt-3"><i className="fas fa-location-arrow"></i> Book Now</button></Link>
      </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;