import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';
import './Departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/department')
        .then(res => res.json())
        .then(data => setDepartments(data));
    },[])
    return (
    <div>
        <h1 className="text-center m-3">Departments</h1>
            <div className="departments-container container">
            
            {
                departments.map(department => <Department
                key={departments.id}
                department = {department}
                >
 
                </Department> )
            }
         </div>
    </div>
    );
};

export default Departments;