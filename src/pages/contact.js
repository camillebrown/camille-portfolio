import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Input } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import ConfirmationModal from '../components/Modal';
import StaticNav from '../components/layout/StaticNav/index';

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    from_name: `${messageData.first_name} ${messageData.last_name}`,
    message: JSON.stringify(messageData),
    reply_to: messageData.email,
  };

  const handleChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_32otv78',
        'template_6k8wzys',
        templateParams,
        'user_AxUyMqgma7USNm7CnwYoZ',
      )
      .then(
        () => {
          onOpen();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <StaticNav />
      <Box h="100.75vh" className="main-container">
        <ConfirmationModal isOpen={isOpen} onClose={onClose} />
        <div className="contact-wrap">
          <h1 className="contact-h1">Let's Work Together</h1>
          <p className="contact-p">
            {' '}
            Have a project in mind? <br></br>Send me a message using the form
            below.{' '}
          </p>
          <form className="contact-form" id="contact-form" onSubmit={sendEmail}>
            <Input
              type="text"
              placeholder="First Name  *"
              name="first_name"
              onChange={handleChange}
              className="input"
            />
            <Input
              type="text"
              placeholder="Last Name  *"
              name="last_name"
              onChange={handleChange}
              className="input"
            />
            <Input
              type="text"
              placeholder="Email  *"
              name="email"
              onChange={handleChange}
              className="input"
            />
            <Input
              type="text"
              placeholder="Phone Number  *"
              name="phone"
              onChange={handleChange}
              className="input"
            />
            <textarea
              placeholder="Please describe your project  *"
              name="description"
              onChange={handleChange}
              className="textarea"
            />
            <textarea
              placeholder="How did you find me? (LinkedIn, Referral, etc)"
              name="found_me"
              onChange={handleChange}
              className="textarea"
            />
            <input
              id="submit"
              className="fa fa-search contact-submit"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </Box>
    </>
  );
};

export default Contact;
