import React, { useState } from 'react'
import { Flex, Box, Image } from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'
import { Link as LinkRouter } from 'react-router-dom'

import { Skills } from '../components/Skills'

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
      <Box className="main-container">
        <Flex h="87.5vh" w="100%">
          <Box w="50%" pos="relative">
            <Image
              pos="absolute"
              height="100%"
              left="0"
              src="https://i.ibb.co/8mRjBMB/bg-circle.png"
              alt="Sidebar Half Circle"
            />
          </Box>
          <Box w="50%" pos="relative">
            <Image
              pos="absolute"
              top="20"
              right="0"
              src='https://i.ibb.co/Rzwwz9t/Screen-Shot-2021-06-23-at-12-48-32-PM.png'
              alt="Sidebar Lines" />
          </Box>
        </Flex>
        <Box className="main-wrapper">
          <Box className="about-row">
            <Box className="column1">
              <div className="about-wrapper">
                <p className="top-line">Hello!</p>
                <p className="main-h1">I'm Camille Brown. </p>
                <p className="proj-desc">
                  When I'm not working at the Frontend Developer at <a className="ck" href="https://www.creditkey.com/">Credit Key</a>, as a California native, I love the outdoors, sunny days on the beach and all things music. Don't hesitate to reach out! I look forward to  working with you.
                </p>
                <Flex my="30px" justify="center">
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
                </Flex>
                {Skills()}
              </div>
            </Box>
            <Box className="column2">
              <Box>
                <img src="https://i.ibb.co/X7RLLPy/compgirl.jpg" alt="About Me"/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default About;
