import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLinks, NavBtnLink } from './NavbarElements'
import { Link as LinkRouter } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <LinkRouter className="nav-logo" to='/'>Camille Brown</LinkRouter>
                    <div className="mobile-icon" onClick={toggle}>
                        <FaBars />
                    </div>
                    <div className="nav-menu">
                        <div className="nav-item">
                            <NavLinks to="about">about me. </NavLinks>
                        </div>
                        <div className="nav-item">
                            <NavLinks to="work">work.</NavLinks>
                        </div>
                        <div className="nav-item">
                            <NavLinks to="contact">contact.</NavLinks>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <NavBtnLink to="/contact">
                            let's connect!
                        </NavBtnLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
