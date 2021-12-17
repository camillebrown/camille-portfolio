import React, { useState } from 'react';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import {
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiCloseLine,
  RiMenu3Line,
  RiGithubFill,
} from 'react-icons/ri';
import { FaDribbbleSquare } from 'react-icons/fa';

import './navbar.css';
import Menu from './Menu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const is_root = location.pathname === '/';

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h3>camille.brown</h3>
        </div>

        <div className="navbar-links_container">
          <Menu is_root={is_root} />
        </div>

        <div className="navbar-sign">
          <LinkRouter
            to="//www.twitter.com/camilllebrown"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterFill size={27} />
          </LinkRouter>
          <LinkRouter
            to="//www.linkedin.com/in/camillenbrown/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill size={27} />
          </LinkRouter>
          <LinkRouter
            to="//www.github.com/camillebrown"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill size={27} />
          </LinkRouter>
          <LinkRouter
            to="//www.dribbble.com/camillebrown11"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbbleSquare size={27} />
          </LinkRouter>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#244d4d"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#244d4d"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-top">
            <div className="navbar-menu_container-links">
              <Menu setToggleMenu={setToggleMenu}/>
            </div>
            <div className="navbar-menu_container-links-sign">
              <LinkRouter
                to="//www.twitter.com/camilllebrown"
                className="social-link"
              >
                <RiTwitterFill size={27} />
              </LinkRouter>
              <LinkRouter
                to="//www.linkedin.com/in/camillenbrown/"
                className="social-link"
              >
                <RiLinkedinBoxFill size={27} />
              </LinkRouter>
              <LinkRouter
                to="//www.github.com/camillebrown"
                className="social-link"
              >
                <RiGithubFill size={27} />
              </LinkRouter>
              <LinkRouter
                to="//www.dribbble.com/camillebrown11"
                className="social-link"
              >
                <FaDribbbleSquare size={27} />
              </LinkRouter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
