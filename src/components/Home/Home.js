import React from 'react';
import Offers from '../Offers/Offers';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';

import './Home.css'

const Home = () => {
  return (
    <div >
      <Banner></Banner>
    <div className="about ">
    <div className="container">
        <div className="row about-details">
          <div className="col-lg-6 about-img">
            <img src="https://images.unsplash.com/photo-1619878796466-b7982b1d9263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="img" />
          </div>
          <div className="col-lg-6 fw-bold">
            <h1>
              A Simply Perfect Place <br /> To Get Lost</h1>
              <p>Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
          </div>
        </div>
      </div>
    </div>

    <Offers></Offers>
    <Reviews></Reviews>
    </div>
  );
};

export default Home;