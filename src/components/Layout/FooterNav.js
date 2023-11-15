import React from 'react';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';

export default function FooterNav() {
  const location = useLocation();

  if (location.pathname !== '/') return;

  return (
    <Disclosure
      as="nav"
      className="bg-black text-white font-montserrat font-light w-full text-xs xxs:text-sm xs:text-base fixed bottom-0 left-0 right-0 transform transition-transform duration-3000 ease-in-out z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl py-2 px-5 sm:py-4">
            <div className="flex justify-end sm:justify-center">
              <div className="hidden sm:ml-6 sm:flex">
                <NavLink
                  to="/"
                  className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                  exact="true"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/work"
                  className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                  exact="true"
                >
                  Work
                </NavLink>
                <NavLink
                  to="/about"
                  className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                  exact="true"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                  exact="true"
                >
                  Contact
                </NavLink>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2">
                  {open ? (
                    <FontAwesomeIcon icon="xmark" />
                  ) : (
                    <FontAwesomeIcon icon="bars" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            className={`h-20-screen xs:h-30-screen flex flex-col justify-center transform transition-transform transition-opacity duration-300 ease-in-out sm:hidden mb-6 xs:mb-0 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <NavLink
                to="/"
                className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                exact="true"
              >
                Home
              </NavLink>
              <NavLink
                to="/work"
                className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                exact="true"
              >
                Work
              </NavLink>
              <NavLink
                to="/about"
                className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                exact="true"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="px-2 xxs:px-4 hover:text-normal-tan uppercase tracking-ultra-wide"
                exact="true"
              >
                Contact
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
