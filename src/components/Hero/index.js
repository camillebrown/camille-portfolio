import React, { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Button1 } from '../common/ButtonElement';
import {
  HeroContainer,
  HeroBackground,
  HeroBlock1,
  HeroBlock2,
  HeroImg1,
  HeroImg2,
  HeroImg3,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from './HeroElements';

import line from '../../images/hero/line.png';
import phone from '../../images/hero/phone-desk.jpeg';
import coffee from '../../images/hero/desk-coffee.jpeg';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer className="is-flex is-justify-content-center is-align-items-center">
      <HeroBackground className="columns is-relative">
        <HeroBlock1 className="column is-half">
          <HeroImg1
            className="image"
            src={phone}
            alt="Phone and Plant on Desk"
          />
          <HeroImg2 className="image" src={line} alt="Black Line" />
        </HeroBlock1>
        <HeroBlock2 className="column is-relative">
          <HeroImg3
            className="image"
            src={coffee}
            alt="Desk with Computer Image"
          />
        </HeroBlock2>
      </HeroBackground>
      <HeroContent className="px-4 py-2 is-flex is-flex-direction-column is-align-items-center">
        <HeroTitle className="is-size-6-desktop is-size-7-touch has-text-centered has-text-weight-light is-uppercase mt-3">
          Developer. &nbsp;&nbsp; Creator. &nbsp;&nbsp; Traveler.
        </HeroTitle>
        <HeroSubtitle className="my-3 is-size-3-desktop is-size-6-touch has-text-centered has-text-weight-bold">
          Work with me to design websites for your brands and products.
        </HeroSubtitle>
        <div className="is-flex is-align-items-center is-flex-direction-column">
          <Button1
            to="work"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            id="hero-btn"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            See My Projects
            {hover ? (
              <MdArrowForward className=" ml-1arrow-forward" />
            ) : (
              <MdKeyboardArrowRight className="arrow-right" />
            )}
          </Button1>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
