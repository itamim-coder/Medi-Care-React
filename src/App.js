import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Service from './Pages/Service/Service';
import Booking from './Pages/Booking/Booking';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/booking/:serviceId" >
            <Booking></Booking>
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
