import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';



const SignIn = () => {
const { handleLogIn}= useAuth();
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/';

const signInWithGoogle=()=>{
handleLogIn()
.then(result=>{
  history.push( redirect_uri);
    })
}
  return (
    // here login-form
     <div className="container login-form">
      <div className="row  shadow-lg  m-5 p-5">
        <div className="col  my-5">
          <h1 className='mb-5'>Please Login</h1>
        <button onClick={signInWithGoogle} className="btn btn-success">
        <i className="fab fa-google me-2 fs-4"></i> 
          Sign in with Google 
        </button>
        </div>
      </div>
     </div>
    
  );
};

export default SignIn;