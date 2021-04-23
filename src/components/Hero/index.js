import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import Button from '../ButtonElement'

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <div className="hero-container">
            <div className="hero-bg">
                <video autoPlay loop muted src={Video} type="video/mp4" />
            </div>
            <div className="hero-content">
                <h1 className="hero-h1">Developer, Creator, Traveler</h1>
                <p className="hero-p">Work with me to design websites for your brands and products.</p>
                <div className="hero-btn-wrapper">
                    <Button
                        to="/work"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        id="hero-btn"
                        primary="true"
                        dark="true"
                        >
                        Check Out My Latest Work! {hover ? <MdArrowForward className="arrow-forward" /> : <MdKeyboardArrowRight className="arrow-right" />}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
