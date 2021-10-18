import React from 'react';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;