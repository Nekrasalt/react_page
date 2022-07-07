import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { TbBrandTinder } from 'react-icons/tb'
import './footer.css'

const footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">Nekrasalt</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/kuldeep-sethiya-a222b71b2/" target='_blank'><FiLinkedin /></a>
                <a href="https://twitter.com/KuldeepSethiya" target='_blank'><FiTwitter /></a>
                <a href="https://www.youtube.com/channel/UC3DoVxfPBqxyrjI8Abw6aWQ" target='_blank'><FiYoutube /></a>
                <a href="https://www.instagram.com/nekrasalt/" target='_blank'><FiInstagram /></a>
                <a href="https://tinder.com" target='_blank'><TbBrandTinder /></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; NEKRASALT . All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default footer
