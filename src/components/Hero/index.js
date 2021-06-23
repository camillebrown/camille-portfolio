import React, { useState } from 'react'
import { Flex, Box, Image } from "@chakra-ui/react"
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import { Button1 } from '../ButtonElement'

const Hero = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <div className="hero-container">
      <Flex h="110vh" w="100%">
        <Box style={{ backgroundColor: "#EBE9E6" }} w="50%" pos="relative">
          <Image
            pos="absolute"
            width="50%"
            top="25%"
            left="18%"
            src="https://i.ibb.co/Yth9ZR6/ben-kolde-cp-Ls-Wm-MEa1-Q-unsplash.jpg"
            alt="Phone and Plant on Desk"
          />
          <Image
            pos="absolute"
            width="15%"
            bottom="10"
            right="-2"
            src='https://i.ibb.co/wWP5CYd/line.png'
            alt="Black Line"
            overflow='hidden'
          />
        </Box>
        <Box style={{ backgroundColor: "#F2F0EC" }} w="50%" pos="relative">
          <Image
            pos="absolute"
            width="40%"
            bottom="20"
            left="25%"
            src='https://i.ibb.co/2Z4kg9B/mathilde-langevin-bg4-Vz54j9x8-unsplash.jpg'
            alt="Desk with Computer Image" />
        </Box>
      </Flex>
      <div className="hero-content">
        <h1 className="hero-h1">Developer. &nbsp;&nbsp; Creator. &nbsp;&nbsp; Traveler.</h1>
        <p className="hero-p">Work with me to design websites for your brands and products.</p>
        <div className="hero-btn-wrapper">
          <Button1
            to="work"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            id="hero-btn"
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            See My Projects {hover ? <MdArrowForward className="arrow-forward" /> : <MdKeyboardArrowRight className="arrow-right" />}
          </Button1>
        </div>
      </div>
    </div>
  )
}

export default Hero
