import React from 'react';
import './Header.css'
import {  Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
  const {user,logOut}=useAuth();
  
  return (
    <div className='container-fluid fixed-top  bg-light'>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        
     <div className="container-fluid ">
   <div className="col-lg-4  ">
   <NavLink to='/' className="navbar-brand logo " href="/"> DESHGHURI</NavLink>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="col-lg-10 ">
     <div className="navbar-nav d-flex justify-content-center align-items-center">
        <NavLink to ='/home'><li>Home</li> </NavLink>
        <NavLink to ='/offers'><li >Offers</li></NavLink>
       
      {user.email ?
      <>
       <NavLink to ='/all-order'><li>Manage all order</li></NavLink>
        <NavLink to ='/add-packages'><li> Add package</li></NavLink>
        
     </> : <></>}
       
  <div className="login ms-2 d-flex justify-content-center align-items-center">
  {
    user.email ? 
    <>
   
    <div className="dropdown ">
      <button className="btn   dropdown-toggle mx-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       <span className=' name'>{user.displayName}</span>
     </button>
     <ul className="dropdown-menu mt-2 " aria-labelledby="dropdownMenuButton1">
     <img className=' rounded-circle' src={user.photoURL}alt="img" />
         <Link to='/orders'><li className='text-dark items text-center'><i className="fas fa-bookmark"></i> My orders</li></Link>
        <button onClick={logOut}  className="btn btn-outline-danger  w-100"><i className="fas fa-sign-out-alt"></i> logout</button>
      </ul>
    </div>
   
    
    </>
     :<Link to ='/signin'>
       <button className='btn btn-primary ms-2 w-100'>
         Sign In 
         <i className="fas fa-sign-in-alt">
           </i></button></Link>
  }
  </div>

 
  </div>
     </div>
    </div>
  </div>
</nav>
    </div>


  );
};

export default Header;
