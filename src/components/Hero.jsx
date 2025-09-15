import React from "react";
import "./Hero.css";
import man from "../assets/man.jpg";
import mno from "../assets/providers.jpg";

const Hero = () => {
  return (
    <section className='hero-wrap'>
      <div className='container'>
        <div className='hero-row'>
          {/* Left text section */}
          <div className='hero-left'>
            <div className='hero-content'>
              <span>SIMPLE, QUICK, RELIABLE</span>
              <h1>Recharge and Pay bills Anytime, Anywhere.</h1>
              <p>
                We are Nigeria's leading Value Added Service (VAS) company
                operating and providing Airtime &amp; Data in Nigeria since
                2012.
              </p>
              <div className='hero-btn'>
                <a href='vtu.html' className='btn style1'>
                  Recharge Now <i className='ri-arrow-right-s-line'></i>
                </a>
                <a
                  href='https://arizona.mobifinng.com/register/'
                  className='btn style1'
                >
                  Register <i className='ri-arrow-right-s-line'></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right images section */}
          <div className='hero-right'>
            <div className='hero-img-wrap'>
              <div className='hero-img-one'>
                <img src={man} alt='hero-1' />
              </div>
              <div className='hero-img-two'>
                <img src={mno} alt='hero-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
