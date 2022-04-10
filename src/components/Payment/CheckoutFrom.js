import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutFrom = ({orders}) => {
  const {price} = orders;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e)=>{
    e.preventDefault();
  
    if(!stripe || elements){
      return
    }

    const card = elements.getElement(CardElement);
    if(card === null){
      return
    }
  
     const {error, paymentMethod} = await stripe.createPaymentMethod({
       type:"card" ,
       card

      });

      if(error){
        console.log(error);
      }
    
      else{
        console.log(paymentMethod);
      }
  }
  return (
    <div>
  <div className="container my-5">
    <div className="row mt-5">
      <div className=" col-lg-4 mx-auto">
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary' type="submit" disabled={!stripe}>
        Pay : {price}tk
      </button>
    </form>
      </div>
    </div>
  </div>
    </div>
  );
};

export default CheckoutFrom;