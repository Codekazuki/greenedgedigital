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
              GreenEdge is the largest, leading, and award-winning partner to
              all major telcos in Nigeria, including MTN, Airtel, Glo, and
              9Mobile. Our journey, which started in 2024, has been
              uninterrupted, transformative, and innovative. Over the years, we
              have consistently garnered national and regional awards,
              solidifying our unrivaled position in the telecommunications
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
              We believe the best ideas and solutions come from working together
              and fostering strong partnerships.
            </p>
          </div>

          {/* Technology */}
          <div className='value-card'>
            <i className='ri-macbook-fill icon'></i>
            <h3>Technology</h3>
            <p>
              We are committed to leveraging technology to continuously improve
              our products and services.
            </p>
          </div>

          {/* Innovation */}
          <div className='value-card'>
            <i className='ri-rocket-fill icon'></i>
            <h3>Innovation</h3>
            <p>
              We thrive on creativity and innovation, always striving to improve
              and deliver more value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
