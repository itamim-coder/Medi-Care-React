import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {user, signInUsingGoogle} = useAuth();
    return (
        <div className="text-center">
<form action="">
<h1>User Login</h1>
<label htmlFor="email"> <b>User Email </b></label>
     <input type="text" placeholder="enter username" name="" id="" required /> <br />
     <label htmlFor="password"><b>Password </b></label>
      <input type="password" placeholder="enter password" name="" id="" required /> <br />
       <input type="submit" id="" /> 
       <p>or</p>
<h3>log in via</h3>
    <button
        onClick={signInUsingGoogle} className="btn w-50 btn-regular">Google SignIn</button>

        <p>Haven't any account? <NavLink to="/register">Register Here</NavLink> </p>
    </form>	
	</div>

    );
};

export default Login;