import React, { useState } from 'react'
import Main from '../components/Main'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne, homeObjTwo } from '../components/Main/Data'
import Projects from '../components/Projects'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="body">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero />
        <Main {...homeObjOne} />
        <Projects />
        <Main {...homeObjTwo} />
      </div>
    </>
  )
}

export default Home
