import React from 'react';
import Rating from 'react-rating';
import './Reviews.css'
const Reviews = () => {
  return (
    <div className='reviews my-5'>
      <div className="container-fluid">
        <div className="row ">
        <div className="col-lg-6 review-img p-0">
            <img className='' src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
        <div className="col-lg-6 slide p-0">
           <div className="review-img-2 ">
           <div className="reviews-title text-light pt-5">
           <h1>Our Top Reviews</h1>
           </div>
           
  {/* here reviews slider */}
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="reviews-details  text-light">
             <h4>Panama</h4>
             <Rating className='rating text-warning'
                 emptySymbol="far fa-star "
                 fullSymbol="fas fa-star "
                 readonly
                 initialRating={4.5}
                  > 
            </Rating> 
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinationWhen it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <h4>Tanvir ahmed</h4>
            <img className='customer-img' src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
             </div>
    </div>
    <div className="carousel-item">
    <div className="reviews-details text-light">
            
             <h4>japan</h4>
             <Rating className='rating text-warning'
                 emptySymbol="far fa-star "
                 fullSymbol="fas fa-star "
                 readonly
                 initialRating={4}
                  > 
            </Rating> 
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinationWhen it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <h4> paula bertu</h4>
            <img className='customer-img' src="https://images.unsplash.com/photo-1620075225255-8c2051b6c015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80" alt="" />
             </div>
    </div>
    <div className="carousel-item">
    <div className="reviews-details text-light">
            
             <h4>France</h4>
             <Rating className='rating text-warning'
                 emptySymbol="far fa-star "
                 fullSymbol="fas fa-star "
                 readonly
                 initialRating={4}
                  > 
            </Rating> 
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinationWhen it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <h4>Adam zampa</h4>
            <img className='customer-img' src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80" alt="" />
             </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
           </div>

           {/* slider under */}
          
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Reviews;