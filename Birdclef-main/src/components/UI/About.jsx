import React from 'react';
import './../../style/about.css';
import aboutImg from './../../images/about1.png';


const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
           <div className="about__parent">
           {/* <div className="about__left"> */}
          <div className="about__content">
          <div className='about__lefthalf'>
            <h6 className='subtitle'>Why choose us</h6>
            <h2>Specialist in finding birds name</h2>
            <h2 className='highlight'> with BirdClef.</h2>
            <p className="description about__content-desc">We have honed our expertise in identifying and classifying bird species with the help of BirdClef,
             a cutting-edge tool dedicated to avian recognition. Our proficiency in this field sets us apart.</p>
            {/* Feature start */}
            <div className="choose__us-item">
           {/* icon with text 1 st icon   */}
            <div className='style'>
            <span className='choose__us-icon'>
                <i className="ri-base-station-line"></i>
            </span>
            
            <div className="choose__us-text">
                <h4 className='choose__us-title'>Pioneers in Voice Recognition Technology</h4>
                {/* <p className='description'>We take pride in being at the forefront of voice recognition technology. Our innovative solutions are designed to enhance user experiences and redefine how we interact with avian ecosystems.</p> */}
            </div>
            </div>


            {/* icon with text 2ndicon   */}
            <div className='style'>
            <span className='choose__us-icon'>
                <i className="ri-team-fill"></i>
            </span>
            
            <div className="choose__us-text">
                <h4 className='choose__us-title'> User-Friendly Experience</h4>
                {/* <p className='description'>Our platform is designed with you in mind. Navigating through our services is intuitive and seamless, ensuring that you get the information you need effortlessly.</p> */}
            </div>
            </div>


            {/* icon with text 3rd  icon   */}
            <div className='style'>
            <span className='choose__us-icon'>
                <i className="ri-customer-service-2-fill"></i>
            </span>
            
            <div className="choose__us-text">
                <h4 className='choose__us-title'>24/7 Support Availability</h4>
                {/* <p className='description'>We understand that your inquiries may arise at any time. That's why our dedicated support team is available around the clock to assist you. Your satisfaction is our priority.</p> */}
            </div>
            </div>
            </div>
            {/* Feature End */}
            {/* </div> */}
            </div>
            <div className='about__img'>
                <img src ={aboutImg} alt="" />
            </div>
            

            
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
