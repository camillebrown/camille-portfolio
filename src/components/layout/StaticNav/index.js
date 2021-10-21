import React, { useState } from 'react';
import classnames from 'classnames';
import { Nav, NavBarLogo, NavLinks, Hamburger } from './StaticNavbarElements';

export default function StaticNavbar() {
  let [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <Nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-flex is-align-items-center">
        <NavBarLogo className="is-size-5 is-uppercase has-text-centered" to="/">
          Camille Brown
        </NavBarLogo>

        <Hamburger
          className={classnames('navbar-burger', { 'is-active': active })}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Hamburger>
      </div>

      <div
        id="navbarBasicExample"
        className={classnames('navbar-menu', { 'is-active': active })}
      >
        <div className="navbar-start" />
        <div className="navbar-end mx-6">
          <NavLinks
            to="/about"
            className="navbar-item is-size-6 is-uppercase px-2 mx-4"
            style={{ background: 'transparent', textDecoration: 'none' }}
          >
            about me.
          </NavLinks>
          <NavLinks
            className="navbar-item is-size-6 is-uppercase px-2 mx-4"
            style={{ background: 'transparent', textDecoration: 'none' }}
            to="/work"
          >
            work.
          </NavLinks>
          <NavLinks
            className="navbar-item is-size-6 is-uppercase px-2 mx-4"
            style={{ background: 'transparent', textDecoration: 'none' }}
            to="/contact"
          >
            contact.
          </NavLinks>
        </div>
      </div>
    </Nav>
  );
}
