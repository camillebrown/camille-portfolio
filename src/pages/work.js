import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { projects } from '../components/Projects/Data'
import { Box, Image } from "@chakra-ui/react"


const Work = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const projDivs = projects.map((project) =>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" className="main-proj">
            <Image src={project.img} alt={project.alt} />
            <Box overflow="hidden" className="main-proj-desc">
                <p className="main-proj-h2">{project.title}</p>
                <h1 className="proj-p">{project.description}</h1>
                <Box className="lang-icon-container">
                    {project.langs.map((lang) =>
                        <lang.icon className="lang-icon" />
                    )}
                </Box>
                <Box className="about-btns">
                    <a
                        className="about-btn-link"
                        href={project.url}
                        target="_blank"
                        aria-label="My Resume">
                        view the app
                    </a>
                    <a
                        className="about-btn-link"
                        href={project.git}
                        target="_blank"
                        aria-label="test">
                        view the code
                </a>
                </Box>
            </Box>
        </Box>
    )

    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <LinkRouter className="nav-logo" to='/'>Camille Brown</LinkRouter>
                    <div className="mobile-icon2" onClick={toggle}>
                        <FaBars />
                    </div>
                    <ul className="nav-menu-solo">
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
                </div>
            </div>
            <div className="proj-page-cont">
                <div className="proj-page-row">
                    <div className="about-wrapper">
                        <p className="top-line">Projects</p>
                        <h1 className="proj-page-h1">Check Out <br></br> My Latest Work</h1>
                    </div>
                </div>
                <hr className="line-break" />
                <div className="all-proj-divs">
                    {projDivs}
                </div>
            </div>
        </>
    )
}

export default Work;
