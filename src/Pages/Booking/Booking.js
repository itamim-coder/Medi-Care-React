import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams()
    const [serviceDetails ,setServiceDetails] = useState([]);

    const [displayDetails, setDisplayDetails] = useState({});

    useEffect(()=>{
    
        fetch('/dbDetails.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data.details))
    },[])

    useEffect(()=>{
        const foundData = serviceDetails.find(serve=>serve.id == serviceId)
        setDisplayDetails(foundData)
    },[serviceDetails])
//   const match = service.find(serv=>serv.id.includes(serviceId))
 
    return (
        <div className="details-container container">
           <div >
               <img src={displayDetails?.image} alt="" />

           </div>
           <div  >
               <h2>{displayDetails?.name}</h2>
               <p>{displayDetails?.description2}</p>
               <button className="btn">Book Now</button>


           </div>
            
        </div>
    );
};

export default Booking;