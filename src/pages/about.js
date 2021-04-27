import React, { useState } from 'react'
import { FaBars, FaDatabase } from 'react-icons/fa'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { SiJavascript, SiPython, SiCss3, SiReact, SiNodeDotJs, SiFlask, SiHtml5, SiMongodb, SiPostman, SiPostgresql, SiGit } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { NavBtnLink } from '../components/Navbar/NavbarElements'
import { Link as LinkRouter } from 'react-router-dom'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <LinkRouter className="nav-logo" to='/'>Camille Brown</LinkRouter>
                    <div className="mobile-icon2" onClick={toggle}>
                        <FaBars />
                    </div>
                    <>
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
                    </>
                </div>
            </div>
            <div className="about-container">
                <div className="main-wrapper">
                    <div className="about-row">
                        <div className="column1">
                            <div className="about-wrapper">
                            <p className="top-line">Hello!</p>
                                <h1 className="main-h1">I'm Camille Brown.</h1>
                                <p className="proj-desc">
                                    I create websites with attention to detail and design accuracy. I look forward  to helping you through all of the stages of your digital project including strategy, design, and web development.
                                </p>
                                <div className="about-btns">
                                    <a
                                        className="about-btn-link"
                                        href='//www.drive.google.com/file/d/1vbl_OcsZT4XjZu0KZk9IEOuulllBHP-z/view?usp=sharing'
                                        target="_blank"
                                        aria-label="My Resume">
                                        my resume
                                        <IoCloudDownloadOutline className="download" />
                                    </a>
                                    <LinkRouter
                                        to="/contact"
                                        className="about-btn-link"
                                    >
                                        contact me
                                        <HiOutlineMail className="download" />
                                    </LinkRouter>
                                </div>
                                <div className="skills-container">
                                    <div className="single-skill">
                                        <SiJavascript className="skills-icon" />
                                        <p>Javascript</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiPython className="skills-icon" />
                                        <p>Python</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiMongodb className="skills-icon" />
                                        <p>MongoDB</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiNodeDotJs className="skills-icon" />
                                        <p>Node JS</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiReact className="skills-icon" />
                                        <p>React JS</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiHtml5 className="skills-icon" />
                                        <p>HTML 5</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiFlask className="skills-icon" />
                                        <p>Flask</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiCss3 className="skills-icon" />
                                        <p>CSS</p>
                                    </div>
                                    <div className="single-skill">
                                        <FaDatabase className="skills-icon" />
                                        <p>SQL</p>
                                    </div>
                                    <div className="single-skill">
                                        <SiPostgresql className="skills-icon" />
                                        <p>PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="img-wrap-main">
                                <img src="https://i.ibb.co/2qtmtPV/about-img.jpg" alt="About Me" className="about-img" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
