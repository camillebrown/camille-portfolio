import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Menu({ setToggleMenu }) {
  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <>
      <div
        onClick={() => {
          routeChange('/');
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        Home.
      </div>
      <div
        onClick={() => {
          routeChange('/about');
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        About.
      </div>
      <div
        onClick={() => {
          routeChange('/work');
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        Work.
      </div>
      <div
        onClick={() => {
          routeChange('/contact');
          if (setToggleMenu) setToggleMenu(false);
        }}
      >
        Contact.
      </div>
    </>
  );
}
