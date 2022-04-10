import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutFrom from '../Payment/CheckoutFrom'
const stripePromise = loadStripe('pk_test_51KhZXZJEFDR0SzPKcBACFl3mmPiFnr7LLuOrwbw1KVg7PbnggYBJN6v2cl2Kmz4Dzz8WqzXqGaZMY6eItBagkMAh001LMbPY0q')
const Payment = () => {
  const {id}=useParams();
  const [orders,setOrders]=useState([])

  useEffect(()=>{
fetch(`http://localhost:5000/order/${id}`)
.then(res=>res.json())
.then(data=>setOrders(data))

  },[id])
  return (
    <div className='mt-5'>
      <h2>Please pay for : {orders?.offerName} </h2>
        <h3>Pay : {orders?.price}</h3>
        <Elements stripe={stripePromise}>
      <CheckoutFrom
      orders={orders}
       />
    </Elements>
    </div>
  );
};

export default Payment;