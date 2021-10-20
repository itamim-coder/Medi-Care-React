import React from 'react';
import { NavLink } from 'react-router-dom';

const NoResultFound = () => {
    return (
        <div>
            <h1 className="text-danger m-5 text-center">Page Not Found</h1>
            <div className="m-5 p-5 text-center">
            Apologies but it seems that the page you are looking for has either moved or doesn't exist.
            <br />
            <h6>Please return to the <NavLink to="/home">home page</NavLink> or consider searching the site to find
what you are looking for.</h6>
            </div>
        </div>
    );
};

export default NoResultFound;