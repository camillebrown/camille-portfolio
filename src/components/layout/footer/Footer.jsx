import React, { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

import './footer.css';
import SocialIcons from '../../shared/SocialIcons';

const Footer = () => {
  const location = useLocation();
  const is_contact_page = location.pathname === '/contact';

  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div className="footer-container" id="contact">
      {!is_contact_page && (
        <div className="footer_cta">
          <div className="footer_cta-content">
            <p>Have a Project In Mind?</p>
            <h3>
              Let's start a project together, don't hesitate to contact me!
            </h3>
          </div>
          <div className="footer_cta-btn">
            <button
              type="button"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              smooth="true"
              duration={500}
              spy="true"
              exact="true"
              onClick={() => routeChange('/contact')}
            >
              <span>Contact Me</span>
              {hover ? (
                <MdArrowForward className="arrow-right" />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </button>
          </div>
        </div>
      )}
      <div className="footer_links-div">
        <p className="footer_links-webrights">
          Camille Brown {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="footer_links-icons">
          <SocialIcons className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
