import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Menu({ is_root, setToggleMenu }) {
  const navigate = useNavigate();

  const getScroll = (id) => {
    const yOffset = -40;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <>
      <div
        onClick={() => {
          is_root ? getScroll('home') : routeChange('/');
          if(setToggleMenu) setToggleMenu(false);
        }}
      >
        Home.
      </div>
      <div
        onClick={() => {
          is_root ? getScroll('work_with_me') : routeChange('/about');
          if(setToggleMenu) setToggleMenu(false);
        }}
      >
        About.
      </div>
      <div
        onClick={() => {
          is_root ? getScroll('work') : routeChange('/work');
          if(setToggleMenu) setToggleMenu(false);
        }}
      >
        Work.
      </div>
      <div
        onClick={() => {
          is_root ? getScroll('contact') : routeChange('/contact');
          if(setToggleMenu) setToggleMenu(false);
        }}
      >
        Contact.
      </div>
    </>
  );
}
