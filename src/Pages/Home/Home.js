import React from 'react';
import Plan from '../../Plan/Plan';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <Works></Works>
            <Plan></Plan>
            
        </div>
    );
};

export default Home;