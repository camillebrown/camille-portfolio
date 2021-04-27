import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavBtnLink } from '../components/Navbar/NavbarElements'
import { Link as LinkRouter } from 'react-router-dom'

const Work = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

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
                            <LinkRouter className="nav-links" to="/about">about me. </LinkRouter>
                        </li>
                        <li className="nav-item">
                            <LinkRouter className="nav-links" to="/work">work.</LinkRouter>
                        </li>
                        <li className="nav-item">
                            <LinkRouter className="nav-links" to="/contact">contact.</LinkRouter>
                        </li>
                    </ul>
                    <div className="nav-btn">
                        <NavBtnLink to="/contact">
                            let's connect!
                        </NavBtnLink>
                    </div>
                </div>
            </div>
            <h1>Work page</h1>
        </>
    )
}

export default Work;
