import React from 'react';
import { NavLinks } from './StaticElements';

const MenuItem = ({ children, route }) => {
  return (
    <NavLinks to={route}>
      <div display="block">{children}</div>
    </NavLinks>
  );
};

export default MenuItem;
