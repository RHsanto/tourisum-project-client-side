import React, { useEffect, useState } from 'react';


const AllOrders = () => {
   
  const [allOrders,setAllOrders] = useState([]);
 

  useEffect(()=>{
    fetch('https://sheltered-temple-89838.herokuapp.com/orders')
    .then(res=> res.json())
    .then(data=> setAllOrders(data))
    
      },[])

      // here orders status update
    const updateOrders = id=>{
    const url = `https://sheltered-temple-89838.herokuapp.com/orders/${id}`
    fetch(url,{
      method: "PUT",
      headers: {"content-type": "application/json"},
      body:JSON.stringify(allOrders)

    })
   .then(res=> res.json())
   .then(data=>{
      console.log(data);
      alert('Order Approved')
     window.location.reload()
   })
}

     
     // Here orders delete
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
                    const remaining = allOrders.filter(allOrder => allOrder._id !== id)
                    setAllOrders(remaining)
                   }
               })
       }
         
       }
  return (
 <div className="all-order">
    <div className="container">
       <h1 className='my-5'> Here all Orders</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
       {
         allOrders.map(order=>
         <div key={order._id}>
            <div className="card mb-3">
             <div className="row g-0">
               <div className="col-md-5">
                <img src={order.img} className="img-fluid h-100 rounded-start" alt="..."/>
              </div>
           <div className="col-md-7">
        <div className="card-body text-start">
      <h3 className="card-title">{order.offerName}</h3>
  <h6 className="card-title">Person : {order.member}</h6>
      <h6 className="card-title">Price : ${order.price}</h6>
      <h6 className="card-title">Booked by <strong>{order.name}</strong></h6>
         <h6 className="card-title">Date : {order.date}</h6>
            <p className="card-text"></p>
              <div className="members d-flex justify-content-between">
                 <div onClick={()=>updateOrders(order._id)} >
                    {
                       order.status === "pending" ?  <div className="btn btn-success"> Approved </div> : <p className='text-primary'>Approved</p>
                    }
                     </div>
                 <div onClick={()=>handleDelete(order._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i> Delete</div>
              </div>
           </div>
       </div>
    </div>
</div>
    </div>)}
       </div>
          </div>  
             </div>
  );
};
 

export default AllOrders;