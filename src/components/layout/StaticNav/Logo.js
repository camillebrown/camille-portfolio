import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const Logo = () => {
  return (
    <LinkRouter className="nav-logo" to="/">
      Camille Brown
    </LinkRouter>
  );
};

export default Logo;
