import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import  './Offer.css'
const Offer = (props) => {
  const{_id,name,img,duration,rating,price}=props.offer;

  

  return (
   
    <div className='offer'>
      <div className="col">
      <div className="card text-start">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
       <p><i className="far fa-calendar-alt"></i> {duration}</p>
       <div className="d-flex justify-content-between"><p>Price: <strong>${price}</strong></p> <Rating className='rating text-warning'
      emptySymbol="far fa-star "
      fullSymbol="fas fa-star "
      readonly
      initialRating={rating}
      > </Rating></div>
      <Link to ={`/booking/${_id}`} >
      <button className="btn btn-warning"><i className="fas fa-location-arrow"></i> Book now</button>
      </Link>
          </div>
              </div>
                  </div>
                      </div>
        
     
    
  );
};

export default Offer;