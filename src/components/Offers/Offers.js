import React, { useEffect, useState } from 'react';
import Offer from '../Offers/Offer/Offer'
import './Offers.css'
const Offers = () => {

  const [offers,setOffers] = useState(null);
  
  useEffect(()=>{
  setTimeout(()=>{
    fetch('https://sheltered-temple-89838.herokuapp.com/offers')
    .then(res => res.json())
    .then(data => setOffers(data))
  },2000)
     
  },[])

 
  
  return (
    <div className='container offers'>
   <div className="offers-details">
   <h1>Last Minute Offers</h1>
      <p>Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you <br/>
        dream about. See our recommendations.</p>
   </div>
   
      <div className="row row-cols-1 row-cols-md-3 g-4">
      
      {offers &&(
     offers.map(offer =><Offer
      key={offer._id}
      offer={offer}></Offer>)
       )}

      </div>

     {/* here add spinner */}
      {!offers && <div className='row'>
        <div className="col mt-5">
        <button className="btn btn-primary " type="button" >
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
          </div>
          </div>}
  
    </div>
  );
};

export default Offers;