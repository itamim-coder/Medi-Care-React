import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {departmentId} = useParams()
    const [departmentDetails ,setDepartmentDetails] = useState({});

 

    useEffect(()=>{
        fetch(`https://guarded-scrubland-50681.herokuapp.com/department/${departmentId}`)
        .then(res => res.json())
        .then(data => setDepartmentDetails(data))
    },[])

 
 
    return (
        <div className="details-container container">
           <div >
               <img src={departmentDetails?.image} alt="" />
               <h2>{departmentDetails?.name}</h2>
               <p>{departmentDetails?.description1}</p>
               

           </div>
           <div  >
           <button className="btn">Book Now</button>
             


           </div>
            
        </div>
    );
};

export default Booking;