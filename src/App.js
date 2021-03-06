import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';

import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import AboutUS from './Pages/AboutUS/AboutUS';
import NoResultFound from './Pages/NoResultFound/NoResultFound';
import Departments from './Pages/Departments/Departments';


function App() {
  return (
    <div >
   <AuthProvider>
   <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/departments">
            <Departments></Departments>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
           <Register></Register>
          </Route>
          <Route  path="/doctors">
           <Doctors></Doctors>
          </Route>
          <Route  path="/aboutus">
           <AboutUS></AboutUS>
          </Route>
         
          <PrivateRoute exact  path="/booking/:departmentId" >
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/appointment" >
            <Appointment></Appointment>
          </PrivateRoute>
          <Route exact  path="*">
           <NoResultFound></NoResultFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
       
      </Router>

   </AuthProvider>
 
    </div>
  );
}

export default App;
