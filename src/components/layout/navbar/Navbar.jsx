import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

import './navbar.css';
import Menu from './Menu';
import SocialIcons from '../../shared/SocialIcons';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to='/' className='site-title'>camille.brown</Link>
        </div>

        <div className="navbar-links_container">
          <Menu />
        </div>

        <div className="navbar-sign">
          <SocialIcons className="social-link" />
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
              <Menu setToggleMenu={setToggleMenu} />
            </div>
            <div className="navbar-menu_container-links-sign">
              <SocialIcons className="social-link" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
