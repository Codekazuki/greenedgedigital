import React from "react";
import "./About.css";
import aboutimage from "../assets/providers.jpg";
const About = () => {
  return (
    <div className='about-section'>
      {/* Who We Are */}
      <div className='who-we-are'>
        <div className='who-we-are-content'>
          <div className='who-we-are-text'>
            <h2>Who Are We?</h2>
            <p>
              GreenEdge is a fast-rising, award-winning partner to Nigeria’s
              leading telecommunications providers, including MTN, Airtel, Glo,
              and 9Mobile. Since launching in 2024, we have quickly
              distinguished ourselves through innovation, excellence, and
              transformative solutions. In a short time, our work has earned
              national and regional recognition, positioning GreenEdge as one of
              the most dynamic and trusted names in the telecommunications
              industry.
            </p>
          </div>

          <div className='who-we-are-image'>
            <img src={aboutimage} alt='About GreenEdge' />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className='core-values'>
        <h2>Our Core Values</h2>
        <p className='intro'>
          These are not just mere words — we live by them.
        </p>

        <div className='values-grid'>
          {/* Collaboration */}
          <div className='value-card'>
            <i className='ri-team-fill icon'></i>
            <h3>Collaboration</h3>
            <p>
              For us, innovation is not a solo journey—it thrives in
              collaboration, where strong partnerships spark fresh ideas and
              unlock solutions that shape the future
            </p>
          </div>

          {/* Technology */}
          <div className='value-card'>
            <i className='ri-macbook-fill icon'></i>
            <h3>Technology</h3>
            <p>
              Our commitment is to use technology as a catalyst—constantly
              enhancing our products and services to meet evolving needs and
              exceed expectations.
            </p>
          </div>

          {/* Innovation */}
          <div className='value-card'>
            <i className='ri-rocket-fill icon'></i>
            <h3>Innovation</h3>
            <p>
              At our core, we embrace creativity and innovation, continuously
              evolving to deliver meaningful impact and lasting value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
