import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  SidebarContainer,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  Icon,
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon className="is-size-4" onClick={toggle}>
        <FaTimes className="close-icon" />
      </Icon>
      <div style={{ color: 'white' }}>
        <SidebarMenu className="has-text-centered">
          <SidebarLink to="about" onClick={toggle}>
            about.
          </SidebarLink>
          <SidebarLink to="work" onClick={toggle}>
            work.
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            contact.
          </SidebarLink>
        </SidebarMenu>
        <div className="is-flex is-justify-content-center">
          <SidebarRoute to="/contact">let's connect.</SidebarRoute>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
