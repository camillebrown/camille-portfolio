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
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLinks to="about">about me. </NavLinks>
                        </li>
                        <li className="nav-item">
                            <NavLinks to="work">work.</NavLinks>
                        </li>
                        <li className="nav-item">
                            <NavLinks to="contact">contact.</NavLinks>
                        </li>
                    </ul>
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
