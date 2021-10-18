import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, image, description1} = service;
    return (
        <div className="card">
            
            <img className="fluid" src={image} alt="" />
           <div className="card-body">
           <h3>{name}</h3>
            <p>{description1}</p>
           </div>
           <div>
          <Link to={`/booking/${id}`}>
          <button>Details</button>
          </Link>
           </div>
        </div>
    );
};

export default Service;