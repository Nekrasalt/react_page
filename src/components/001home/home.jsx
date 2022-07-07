import React from 'react'
import './home.css';
import CV from './cv'
import Me from '../../assets/Profile Testimonials/nek.png'
import HeaderSocials from './headerSocials'
import { ImMenu } from 'react-icons/im'

const home = () => {
    return (
        <header id='#'>
            <div className='container container_header'>
                <h5>Hello mySelf</h5>
                <h1>Kuldeep Sethiya</h1>
                <h5 className="text-light">Full stack Developer</h5>
                <CV />
                <HeaderSocials />
                <div className="me">
                    <img src={Me} alt="profile pic" />
                </div>
                <div className="scroll-down"><ImMenu className='scrollIcon' />
                    <h5 className='Scroll_text'>Scroll Down</h5></div>
            </div>
        </header>
    )
}

export default home