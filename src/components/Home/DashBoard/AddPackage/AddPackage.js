import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css'
const AddPackage = () => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('https://sheltered-temple-89838.herokuapp.com/offers',data)
    .then(res =>{
      console.log(res);
      if(res.data.insertedId){
        alert('Order Successfully');
        reset();
      }
    })
  
};

  
  return (
    <div className='add-packages'>
      <h1>Add a New package here !</h1>
   <div className='container'>
     
    <form className=' ' onSubmit={handleSubmit(onSubmit)}>
    
      <input type='text' placeholder='enter img link' {...register("img", { required: true })} />

      <input type='text' placeholder='enter package name'  {...register("name", { required: true })} />

      <input type='number' placeholder='enter price'   {...register("price", { required: true })} />

      <input  type='number' placeholder='enter ratings'   {...register("rating", { required: true })} />

       <select   className='me-2' {...register("duration" , { required: true })}>
        <option >package duration</option>
        <option >3 days / 4 Night</option>
        <option >4 days / 5 Night</option>
        <option >6 days / 7 Night</option>
        <option >7 days / 8 Night</option>
      </select>
      

      <input className='btn-danger' type="submit" />
     
    </form>
        
  </div>
  </div>

    
  );
};

export default AddPackage;