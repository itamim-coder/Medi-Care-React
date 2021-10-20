import React from 'react';
import plan1 from '../images/plan/hospital-bed.png'
import plan2 from '../images/plan/blood-tube.png'
import plan3 from '../images/plan/emergency-services.png'
import './Plan.css'

const Plan = () => {
    return (
        <div className="container">
            
            <h2 className="text-center m-5">Plans</h2>
  
<div class="row plan-div ">
  <div class="column">
    <div class="card">
     
          <img className="plan-img" src={plan1} alt="" />
      <div class="container">
        <h2>Basic</h2>
        <p class="title">For A Month</p>
        <h1>$39</h1>
        <p>Weekly health check-ups</p>
        <hr />
        <p>Lab test system an hour</p>
        <hr />
        <p>Free diet consultation</p>
        <hr />
        <p>Custom Exercise Plans</p>
        <p><button class="button">Get Started</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
     
     <img className="plan-img" src={plan2} alt="" />
      <div class="container">
      <h2>Standard</h2>
        <p class="title">For A Month</p>
        <h1>$49</h1>
        <p>Weekly health check-ups</p>
        <hr />
        <p>Lab test system an hour</p>
        <hr />
        <p>Free diet consultation</p>
        <hr />
        <p>Custom Exercise Plans</p>
        <p><button class="button">Get Started</button></p>
      </div>
    </div>
  </div>
  
  <div class="column ">
    <div class="card">
     
          <img className="plan-img" src={plan3} alt="" />
      <div class="container">
      <h2>Professional</h2>
        <p class="title">For A Month</p>
        <h1>$59</h1>
        <p>Weekly health check-ups</p>
        <hr />
        <p>Lab test system an hour</p>
        <hr />
        <p>Free diet consultation</p>
        <hr />
        <p>Custom Exercise Plans</p>
        <p><button class="button">Get Started</button></p>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Plan;