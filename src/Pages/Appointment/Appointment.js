import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
     
<div class="container-appointment ">
  <form action="">
  <div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Appointment DR</label>
    </div>
    <div class="col-75">
      <select id="country" name="country">
        <option value="australia">Dr X</option>
        <option value="canada">Dr Y</option>
        <option value="usa">Dr Z</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Problem</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
    </div>
  </div>
  <br/>
  <div class="row">
    <input className="submit" type="submit" value="Submit" />
  </div>
  </form>
</div>
    );
};

export default Appointment;