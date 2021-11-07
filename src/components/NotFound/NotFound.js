import React from 'react';
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='error-div text-center'>
    {/* not found messege section */}
     <div className="container ">
       <div className="row">
         <div className="col  py-5">
           <h1 className='error'> 404 </h1>
           <h3 className='error-message'>Opps.. page not found</h3>
         </div>
       </div>
     </div>
  </div>
  );
};

export default NotFound;