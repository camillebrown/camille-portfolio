import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';
import NavBarContainer from './NavBarContainer';
import Sidebar from '../Sidebar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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

  return (
    <NavBarContainer scrollNav={scrollNav}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
