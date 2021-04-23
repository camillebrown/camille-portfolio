import React, { useState } from 'react'
import Main from '../components/Main'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Main/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Main {...homeObjOne}/>
            <Main {...homeObjTwo}/>
            <Main {...homeObjThree}/>
        </>
    )
}

export default Home
