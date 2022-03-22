import React from 'react';
import Plan from '../../Plan/Plan';
import Departments from '../Departments/Departments';


import Banner from './Banner/Banner';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Departments></Departments>
            <Works></Works>
            <Plan></Plan>
            
        </div>
    );
};

export default Home;