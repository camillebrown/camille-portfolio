import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavLinks, NavBtnLink, Nav } from './NavbarElements';
import { Link as LinkRouter } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setSetScrollNav] = useState(false)
    const [state, setState] = useState({});

    const changeNav = () => {
        if (window.scrollY >= 150) {
            setSetScrollNav(true)
        } else {
            setSetScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        return () => {
            setState({});
          };
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <Nav scrollNav={scrollNav}>
                    <div className="nav-container">
                        <LinkRouter className="nav-logo" onClick={toggleHome} to='/'>Camille Brown</LinkRouter>
                        <div className="mobile-icon" onClick={toggle}>
                            <FaBars />
                        </div>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >
                                    about me. </NavLinks>
                            </li>
                            <li className="nav-item">
                                <NavLinks
                                    to="work"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >
                                    work.</NavLinks>
                            </li>
                            <li className="nav-item">
                                <NavLinks
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    activeClass='active'
                                >
                                    contact.</NavLinks>
                            </li>
                        </ul>
                        <div className="nav-btn">
                            <NavBtnLink to="/contact">
                                let's connect!
                        </NavBtnLink>
                        </div>
                    </div>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
