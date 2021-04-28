import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [messageData, setMessageData] = useState(
        {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            description: "",
            found_me: ""
        }
    )


    const handleChange = (e) => {
        setMessageData({ ...messageData, [e.target.name]: e.target.value })
    }

    const toggle = () => {
        setIsOpen(!isOpen)
        return (<Sidebar isOpen={isOpen} toggle={toggle} />)
    }

    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <LinkRouter className="nav-logo" to='/'>Camille Brown</LinkRouter>
                    <div className="mobile-icon2" onClick={toggle}>
                        <FaBars />
                    </div>
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
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-wrap">
                    <h1 className="contact-h1">Let's Work Together</h1>
                    <p className="contact-p"> Have a project in mind? <br></br>Send me a message using the form below. </p>
                    <form class="contact-form">
                        <input
                            type="text"
                            placeholder="First Name  *"
                            name="first_name"
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Last Name  *"
                            name="last_name"
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Email  *"
                            name="email"
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number  *"
                            name="phone"
                            onChange={handleChange}
                            className="input"
                        />
                        <textarea
                            placeholder="Please describe your project  *"
                            name="description"
                            onChange={handleChange}
                            className="textarea"
                        />
                        <textarea
                            placeholder="How did you find me? (LinkedIn, Referral, etc)"
                            name="found_me"
                            onChange={handleChange}
                            className="textarea"
                        />
                        <div className="btn-div">
                            <button id="submit" class="fa fa-search" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;


