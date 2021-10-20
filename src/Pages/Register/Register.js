import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'


const Register = () => {
  
    const{signInUsingGoogle} = useAuth()
   const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

const auth = getAuth();

    const handleRegistration = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password Should be 6 Charecter')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user =result.user;
            setError('');
            setUserName();
            console.log(user)
        })
        .catch(error=>{
            setError(error.message)

        });
       
    }
    const handleNameChange = e =>{
        setName(e.target.value)

    }
    const setUserName =() =>{
        updateProfile(auth.currentUser, { displayName: name})
        .then(result =>{

        })

    }
    const handleEmailChange = e =>{
       setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleRegistration}>
                <div className="signup-div">
                    <h1>Register</h1>
                    <p>Please fill in the form to create an account</p>
                    <hr />
                    <label htmlFor="text"><b>Name</b></label><br />
                    <input onBlur={handleNameChange} type="text" placeholder="Enter Name" id="name" required /><br />
                    <label htmlFor="email"><b>Email</b></label><br />
                    <input onBlur={handleEmailChange} type="email" placeholder="Enter Email" id="email" required />
                    <br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input onBlur={handlePasswordChange} type="password" placeholder="Enter Password" id="psw" required />
                    <br />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label><br />
                    <input type="password" placeholder="Repeat Password" id="psw-repeat" required />
                    <hr />
                    <input className="registerbtn" type="submit" value="Register" />
                    <h5>{error}</h5>
                    <div>
                        <p>Already have an account? <Link to="/login">Log In</Link> </p>
                       <p>Or</p>
                        <button
                        onClick={signInUsingGoogle}  className=" btn w-50 btn-regular">Google SignIn</button>
                
                    </div>
        
                </div>
            </form>
            
        </div>
    );
};

export default Register;