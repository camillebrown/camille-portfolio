import React from 'react';

import './contact.css';
import ContactForm from './ContactForm';
import SocialIcons from '../../shared/SocialIcons';

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_form-container">
        <div id="leftHalf">
          <div className="contact_form-content">
            <h1>Contact Me</h1>
            <p>Please complete the form below to send your request.</p>
          </div>
          <div className="contact_form-main">
            <ContactForm />
          </div>
          <div className="contact_form-icons">
            <SocialIcons className="social-link" />
          </div>
        </div>
        <div id="rightHalf"></div>
      </div>
    </div>
  );
};

export default Contact;
