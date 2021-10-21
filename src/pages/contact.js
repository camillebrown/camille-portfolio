import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import classnames from 'classnames';
import { useDisclosure } from '@chakra-ui/react';

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
} from '../components/page-css-elements/ContactElements';
import { MainContainer } from '../components/Main/MainElements';

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    from_name: `${messageData.first_name} ${messageData.last_name}`,
    message: JSON.stringify(messageData),
    reply_to: messageData.email,
  };

  const handleChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .send(
        'service_32otv78',
        'template_6k8wzys',
        templateParams,
        'user_AxUyMqgma7USNm7CnwYoZ',
      )
      .then(
        () => {
          setLoading(false)
          onOpen();
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
        <ConfirmationModal isOpen={isOpen} onClose={onClose} />
        <ContactContainer className="my-6 has-text-centered">
          <ContactSubtitle className="my-6 is-size-4 has-text-weight-bold">
            <ContactTitle className="is-uppercase has-text-weight-semibold has-text-centered mb-4 is-size-5">
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
              className={classnames(
                'button is-size-6 is-uppercase px-5 py-3',
                { 'is-loading': loading },
              )}
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
