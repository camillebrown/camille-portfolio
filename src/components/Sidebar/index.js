import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { SidebarContainer, SidebarLink, SidebarRoute } from './SidebarElements'

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <div className="icon" onClick={toggle}>
                <FaTimes className="close-icon" />
            </div>
            <div className="sidebar-wrapper">
                <ul className="sidebar-menu">
                    <SidebarLink to="about" onClick={toggle}>about.</SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>work.</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>contact.</SidebarLink>
                </ul>
                <div className="side-btn-wrap">
                    <SidebarRoute to="/contact">let's connect.</SidebarRoute>
                </div>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar
