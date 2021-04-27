import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrap">
                <section className="social-media">
                    <div className="social-media-wrap">
                        <LinkRouter className="social-logo" to='/'>
                            Camille Brown
                        </LinkRouter>
                        <small className="web-rights">Camille Brown © {new Date().getFullYear()}. All rights reserved.</small>
                        <div className="social-icons">
                            <a className="social-icon-link" href='//www.github.com/camillebrown'  target="_blank" aria-label="Github">
                                <FaGithub />
                            </a>
                            <a className="social-icon-link" href='//www.linkedin.com/in/camillenbrown/'  target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a className="social-icon-link" href='//www.instagram.com/camilllebrown'  target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a className="social-icon-link" href='//www.twitter.com/camilllebrown'  target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer
