import React, { useState } from 'react'
import { FaBars, FaDatabase } from 'react-icons/fa'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { SiJavascript, SiPython, SiCss3, SiReact, SiNodeDotJs, SiFlask, SiHtml5, SiMongodb, SiPostgresql } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { Link as LinkRouter } from 'react-router-dom'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const iconDivs = () => {
        let skills = [
            {
                name: "Javascript",
                icon: SiJavascript
            },
            {
                name: "Python",
                icon: SiPython
            },
            {
                name: "MongoDB",
                icon: SiMongodb
            },
            {
                name: "Node JS",
                icon: SiNodeDotJs
            },
            {
                name: "React JS",
                icon: SiReact
            },
            {
                name: "HTML 5",
                icon: SiHtml5
            },
            {
                name: "Flask",
                icon: SiFlask
            },
            {
                name: "CSS",
                icon: SiCss3
            },
            {
                name: "SQL",
                icon: FaDatabase
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            }
        ]

        const skillsDivs = skills.map((skill) =>
            <div className="single-skill">
                <skill.icon className="skills-icon" />
                <p>{skill.name}</p>
            </div>
        )

        return (
            <div className="skills-container">
                {skillsDivs}
            </div>
        )
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
                                    When I'm not working at the frontend developer at <a className="ck" href="https://www.creditkey.com/">Credit Key</a>, as a California native, I love the outdoors, sunny days on the beach and all things music. Don't hesitate to reach out! I look forward to  working with you.
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
                                {iconDivs()}
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
