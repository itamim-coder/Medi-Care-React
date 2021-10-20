import React from 'react';
import about1 from '../../images/piron-guillaume-U4FyCp3-KzY-unsplash.jpg'

const AboutUS = () => {
    return (
        <div className="row m-5 container">
           <div className="col-md-6">
 <img className="w-100 " src={about1} alt="" />
           </div>
           <div className="col-md-6">
          <h4>
          The Royal Melbourne Hospital (RMH) began in 1848 as Victoria’s first public hospital. And while we only had 10 beds to our name, we had the community of Melbourne behind us, and we were ready to provide the best possible care for those in need. 
          </h4>
          <p>
          Since those early years, we’ve moved forward with purpose. Always at the forefront, leading the way on improving the quality of life for all.
<br />
Today, the RMH is one of the largest health providers in the state, providing a comprehensive range of specialist medical, surgical, and mental health services; as well as rehabilitation, aged care, outpatient and community programs.
<br />
Our care extends from the City through Royal Park and 32 mental health services across the north-western suburbs of Melbourne. We are a designated state-wide provider for services including trauma, and we lead centres of excellence for tertiary services in several key specialties including neurosciences, nephrology, oncology, cardiology and virtual health.
          </p>
           </div>
        </div>
    );
};

export default AboutUS;