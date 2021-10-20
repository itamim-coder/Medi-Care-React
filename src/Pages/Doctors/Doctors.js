import React from 'react';
import { NavLink } from 'react-router-dom';
import dr1 from '../../images/doctors/team-01.jpg' 
import dr2 from '../../images/doctors/team-02.jpg' 
import dr3 from '../../images/doctors/team-03.jpg' 
import dr4 from '../../images/doctors/team-04.jpg' 
import dr5 from '../../images/doctors/team-05.jpg' 
import dr6 from '../../images/doctors/team-06.jpg' 
import './Doctors.css'

const Doctors = () => {
    return (
        <div>
            <h2 className="text-center m-5">Doctors</h2>
            
<div class="row doctors-div ">
  <div class="column">
    <div class="card">
     
          <img src={dr1} alt="Jane" />
      <div class="container">
        <h2>Dr Rase</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><NavLink to="/appointment"><button class="button">Appoint</button></NavLink></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={dr2} alt="Jane"  />
      <div class="container">
        <h2>Sandra</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><NavLink to="/appointment"><button class="button">Appoint</button></NavLink></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={dr3} alt="Jane"  />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><NavLink to="/appointment"><button class="button">Appoint</button></NavLink></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <img src={dr4} alt="Jane" />
      <div class="container">
        <h2>James</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><NavLink to="/appointment"><button class="button">Appoint</button></NavLink></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <img src={dr5} alt="Jane" />
      <div class="container">
        <h2>John Lee</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><NavLink to="/appointment"><button class="button">Appoint</button></NavLink></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <img src={dr6} alt="Jane" />
      <div class="container">
        <h2>John Hadin</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><NavLink to="/appointment"><button class="button">Appoint</button></NavLink></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Doctors;