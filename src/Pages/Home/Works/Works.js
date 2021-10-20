import React from 'react';
import './Works.css'
import img1 from '../../../images/works/service-01.jpg'
import img2 from '../../../images/works/service-02.jpg'
import img3 from '../../../images/works/service-03.jpg'
import img4 from '../../../images/works/service-04.jpg'

const Works = () => {
    return (
        <div className="work-container ">
            <h5>Working Process</h5>
            <h1>How we works?</h1>
            <p>   Why HounLare services is best all time since 1990. <br /> desires to obtain of itself, because it is pain, but because occasionally circumstance procure him some great deals.</p>
            <div>
                <div  className="img-div">
                    
               <div className="single-div">
                   <img src={img1} alt="" className="works-img" />
                   <h3>Registration</h3>
                   <p>To create an account and make easy treatment</p>
               </div>
               <div>
                   <img src={img2} alt="" className="works-img" />
                   <h3>Appointment</h3>
                   <p>To create an account and make easy treatment</p>
               </div>
               <div>
                   <img src={img3} alt="" className="works-img" />
                   <h3>Take Treatment</h3>
                   <p>To create an account and make easy treatment</p>
               </div>
               <div>
                   <img src={img4} alt="" className="works-img" />
                   <h3>Enjoy The Life</h3>
                   <p>To create an account and make easy treatment</p>
               </div>
         
                </div>


            </div>
        </div>
    );
};

export default Works;