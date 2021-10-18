import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams()
    const [service ,setService] = useState();

    useEffect(()=>{
        const url = `service.json`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
  
    
    return (
        <div>
            <h3>book</h3>
        </div>
    );
};

export default Booking;