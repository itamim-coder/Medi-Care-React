import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/photo-1624727828489-a1e03b79bba8.jpg'
import banner2 from '../../../images/photo-1624727828489-a1e03b79bba.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    return (
        <div>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block  w-100"
      src={banner1}
      alt="First slide"
    />
    <div className="hero-text">
        <h5>WELCOME TO OUR HOSPITAL</h5>
      <h1>TAKE CARE OF <br /> YOUR HEALTH </h1>
      <p>Every patient getting best care from us.</p>
      <button>Learn More</button>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

<div className="hero-text">
        <h5>WELCOME TO OUR HOSPITAL</h5>
      <h1>TAKE CARE OF <br /> YOUR HEALTH </h1>
      <p>We are a team of young professionals passionate in our work.</p>
      <button>Learn More</button>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

<div className="hero-text">
        <h5>WELCOME TO OUR HOSPITAL</h5>
      <h1>TAKE CARE OF <br /> YOUR HEALTH </h1>
      <p>Save your Money and Time with us</p>\
      <button>Learn More</button>
    </div>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;