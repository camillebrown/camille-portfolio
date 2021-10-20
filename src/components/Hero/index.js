import React, { useState } from 'react';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Button1 } from '../ButtonElement';
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
            src="https://i.ibb.co/Yth9ZR6/ben-kolde-cp-Ls-Wm-MEa1-Q-unsplash.jpg"
            alt="Phone and Plant on Desk"
          />
          <HeroImg2
            className="image"
            src="https://i.ibb.co/wWP5CYd/line.png"
            alt="Black Line"
          />
        </HeroBlock1>
        <HeroBlock2 className="column is-relative">
          <HeroImg3
            className="image"
            src="https://i.ibb.co/2Z4kg9B/mathilde-langevin-bg4-Vz54j9x8-unsplash.jpg"
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
            See My Projects{' '}
            {hover ? (
              <MdArrowForward className="arrow-forward" />
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
