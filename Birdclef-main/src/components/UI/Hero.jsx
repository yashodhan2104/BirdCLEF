import React from "react";
import '../../style/hero.css';
import heroDarkImg from '../../images/hero-img.jpg';
import lightImg from '../../images/light-hero-bg.jpg';

const Hero = ({theme}) => {
    return (
        <div className="hero__section" id="home">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div>
                            <h2>Recognition of Bird</h2>
                            <h2>From their Chirping.</h2>
                            <h2 className="highlighted"> Bird Voice Recognition </h2>
                        </div>
                        <p className="description">Unravel the mysteries of avian communication with BirdClef's cutting-edge Bird Voice Recognition technology.</p>
                        <div className="hero__btns">
                            <button className="primary__btn">Get Started Now</button>
                            <button className="secondary__btn">Discover More</button>
                        </div>
                    </div>
                    <div className="hero__img">
                        <img src={theme ==='light-theme' ?  lightImg : heroDarkImg} alt="hero-img" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
