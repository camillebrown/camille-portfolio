import React from 'react';
import './feature.css';

import { MdOutlineMobileFriendly } from 'react-icons/md';
import { FiUserCheck } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImFilePicture } from 'react-icons/im';

const Feature = ({ title, text, id }) => {
  const getIcon = () => {
    switch (id) {
      case 'mobile': {
        return <MdOutlineMobileFriendly />;
      }
      case 'user': {
        return <FiUserCheck />;
      }
      case 'design': {
        return <ImFilePicture />;
      }
      default:
        return <AiOutlineCheckCircle />;
    }
  };

  return (
    <div className="wwm-container__feature">
      <div className="wwm-container__feature-title">
        <div className="wwm-icon">{getIcon()}</div>
        <h1>{title}</h1>
      </div>
      <div className="wwm-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
