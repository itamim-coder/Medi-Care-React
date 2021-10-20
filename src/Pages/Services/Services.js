import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('db.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
    <div>
        <h1 className="text-center m-3">Services</h1>
            <div className="services-container container">
            
            {
                services.map(service => <Service
                key={service.id}
                service = {service}
                >
 
                </Service> )
            }
         </div>
    </div>
    );
};

export default Services;