import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';


const Orders = () => {
 const [orders,setOrders] = useState([]);
 const{user}=useAuth();

useEffect(()=>{
fetch(`https://sheltered-temple-89838.herokuapp.com/orders/${user.email}`)
.then(res=> res.json())
.then(data=> setOrders(data))

  },[])
  
  // here orders delete
  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure , you want to delete ?');
    if(proceed){
      const url =`https://sheltered-temple-89838.herokuapp.com/orders/${id}`
      fetch(url,{
          method: 'DELETE'
  
      })
          .then(res => res.json())
          .then(data =>{
              if(data){
               alert('Deleted successfully')
               const remaining = orders.filter(order => order._id !== id)
                 setOrders(remaining)
              }
          })
  }
    
  }
  return (
    <div className='order-section '>
      <h3 className='my-5' ><span className='text-primary'>{user.displayName} </span>Here your order summary</h3>
      {/* here all orders */}
    {
    orders.map(order=><div key={order._id}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
        <div className="card mb-3">
         <div className="row g-0">
         <div className="col-md-5">
          <img  src={order.img} className="img-fluid h-100 rounded-start" alt="..."/>
         </div>
        <div className="col-md-7">
         <div className="card-body text-start">
        <h3 className="card-title">{order.offerName}</h3>
        <h6 className="card-title">Service Type : {order.packages}</h6>
        <h6 className="card-title">Tourist Type : {order.MansType} </h6>
        <h6 className="card-title">Tourist  : {order.member} person </h6>
        <h6 className="card-text">Price : ${order.price}</h6>
        <h6 className="card-text">Booked time : {order.date}</h6>
        <p className="card-text"></p>
        <div className="members d-flex justify-content-between">
          <strong className='text-success'>{order.status}</strong>
         <div onClick={()=>handleDelete(order._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> Delete</div>
        </div>
            </div>
               </div>
                  </div>
              </div>
         </div>
      </div>
    </div>
 </div>)
    }
     
    </div>
  );
};

export default Orders;