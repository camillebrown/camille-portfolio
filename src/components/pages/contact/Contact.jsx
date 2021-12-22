import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css';
import ContactForm from './ContactForm';
import SocialIcons from '../../shared/SocialIcons';
import SuccessModal from '../../shared/modal/SuccessModal';

import useModal from '../../../hooks/useModal';

const Contact = () => {
  const form = useRef();
  const { isModalActive, toggleModal, closeModal } = useModal();

  const sendEmail = async () => {
    emailjs
      .sendForm(
        'gmail_service', //service ID
        process.env.REACT_APP_TEMPLATE_ID, //emailjs template
        form.current, //queryselector
        process.env.REACT_APP_USER_ID, //user id access code
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <div className="contact_container">
        <div className="contact_form-container">
          <div id="leftHalf">
            <div className="contact_form-content">
              <h1>Contact Me</h1>
              <p>Please complete the form below to send your request.</p>
            </div>
            <div className="contact_form-main">
              <ContactForm
                form={form}
                sendEmail={sendEmail}
                toggleModal={toggleModal}
              />
            </div>
            <div className="contact_form-icons">
              <SocialIcons className="social-link" />
            </div>
          </div>
          <div id="rightHalf"></div>
        </div>
      </div>
      <SuccessModal isModalActive={isModalActive} closeModal={closeModal} />
    </>
  );
};

export default Contact;
