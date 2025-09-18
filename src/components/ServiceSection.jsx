import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <section className='services-wrap'>
      <div className='container'>
        {/* Section Heading */}
        <div className='services-header'>
          <h2>Welcome to GreenEdge Digital Innovations Limited</h2>
          <p>Providing Mobile Solutions &amp; Opportunities</p>
        </div>

        {/* Service Cards */}
        <div className='services-grid'>
          {/* Card 1 */}
          <div className='service-card'>
            <h3>Airtime &amp; Data VTU</h3>
            <p>
              Topup your mobile instantly with airtime and data for any of the
              major networks in Nigeria; MTN, Airtel, Glo, 9mobile.
            </p>
            <a href='vtu.html' className='btn style1'>
              Recharge
            </a>
          </div>

          {/* Card 2 */}
          <div className='service-card'>
            <h3>Bill Payments</h3>
            <p>
              GreenEdge offers a wide selection of recharge products, including
              but not limited to Digital TV, Electricity, Internet Service, with
              many more.
            </p>
            <a href='pay.html' className='btn style1'>
              Pay Bill
            </a>
          </div>

          {/* Card 3 */}
          <div className='service-card'>
            <h3>Enterprise Solutions</h3>
            <p>
              Integrate with ease and convenience recharge solutions via a web
              portal or an API integration to your current platform.
            </p>
            <a href='contact.html' className='btn style1'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
