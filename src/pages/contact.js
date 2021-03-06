import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import classnames from 'classnames';

import StaticNavbar from '../components/layout/StaticNav';
import ConfirmationModal from '../components/common/Modal';
import {
  TextInput,
  TextArea,
  SubmitBtn,
  ContactForm,
  ContactTitle,
  ContactSubtitle,
  ContactContainer,
  MainContainer,
} from './page-css-elements/ContactElements';

const Contact = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const [loading, setLoading] = useState(false);
  const [messageData, setMessageData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    description: '',
    found_me: '',
  });
  const templateParams = {
    to_name: 'Camille',
    first_name: messageData.first_name,
    last_name: messageData.last_name,
    email: messageData.email,
    phone: messageData.phone,
    message: messageData.description,
    found_me: messageData.found_me,
    reply_to: messageData.email,
  };

  const handleChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'gmail_service',
        'gmail_template',
        templateParams,
        'user_AxUyMqgma7USNm7CnwYoZ',
      )
      .then(
        () => {
          setLoading(false);
          toggle();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <StaticNavbar />
      <MainContainer className="is-flex is-justify-content-center is-align-items-center">
        <ConfirmationModal
          active={active}
          setActive={setActive}
          toggle={toggle}
        />
        <ContactContainer className="has-text-centered">
          <ContactSubtitle className="is-size-4 has-text-weight-bold">
            <ContactTitle className="is-uppercase has-text-weight-semibold has-text-centered mt-6 my-4 is-size-5">
              Let's Work Together
            </ContactTitle>
            <p className="mb-2">Have a project in mind?</p>
            <p className="mb-2">Send me a message using the form below.</p>
          </ContactSubtitle>
          <ContactForm
            className="is-flex is-justify-content-space-between is-align-content-center is-align-items-center"
            id="contact-form"
            onSubmit={sendEmail}
          >
            <TextInput
              type="text"
              className="is-uppercase py-2 px-3 my-3 mx-4"
              name="first_name"
              onChange={handleChange}
              placeholder="First Name  *"
            />
            <TextInput
              type="text"
              className="is-uppercase py-2 px-3 my-3 mx-4"
              name="last_name"
              onChange={handleChange}
              placeholder="Last Name  *"
            />
            <TextInput
              type="text"
              className="is-uppercase py-2 px-3 my-3 mx-4"
              name="email"
              onChange={handleChange}
              placeholder="Email  *"
            />
            <TextInput
              type="text"
              className="is-uppercase py-2 px-3 my-3 mx-4"
              name="phone"
              onChange={handleChange}
              placeholder="Phone  *"
            />
            <TextArea
              placeholder="Please describe your project  *"
              name="description"
              onChange={handleChange}
              className="is-uppercase is-size-6 my-3 mx-5"
            />
            <TextArea
              placeholder="How did you find me? (LinkedIn, Referral, etc)"
              name="found_me"
              onChange={handleChange}
              className="is-uppercase is-size-6 my-3 mx-5"
            />
            <SubmitBtn
              onClick={sendEmail}
              className={classnames('button is-size-6 is-uppercase px-5 py-3', {
                'is-loading': loading,
              })}
              type="submit"
            >
              Submit
            </SubmitBtn>
          </ContactForm>
        </ContactContainer>
      </MainContainer>
    </>
  );
};

export default Contact;
