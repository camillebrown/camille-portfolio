import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

import Content from './Content';
import Form from './Form';
import PageWrapper from '../../Layout/PageWrapper';

export default function Contact() {
  let content;
  const [state, setState] = useState('submit');

  switch (state) {
    case 'submit':
      content = 'submit';
      break;
    case 'success':
      content = <FontAwesomeIcon icon="check" />;
      break;
    default:
      content = 'submit';
  }

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
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setState('success');
            setLoading(false);
            setTimeout(() => {
              setState('default');
            }, 1250);
          }, 2250);
        },
        (error) => {
          setState('default');
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  const settings = {
    topNav: {
      linePlacement: 'top-36 peer-hover/primary:top-40',
      navigateTo: '/',
      navTitle: 'Home',
      titlePlacement: 'top-16 left-1',
    },
    bottomNav: {
      linePlacement: 'bottom-40 peer-hover/secondary:bottom-44',
      navigateTo: '/work',
      navTitle: 'Work',
      titlePlacement: 'bottom-20 left-1',
    },
    bgColor: 'bg-dark-blue',
    lineColor: 'bg-base-tan',
    showTags: true,
    tagsColor: 'text-base-tan',
    textColor: 'text-base-tan',
    hoverTextColor: 'hover:text-off-white',
  };

  return (
    <PageWrapper settings={settings}>
      <div className="w-full lg:w-4/5 mx-auto h-screen flex flex-col mxl:flex-row justify-between mxl:float-right overflow-y-auto text-off-white smooth-scroll">
        <div className="relative w-full md:w-[90%] md:pl-10 lg:pl-0 mx-auto lg:mx-0 lg:w-full mxl:w-2/5 mxl:ml-10 mxl:h-full m-auto flex flex-col items-start justify-end">
          <Content />
        </div>
        <div className="relative w-full md:w-[90%] md:pl-10 lg:pl-0 mx-auto lg:mx-0 lg:w-full mxl:w-3/5 mxl:pr-20 h-full flex flex-col justify-center mb-16 mxl:mb-0 sm:mt-12 mxl:mt-0">
          <Form
            content={content}
            handleChange={handleChange}
            loading={loading}
            messageData={messageData}
            sendEmail={sendEmail}
            state={state}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
