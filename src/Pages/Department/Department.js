import React from 'react';
import { Link } from 'react-router-dom';
import './Department.css'

const Department = ({department}) => {
    const {_id, name, image, description1} = department;
    return (
        <div className="card">
            
            <img className="fluid" src={image} alt="" />
           <div className="card-body">
           <h3>{name}</h3>
            <p>{description1}</p>
           </div>
           <div>
          <Link to={`/booking/${_id}`}>
          <button className="btn">Details</button>
          </Link>
           </div>
        </div>
    );
};

export default Department;