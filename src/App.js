import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Offers from './components/Offers/Offers';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import AllOrders from './components/Home/DashBoard/AllOrders/AllOrders';
import AddPackage from './components/Home/DashBoard/AddPackage/AddPackage';
import Booking from './components/Booking/Booking';
import Orders from './components/Home/DashBoard/Orders/Orders';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path ='/'>
         <Home></Home>
         </Route>
         <Route path='/home'>
         <Home></Home>
         </Route>
         <PrivateRoute path='/offers'>
          <Offers></Offers>
         </PrivateRoute>
         <PrivateRoute path='/orders'>
           <Orders></Orders>
          </PrivateRoute>
         <PrivateRoute path='/booking/:id'>
         <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute path='/all-order'>
        <AllOrders></AllOrders>
         </PrivateRoute>
         <Route path='/add-packages'>
         <AddPackage></AddPackage>
         </Route>
         <Route path='/signin'>
          <SignIn></SignIn>
         </Route>
         <Route path='*'>
        <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
