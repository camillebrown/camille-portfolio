import React from 'react';

import './header.css';
import { computer_hands, dots } from '../../../assets/images';
import { HiOutlineArrowDown } from 'react-icons/hi';

const Header = () => {
  const getScroll = (id) => {
    const yOffset = -100;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <div style={{ height: '6rem' }} />
      <div className="header" id="home">
        <div className="header-content">
          <div className="header-content_div">
            <div className="header-content_text">
              <div className="header-content_dots">
                <img src={dots} alt="dots" className="roll-in-blurred-top" />
              </div>
              <div className="header-content_text-description">
                <p>Developer. &nbsp;&nbsp; Creator. &nbsp;&nbsp; Traveler.</p>
                <h1>
                  hi there.
                  <br />
                  I'm Camille!
                </h1>
                <p>
                  Work with me to build creative and immersive digital web
                  experiences
                </p>
              </div>
            </div>
            <div className="header-image">
              <img
                src={computer_hands}
                alt="desk"
                className="flip-in-hor-bottom"
              />
              <div className="scroll-div bounce-in-top">
                <div
                  onClick={() => getScroll('work_with_me')}
                  className="header-image-div"
                >
                  <div>
                    <HiOutlineArrowDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
