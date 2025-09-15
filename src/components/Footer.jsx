import "./Footer.css";
import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className='footer-wrap site-footer'>
      <div className='footer-container'>
        {/* Logo & About */}
        <div className='footer-top'>
          <div className='footer-logo-wrap'>
            <img src={logo} alt='Logo' className='footer-logo' />
            <p className='comp-desc'>
              Greenedge is an NCC licensed company operating under the value
              added service (VAS) as an aggregator for airtime &amp; data as
              well as providing bill payments.
            </p>
          </div>
        </div>

        {/* Footer Columns */}
        <div className='footer-columns'>
          {/* Company */}
          <div className='footer-widget'>
            <h3 className='footer-widget-title'>Company</h3>
            <ul className='footer-menu'>
              <li>
                <a href='about.html'>About Us</a>
              </li>
              <li>
                <a href='vtu.html'>Virtual Top-Up</a>
              </li>
              <li>
                <a href='474.html'>474 Universal Pins</a>
              </li>
              <li>
                <a href='contact.html'>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='footer-widget'>
            <h3 className='footer-widget-title'>Resources</h3>
            <ul className='footer-menu'>
              <li>
                <a href='api.html'>API For Developers</a>
              </li>
              <li>
                <a href='faq.html'>FAQs</a>
              </li>
              <li>
                <a href='contact.html'>Support</a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className='footer-widget'>
            <h3 className='footer-widget-title'>Account</h3>
            <ul className='footer-menu'>
              <li>
                <a href='https://arizona.mobifinng.com/login/'>Login</a>
              </li>
              <li>
                <a href='https://arizona.mobifinng.com/register/'>Register</a>
              </li>
              <li>
                <a href='register.html'>Agent Registration</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='footer-widget'>
            <h3 className='footer-widget-title'>Contact Us</h3>
            <ul className='contact-info'>
              <li>
                <i className='ri-mail-open-fill'></i>
                <h6>Email</h6>
                <a href='mailto:info@mobifinng.com'>info@greenedge.com</a>
              </li>
              <li>
                <i className='ri-phone-fill'></i>
                <h6>Phone</h6>
                <a href='tel:234xxxxxxxxx'>+234-XXXXXXXXX</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='footer-bottom'>
        <p className='copyright-text'>
          <i className='ri-copyright-line'></i>{" "}
          <span>2025 Greenedge Services Limited</span>. All Rights Reserved |
          Design By{" "}
          <a
            href='https://github.com/Codekazuki'
            target='_blank'
            rel='noreferrer'
          >
            coachkazuki
          </a>
        </p>
      </div>
    </footer>
  );
}
