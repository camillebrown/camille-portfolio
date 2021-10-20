import React from 'react';
import { NavBarLogo, NavLinks } from './StaticNavbarElements';

export default function StaticNavbar() {
  return (
    <nav
      className="navbar mb-6"
      role="navigation"
      aria-label="main navigation"
      style={{
        minHeight: '10vh',
        borderBottom: '1px solid #ffdead',
      }}
    >
      <div className="navbar-brand is-flex is-align-items-center">
        <NavBarLogo
          className="is-size-5 is-uppercase has-text-centered mx-6"
          to="/"
        >
          Camille Brown
        </NavBarLogo>

        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
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
    </nav>
  );
}
