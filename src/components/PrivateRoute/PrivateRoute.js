import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
  const {user,isLoading}=useAuth();

  if(isLoading){
    return <div class="text-center loading">
   <button class="btn btn-primary" type="button" >
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>

  </div>
  }

  return (
    <div>
    <Route
   {...rest}
   render={({ location }) =>
     user.email ? (
       children
     ) : (
       <Redirect
         to={{
           pathname: "/signin",
           state: { from: location }
         }}
       />
     )
   }
 />
</div>
  );
};

export default PrivateRoute;