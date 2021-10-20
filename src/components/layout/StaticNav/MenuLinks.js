import React from 'react';
import MenuItem from './MenuItem';

const MenuLinks = () => {
  return (
    <div className="nav-menu-solo">
      <MenuItem route="/about">
        about me.
      </MenuItem>
      <MenuItem route="/work">
        {' '}
        work.
      </MenuItem>
      <MenuItem route="/contact">
        {' '}
        contact.
      </MenuItem>
    </div>
  );
};

export default MenuLinks;
