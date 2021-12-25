import React, { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import './wwm.css';
import { Feature } from '../..';

const WorkWithMe = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div className="wwm" id="work_with_me">
      <div className="wwm_main-container">
        <div className="wwm-heading">
          <h1>
            Fresh <br />
            sites for you!
          </h1>
          <div className="wwm-line" />
          <div className="wwm-line" />
          <div className="wwm-btn">
            <button
              type="button"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              onClick={() => routeChange('/about')}
            >
              <span>Meet the Developer</span>
              {hover ? (
                <MdArrowForward className="arrow-icon arrow-right" />
              ) : (
                <MdKeyboardArrowRight className="arrow-icon"/>
              )}
            </button>
          </div>
        </div>
        <div className="wwm-container">
          <Feature
            id="mobile"
            title="Mobile Friendly"
            text="Take your site on the go! Your site will be compatible with (basically) all mobile devices. I mean who still uses an iPhone 4 anyways?"
          />
          <Feature
            id="user"
            title="User Focused"
            text="I build websites with user experience in mind. With pages that draw in your end users, you'll truly see your vision come to life!"
          />
          <Feature
            id="design"
            title="Design Inspired"
            text="lakjsdlfkjalskdjflskfjsdf. laskjdflskdjfsd. Sit eiusmod incididunt nulla duis reprehenderit pariatur nulla in culpa."
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
