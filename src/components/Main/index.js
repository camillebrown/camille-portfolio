import React, { useState } from 'react'
import { Button2 } from '../ButtonElement'
import { Box, Image, Flex } from "@chakra-ui/react"
import { MainRow } from './MainElements'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

const Main = ({ imgStart, topLine, headline, description, buttonLabel, img, alt, id, page }) => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
      <div className="main-container" id={id}>
        <Flex h="90vh" w="100%">
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
        <div className="main-wrapper">
          <MainRow imgStart={imgStart}>
            <Box className="column1">
              <Box width="80%">
                <p className="top-line">{topLine}</p>
                <h1 className="main-h1">{headline}</h1>
                <p className="main-desc" >{description}</p>
                <div className="btn-wrap-main">
                  <Button2
                    to={page}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                  > {buttonLabel}{hover ? <MdArrowForward className="arrow-forward" /> : <MdKeyboardArrowRight className="arrow-right" />}
                  </Button2>
                </div>
              </Box>
            </Box>
            <Box className="column2">
              <Image
                borderRadius="10"
                borderColor="black"
                src={img}
                alt={alt}
              />
            </Box>
          </MainRow>
        </div>
      </div>
  )
}

export default Main
