import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css'
const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" className="nav-bar "  variant="dark">
  <Container>
  <Navbar.Brand href="/home">Medi-Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="nav-btn" to="/home">Home</NavLink>
      <NavLink  className="nav-btn" to="/departments">Departments</NavLink>
      <NavLink className="nav-btn" to="/doctors">Doctors</NavLink>
      <NavLink className="nav-btn" to="/appointment">Appointment</NavLink>
      <NavLink className="nav-btn" to="/aboutus">About Us</NavLink>
     
    </Nav>
    <Nav>
  { 
  user.email?
  
  <Navbar.Text>
     <button className="sign-btn"onClick={logOut}>Sign Out</button> 
  <span className="login-name"> Signed in as: {user.displayName}</span>
</Navbar.Text>
  :
  <NavLink to="/login">
     <button className="sign-btn">Sign In</button>
   </NavLink>}
 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;