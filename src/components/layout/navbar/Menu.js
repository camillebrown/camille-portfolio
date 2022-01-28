import React from 'react';

export default function Menu({ setToggleMenu }) {
  return (
    <>
      <a
        href="/"
        onClick={() => {
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        Home.
      </a>
      <a
        href="/about"
        onClick={() => {
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        About.
      </a>
      <a
        href="/work"
        onClick={() => {
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        Work.
      </a>
      <a
        href="/contact"
        onClick={() => {
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        Contact.
      </a>
    </>
  );
}
