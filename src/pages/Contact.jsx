import React from "react";
import contactimage from "../assets/email.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../components/contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    toast.success(`Message sent successfully!`);
    e.target.reset();
  };

  return (
    <section className='container'>
      <div className='contact'>
        <div className='contact-img'>
          <img className='img2' src={contactimage} alt='Contact' />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>
            <span className='icon'>
              <i className='ri-customer-service-2-line'></i>
            </span>
            Get In <span className='highlight'>Touch</span>
          </h1>

          <div className='input-box'>
            <label htmlFor='name'>Full Name</label>
            <input
              name='from_name'
              className='field'
              type='text'
              id='name'
              required
              placeholder='Input your name'
            />
          </div>

          <div className='input-box'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='from_email'
              className='field'
              type='email'
              required
              placeholder='Input your email'
            />
          </div>

          <div className='input-box'>
            <label htmlFor='message'>Message</label>
            <textarea
              className='field message'
              name='message'
              id='message'
              required
              placeholder='Your message'
            ></textarea>
          </div>

          <button className='btn-submit' type='submit'>
            Submit
          </button>
        </form>

        <ToastContainer position='top-center' autoClose={3000} />
      </div>
    </section>
  );
}
