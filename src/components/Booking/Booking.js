import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
  const {user} = useAuth();
  const {id}= useParams();
  const [order,setOrder] = useState([]);
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data =>{ 
  // here order details
   data.name=user.displayName
   data.email=user.email
   data.offerName=order.name
   data.img= order.img
   data.price=order.price
   data.status ="pending";

  //  here post order
    axios.post('https://sheltered-temple-89838.herokuapp.com/orders',data)
    .then(res =>{
      if(res.data.insertedId){
        alert('Order Successful');
        reset();
      }
    })
  };
  
  useEffect(()=>{
    fetch(`https://sheltered-temple-89838.herokuapp.com/offers/${id}`)
    .then(res=> res.json())
    .then(data => setOrder(data))
   
  },[])
  
  return (
    <div className='booking'>
      <div className="container">
        <div className="row ">
           <div className="col-lg-8 border border-2  h-25 p-3 text-start">
             <img  src={order.img} alt="" />
              <div className="booking-details mt-3">
              <h2 className='mb-3'>{order.name}</h2>
             <p><i className="far fa-calendar-alt"></i> {order.duration}</p>
              <Rating className='rating text-warning '
               emptySymbol="far fa-star "
               fullSymbol="fas fa-star "
               readonly
              initialRating={order.rating}>
             </Rating>
             <h3 className='mt-3'><strong>${order.price}</strong></h3>
              </div>
           </div>

           {/* here book form here */}
           <div className="col-lg-4 booking-form">
             <h1>Book this package</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

      <input  type='text'defaultValue={user.displayName} {...register("displayName")}  />

      <input  type='email' defaultValue={user.email} {...register("email")} />

      <input placeholder='Mobile '  type='tel' {...register("mobile")} />

      <select className='me-2 order-select' {...register("packages")}>
        <option >Packages Type</option>
        <option >Business class</option>
        <option >other</option>
      </select>

    <div className="members d-flex justify-content-between">
    <select  className='me-2 order-select' {...register("MansType")}>
        <option value="other">Mans Type</option>
        <option value="couple">couple</option>
        <option value="single">single</option>
      </select>
      <select className='order-select' {...register("member")}>
        <option >members</option>
         <option >2</option>
         <option>4</option>
         <option>5</option>
         <option >6</option>
         <option >10</option>
      </select>
    </div>
  

    <input type='date' defaultValue="" {...register("date")} />

      <textarea {...register("message")} placeholder="Message.........." />
     
      <input className=' btn btn-primary' type="submit" />
    </form>
        </div>
           </div>
             </div>
                </div>
  );
};

export default Booking;