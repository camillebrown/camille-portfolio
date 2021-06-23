import React, { useState } from 'react'
import { Box, Image, Flex } from "@chakra-ui/react"
import { ProjectCard } from './ProjectElements'
import { Button2 } from '../ButtonElement'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

const Projects = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <div className="main-container" >
        <Flex h="90vh" w="100%">
          <Box w="50%" style={{ backgroundColor: "#EBE9E6" }} pos="relative" />
          <Box w="50%" style={{ backgroundColor: "#EBE9E6" }} pos="relative">
            <Image
              pos="absolute"
              top="20"
              right="0"
              src='https://i.ibb.co/CVBFVBw/half-stripes.png'
              alt="Sidepanel Half Circle and Bars"
            />
          </Box>
        </Flex>
        <div className="proj-container" id='work'>
          <div className="info-wrapper">
            <p className="top-line">Check Out My Work</p>
            <h1 className="main-h1">A Few Featured Projects</h1>
            <p className="proj-desc">
              Need someone focused on attention to detail and design accuracy? <br></br> I look forward  to helping you in all of the stages of your digital project: strategy, design, and web development.
            </p>
          </div>
          <div className="proj-wrapper">
            <ProjectCard to="/work">
              <img className="proj-icon" src="https://i.ibb.co/XFCdsq7/undraw-fitness-tracker-3033.png" alt="Fitness Tracker Icon" />
              <h2 className="proj-h2">Better.</h2>
              <p className="proj-p">The Better.™ App allows users to track their daily fitness activity, moods, sleep patterns, and meals over time.</p>
            </ProjectCard>
            <ProjectCard to="/work">
              <img className="proj-icon" src="https://i.ibb.co/1LLmbXV/cooking.png" alt="Cooking Icon" />
              <h2 className="proj-h2">Cookbook Curator</h2>
              <p className="proj-p">Find thousands of recipes and add them to your own personalized cookbook or create and save your own recipes!</p>
            </ProjectCard>
            <ProjectCard to="/work">
              <img className="proj-icon2" src="https://i.ibb.co/xDF52cw/game.png" alt="Trivia Game Icon" />
              <h2 className="proj-h2">Got the Beat!</h2>
              <p className="proj-p">This music trivia game tests users' music industry knowledge. <br></br>Can you get the high score?</p>
            </ProjectCard>
          </div>
          <Button2
            to='/work'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            style={{ width: "20%", margin:"0 auto" }}
          > See More! {hover ? <MdArrowForward className="arrow-forward" /> : <MdKeyboardArrowRight className="arrow-right" />}
          </Button2>
        </div>
      </div>
    </>
  )
}

export default Projects
