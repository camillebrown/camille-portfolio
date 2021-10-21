import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  Nav,
  NavLinks,
  NavBarMenu,
  Hamburger,
  NavBtnLink,
  NavBarLogo,
  NavContainer,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [state, setState] = useState({});

  const changeNav = () => {
    if (window.scrollY >= 170) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      setState({});
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav
        scrollNav={scrollNav}
        className="is-flex is-justify-content-center is-align-items-center is-size-4"
      >
        <NavContainer className="is-flex is-justify-content-space-between px-4">
          <NavBarLogo
            className="is-size-5 is-uppercase has-text-centered"
            onClick={toggleHome}
            to="/"
          >
            Camille Brown
          </NavBarLogo>
          <NavBarMenu className="is-flex is-align-items-center has-text-center">
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              className="is-flex is-align-items-center px-5 is-size-6 is-uppercase has-text-weight-light"
            >
              about me.{' '}
            </NavLinks>
            <NavLinks
              to="work"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              className="is-flex is-align-items-center px-5 is-size-6 is-uppercase has-text-weight-light"
            >
              work.
            </NavLinks>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              className="is-flex is-align-items-center px-5 is-size-6 is-uppercase has-text-weight-light"
            >
              contact.
            </NavLinks>
          </NavBarMenu>
          <div className="is-flex is-align-items-center m-5">
            <Hamburger
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={toggle}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Hamburger>
            <NavBtnLink
              className="is-size-6 is-uppercase has-text-centered py-3 px-5"
              to="/contact"
            >
              let's connect!
            </NavBtnLink>
          </div>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
