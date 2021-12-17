import React, { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
  FaGithub,
  FaDribbbleSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

 import './footer.css'

const Footer = () => {
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
      <div className="footer_cta">
        <div className="footer_cta-content">
          <p>Have a Project In Mind?</p>
          <h3>Let's start a project together, don't hesitate to contact me!</h3>
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
      <div className="footer_links-div">
        <p className="footer_links-webrights">
          Camille Brown © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="footer_links-icons">
          <a href="https://github.com/camillebrown" className="icons">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/camillenbrown/"
            className="icons"
          >
            <FaLinkedin />
          </a>
          <a href="http://www.dribbble.com/camillebrown11" className="icons">
            <FaDribbbleSquare />
          </a>
          <a href="http://www.twitter.com/camilllebrown" className="icons">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
